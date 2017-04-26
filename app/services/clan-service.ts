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

  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzMzA1MjI0fQ.uP_jR7Ab1xJNSVRnaCUsWTJKqF8sPyE7FclWCAcrDffmWiTSBk9Y_EqDc3uNLHA73dWcz579dnYn_eQt9aXGsg';
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
