import {Component, Input} from 'angular2/core';

@Component({
	selector: 'like',
	styles: [`
		.likes{
			cursor:pointer;
		}
		.liked{
			color: red;
		}
	`],
	template:`
		<i 
			class="glyphicon glyphicon-heart-empty likes" 
			(click)="onClick()"
			[class.liked]="isliked"
		>
			{{likes}}
		</i>
	`
})
export class LikeComponent{
	@Input() likes = 0;
	isliked = false;

	onClick(){
		this.isliked = !this.isliked;
		this.likes += this.isliked ? 1: -1;
	}
}