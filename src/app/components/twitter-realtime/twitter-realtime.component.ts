import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-twitter-realtime',
  templateUrl: './twitter-realtime.component.html',
  styleUrls: ['./twitter-realtime.component.css']
})
export class TwitterRealtimeComponent implements OnInit {

  tweets: Tweet[];
  shadowTweets: Tweet[];
  hashtag: string;

  constructor(private TwitterService: TwitterService) { }

  ngOnInit(): void {
    
    this.hashtag = "superbowl";
    this.TwitterService.setupSocketConnection();

    this.TwitterService.tweets.subscribe(tweets => {

      if(this.shadowTweets === undefined){
          this.shadowTweets = tweets.reverse();
      }
      else{

          this.shadowTweets = this.shadowTweets.concat(tweets);
          this.tweets = this.shadowTweets.slice().reverse();

          //Delete duplicates
          this.tweets  = this.tweets.reduce((acc, current) => {
            const x = acc.find(item => item.id === current.id);
            if (!x) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []);
      }
    });
  }

  onChange(){
    this.TwitterService.searchByHashtag(this.hashtag.toLowerCase());
    this.tweets = [];
    console.log(this.hashtag);
  }
}