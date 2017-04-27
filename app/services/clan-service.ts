import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Clan } from '../models/clan';
import { DataService } from './data-service';

@Injectable()
export class ClanService {

  private serverUrl = 'http://localhost:4200/';
  private clanEndpoint = 'api/clan/';

  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzMzk2OTAzfQ.WSkNNgj7Urmq1WPCEExzbMi6PYYOC4flEoUdj0Gekx12X3IY3BpIO1PqLu3PDG-2x2dly0g2xaT3K-5xVKXXfQ';
  private membership = '4611686018437203239';

  constructor(private http: Http, private dataService: DataService) { }

  getClanInfo(groupID: number): Observable<any> {

    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.clanEndpoint + groupID;
    console.log('url: ' + url);

    return this.http.get(url, options)
      .map((response: Response) => {
          const data = response.json();
          let clan = new Clan(
            data.groupId,
            data.name,
            data.icon,
            data.background,
            data.description
          );
          this.dataService.setClan(clan as Clan);
          return clan;
        }
      )
      .catch(err => this.handleError(err))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
