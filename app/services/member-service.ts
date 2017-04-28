import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Member } from '../models/member';
import { Title } from '../models/member';
import { Event } from '../models/event';
import { EventType } from '../models/event-type';
import { Profile, PlayedType, FavoriteEvent } from '../models/profile';
import { defaultTitle } from '../models/member';

import { DataService } from './data-service';

@Injectable()
export class MemberService {

  private serverUrl = 'http://localhost:4200/';
  private membersFullEndpoint = '/members-full';
  private clanEndpoint = 'api/clan/';
  private memberEndpoint = 'api/member/';
  private profileEndpoint = '/profile';

  private defaultTitle = defaultTitle;

  private authorization = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NjExNjg2MDE4NDM3MjAzMjM5IiwiZXhwIjoxNDkzNDgzNTAwfQ.Zwlc3W8QlWCoNXMrdqXj6S8gVhgua_B9Op9euRUrzBODzRTylpJmsbzfgiMv6MqlLAZIwEsHKZF1F_F70tXq_w';
  private membership = '4611686018437203239';

  constructor(private http: Http, private dataService: DataService) { }

  getMembers(groupID: number): Observable<any[]> {

    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.clanEndpoint + groupID + this.membersFullEndpoint;

    return this.http.get(url, options)
      .map((response: Response) => {
        const data = response.json();
        let objs: any[] = [];
        for (let i=0;i<data.length;i++){
          let title: Title;
          if(data[i].memberTitle === null){
            title = this.defaultTitle;
          } else {
            title = new Title(
              data[i].memberTitle.en,
              data[i].memberTitle.pt,
              data[i].memberTitle.es
            )
          }
          let member = new Member(
              data[i].membership,
              data[i].name,
              data[i].icon,
              data[i].platform,
              data[i].likes,
              data[i].dislikes,
              data[i].gamesCreated,
              data[i].gamesPlayed,
              title
          );
            objs.push(member);
          }
          this.dataService.setMembers(objs as Member[]);
          return objs
      })
      .catch(err => this.handleError(err));

  }

  getMemberProfile(membership: string): Observable<any>{

    const headers = new Headers();
    headers.append('membership', this.membership);
    headers.append('platform', '2');
    headers.append('zoneId', 'America/Sao_Paulo');
    headers.append('clanId', '548691');
    headers.append('Authorization', this.authorization);
    const options = new RequestOptions({headers: headers});
    const url = this.serverUrl + this.memberEndpoint + membership + this.profileEndpoint;

    return this.http.get(url, options)
      .map((response: Response) => {
        const data = response.json();
        console.log(data);
        let title: Title;
        if (data.member.memberTitle === null){
          title = this.defaultTitle;
        } else {
          title = new Title(
            data.member.memberTitle.en,
            data.member.memberTitle.pt,
            data.member.memberTitle.es
          )
        }

        let playedTypes: PlayedType[] = [];
        for (let i=0;i<data.playedTypes.length;i++){
          let item = new PlayedType(
            data.playedTypes[i].eventTypeId,
            data.playedTypes[i].eventTypeName,
            data.playedTypes[i].timesPlayed,
            data.playedTypes[i].en,
            data.playedTypes[i].pt,
            data.playedTypes[i].es
          )
          playedTypes.push(item);
        }

        let favEvent: FavoriteEvent;
        if (data.favoriteEvent !== null){
          favEvent = new FavoriteEvent(
            data.favoriteEvent.timesPlayed,
            new Event(
              data.favoriteEvent.event.id,
              data.favoriteEvent.event.icon,
              data.favoriteEvent.event.minLight,
              data.favoriteEvent.event.maxGuardians,
              new EventType(
                data.favoriteEvent.event.eventType.id,
                data.favoriteEvent.event.eventType.icon,
                data.favoriteEvent.event.eventType.en,
                data.favoriteEvent.event.eventType.pt,
                data.favoriteEvent.event.eventType.es
              ),
              data.favoriteEvent.event.en,
              data.favoriteEvent.event.pt,
              data.favoriteEvent.event.es
            )
          )
        }

        let profile = new Profile(
          new Member(
            data.member.membership,
            data.member.name,
            data.member.icon,
            data.member.platform,
            data.member.likes,
            data.member.dislikes,
            data.member.gamesCreated,
            data.member.gamesPlayed,
            title
          ),
          data.evaluationsMade,
          playedTypes as PlayedType[],
          favEvent

        )
        console.log(profile);
        return profile;
      })
      .catch(err => this.handleError(err));

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
