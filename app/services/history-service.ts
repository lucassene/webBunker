import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Game } from '../models/game';
import { Creator } from '../models/game';
import { Event } from '../models/event';
import { EventType } from '../models/event-type';
import { History } from '../models/history';
import { Title } from '../models/member';
import { defaultTitle } from '../models/member';

import { DataService } from './data-service';

@Injectable()
export class HistoryService {

  private serverUrl = 'http://localhost:4200/';
  private gameEndpoint = 'api/game/';
  private historyEndpoint = 'history';

  private games: Game[];
  private defaultTitle = defaultTitle;

  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzMzA1MjI0fQ.uP_jR7Ab1xJNSVRnaCUsWTJKqF8sPyE7FclWCAcrDffmWiTSBk9Y_EqDc3uNLHA73dWcz579dnYn_eQt9aXGsg';
  private membership = '4611686018437203239';

  constructor(private http: Http, private dataService: DataService) { }

  getHistoryGames(): Observable<any[]> {

    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + this.historyEndpoint;
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
          this.dataService.setHistory(objs as Game[]);
          return objs
      })
      .catch(err => this.handleError(err))
  }

  getGameHistory(gameID: number): Observable<any>{
    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + gameID + '/' + this.historyEndpoint;
    console.log('url: ' + url);
    return this.http.get(url, options)
      .map((response: Response) => {
        const data = response.json();
        let objs: any[] = [];
        for (let i=0;i<data.length;i++){
          let title: Title;
          if(data[i].memberTitle === null){
            console.log('memberTitle is null!');
            title = this.defaultTitle;
          } else {
            title = new Title(
              data[i].memberTitle.en,
              data[i].memberTitle.pt,
              data[i].memberTitle.es
            )
          }
          let member = new History(
              data[i].membership,
              data[i].name,
              data[i].icon,
              data[i].totalLikes,
              data[i].totalDislikes,
              title
          );
            objs.push(member);
          }
          console.log(objs);
          return objs
      })
      .catch(err => this.handleError(err))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
