import {Component} from 'angular2/core';
import {PostsComponent} from './posts.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Tweet Application</h1>
    	<posts></posts>
    `,
    directives: [PostsComponent],
})
export class AppComponent { }