import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Clan } from '../models/clan';
import { clan } from '../models/clan';

@Injectable()
export class ClanService {

  private serverUrl = 'https://destiny-scheduler.herokuapp.com/';
  private memberEndpoint = 'api/member';
  private url = 'api/clan';

  private clan = clan;

  constructor(private http: Http) { }

  getClanFromServer(): Promise<Clan> {

    /*const headers = new Headers();
    headers.append('membership', '4611686018437203239');
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkxNTk1NDc3fQ.56RkfNjZm3x6U9L8SYFmcLQANXetiPi2oI9pgL1NP7HjptaJ3L5ocNGJ1sooWTZs0e_KrHI6NkxrYQdybBMHMQ');

    const url = this.serverUrl + this.gameEndpoint;
    console.log('url: ' + url);

    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json().data as Game[])
      .catch(this.handleError); */

    return null;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
