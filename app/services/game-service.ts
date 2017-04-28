import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Game } from '../models/game';
import { Creator } from '../models/game';
import { Event } from '../models/event';
import { EventType } from '../models/event-type';

import { DataService } from './data-service';

@Injectable()
export class GameService {

  private serverUrl = 'http://localhost:4200/';
  private gameEndpoint = 'api/game';

  private games: Game[];

  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzNDgzNTAwfQ.Zwlc3W8QlWCoNXMrdqXj6S8gVhgua_B9Op9euRUrzBODzRTylpJmsbzfgiMv6MqlLAZIwEsHKZF1F_F70tXq_w';
  ///*Fernando*/private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDQ5NzYzNzMwIiwiZXhwIjoxNDkzNDk0NzU3fQ._E7Ec0qb3X0DudssNdmwaGyl4f9mhLvkMT-eTXW5_S_uPDqQza7egO-07R1qLsZJPeBG2wo_g2Sb0npATEGfZQ';
  private membership = '4611686018437203239';
  ///*Fernando*/private membership = '4611686018449763730';

  constructor(private http: Http, private dataService: DataService) { }

  getGamesFromServer(): Observable<any[]> {

    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint;
    console.log('url: ' + url);
    return this.http.get(url, options)
      .map((response: Response) => {
          const data = response.json();
          let objs: any[] = [];
          for (let i=0;i<data.length;i++){
            let game = new Game(
              data[i].id,
              new Creator (
                data[i].creator.membership,
                data[i].creator.name
              ),
              new Event (
                data[i].event.id,
                data[i].event.icon,
                data[i].event.minLight,
                data[i].event.maxGuardians,
                new EventType (
                  data[i].event.eventType.id,
                  data[i].event.eventType.icon,
                  data[i].event.eventType.en,
                  data[i].event.eventType.pt,
                  data[i].event.eventType.es
                ),
                data[i].event.en,
                data[i].event.pt,
                data[i].event.es
              ),
              data[i].time,
              data[i].light,
              data[i].status,
              data[i].comment,
              data[i].inscriptions,
              data[i].joined,
              data[i].evaluated
            );
            objs.push(game);
          }
          this.dataService.setGames(objs as Game[]);
          this.games = objs as Game[];
          return objs
      })
      .catch(err => this.handleError(err))
  }

  getGameById(id: number): Game{
    if (this.games){
      console.log('game data already got');
      return this.games.find(game => game.id === id);
    }
  }

  createEvent(json: string): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    headers.append('Content-Type', 'application/json')
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint;
    console.log('url: ' + url);
    return this.http.post(url, json, options)
      .map((response: Response) => { return response})
      .catch(err => this.handleError(err))
  }

  deleteEvent(id: number): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    headers.append('Content-Type', 'application/json')
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + '/' + id;
    console.log('url: ' + url);
    return this.http.delete(url, options)
      .map((response: Response) => { return response})
      .catch(err => this.handleError(err))
  }

  joinEvent(id: number): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + '/' + id + '/join';
    console.log('url: ' + url);
    return this.http.post(url, options)
      .map((response: Response) => { return response})
      .catch(err => this.handleError(err))
  }

  leaveEvent(id: number): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + '/' + id + '/leave';
    console.log('url: ' + url);
    return this.http.delete(url, options)
      .map((response: Response) => { return response})
      .catch(err => this.handleError(err))
  }

  validateEvent(id: number, json: string): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + '/' + id + '/validate';
    console.log('url: ' + url);
    return this.http.post(url, json, options)
      .map((response: Response) => { return response})
      .catch(err => this.handleError(err))
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
