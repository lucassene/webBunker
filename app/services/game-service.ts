import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game';

@Injectable()
export class GameService {

  private serverUrl = 'http://localhost:4200/';
  private gameEndpoint = 'api/game';

  constructor(private http: Http) { }

  getGamesFromServer(): Promise<Game[]> {

    const headers = new Headers();
    headers.append('membership', '4611686018437203239');
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkyNzE4OTM5fQ.0H6V6yi1fKMYIwlnXr3ZVY5_kCTcq6CA2RBpq0VB-Hopkw0V7AZMHei3PztZHno96d8mjnmKAEhMNJuGQxt1XA');

    const url = this.serverUrl + this.gameEndpoint;
    console.log('url: ' + url);
    return this.http.get(url, {headers: headers})
      .toPromise()
      .then(response => response.json().data as Game[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
