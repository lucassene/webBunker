import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import * as moment from 'moment-timezone';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';

import { Clan } from '../models/clan';
import { DataService } from './data-service';

@Injectable()
export class ClanService {

  private serverUrl = 'http://localhost:4200/';
  private clanEndpoint = 'api/clan/';

  private authorization = sessionStorage.getItem('authKey');
  private membership = localStorage.getItem('membership');
  private groupId = localStorage.getItem('groupId');
  private zoneId = moment.tz.guess();
  private platform = localStorage.getItem('platform');

  private clan: Clan;

  constructor(private http: Http, private dataService: DataService) { }

  getClanInfo(groupID: number): Observable<any> {

    if (this.clan){
      console.log('clanInfo already available')
      return Observable.of(this.clan);
    } else {
      const headers = new Headers();
      headers.append('membership', this.membership);
      headers.append('platform', this.platform);
      headers.append('zoneId', this.zoneId);
      headers.append('clanId', this.groupId);
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
            //this.dataService.setClan(clan as Clan);
            this.clan = clan;
            return clan;
          }
        )
        .catch(err => this.handleError(err))
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
