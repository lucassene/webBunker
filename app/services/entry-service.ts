import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from '../models/member';
import { Entry } from '../models/entry';
import { Title } from '../models/member';
import { defaultTitle } from '../models/member';

@Injectable()
export class EntryService {

  private serverUrl = 'http://localhost:4200/';
  private gameEndpoint = 'api/game/';
  private entryEndpoint = '/entries'

  private entries: Entry[];
  private defaultTitle = defaultTitle;

  constructor(private http: Http) { }

  getEntries(id: number): Observable<any[]> {

    const headers = new Headers();
    headers.append('membership', '4611686018437203239');
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzMTI5Nzc5fQ.G1WJnU9IYdpZ5M4nEBB9K5rgD1LxHI9Duk25iOsjAWVtDu3b7hNxHM6msbxKDSVU45OfrVV4VRLmMchHEz2yrw');
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.gameEndpoint + id + this.entryEndpoint;
    console.log('url: ' + url);
    return this.http.get(url, options)
      .map((response: Response) => {
        const data = response.json();
        let objs: any[] = [];
        for (let i=0;i<data.length;i++){
          let title: Title;
          if(data[i].member.memberTitle === null){
            console.log('memberTitle is null!');
            title = this.defaultTitle;
          } else {
            title = new Title(
              data[i].member.memberTitle.en,
              data[i].member.memberTitle.pt,
              data[i].member.memberTitle.es
            )
          }
          let entry = new Entry(
            data[i].id,
            new Member(
              data[i].member.membership,
              data[i].member.name,
              data[i].member.icon,
              data[i].member.platform,
              data[i].member.likes,
              data[i].member.dislikes,
              data[i].member.gamesCreated,
              data[i].member.gamesPlayed,
              title
            ),
            data[i].time
          );
            objs.push(entry);
          }
          return objs
      })
      .catch(err => this.handleError(err));
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
