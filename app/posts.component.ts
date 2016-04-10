import {Component} from 'angular2/core';
import {TwitterService} from './twitter.service';
import {LikeComponent} from './like.component'

@Component({
	selector: 'posts',
	styles: [`
		h4 span{
			color: grey;
		}
	`],
	template: `
		<div class="media" *ngFor="#tweet of tweets">
		  <div class="media-left">
		    <a href="#">
		      <img class="media-object" [src]="tweet.image" alt="...">
		    </a>
		  </div>
		  <div class="media-body">
		    <h4 class="media-heading">{{tweet.header}} <span>{{tweet.user}}</span></h4>
		    {{tweet.body}}
		    <br />
		    <like [likes]="tweet.likes"></like>
		  </div>
		  
		</div>
	`,
	providers: [TwitterService],
	directives: [LikeComponent],
})
export class PostsComponent{
	tweets;
	countlikes;

	constructor(tweetsService: TwitterService) {
		this.tweets = tweetsService.getTweet();
	}

}