import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Game } from '../models/game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {

  private serverUrl = 'https://destiny-scheduler.herokuapp.com/';
  private gameEndpoint = 'api/game';

  constructor(private http: Http) { }

  getGamesFromServer(): Promise<Game[]> {
    const headers = new Headers();
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
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getGamesSlowly(): Promise<Game[]> {
    return new Promise(resolve => {
    // Simulate server latency with 1 second delay
    setTimeout(() => resolve(this.getGamesFromServer()), 1000);
  });
  }

  getAllGames(): Game[] {
    return GAMES;
  }

}
