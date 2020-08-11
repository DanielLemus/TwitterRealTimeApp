import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Tweet} from '../models/tweet';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  private environment = {
    production: false,
    SOCKET_ENDPOINT: 'http://localhost:3100'
  };

  private socket;

  constructor(private http: HttpClient) { }

  setupSocketConnection() {
    this.socket = io(this.environment.SOCKET_ENDPOINT);
  }

  tweets = new Observable<Tweet[]>((observer) => {

    this.socket.on('tweets', function (tweets: string) {
      observer.next(JSON.parse(tweets).statuses.reverse());
      console.log('tweets', JSON.parse(tweets).statuses);
    });

  });

  searchByHashtag(hashtag: string){
        this.socket.emit("searchByHashtag", hashtag);
  }
}