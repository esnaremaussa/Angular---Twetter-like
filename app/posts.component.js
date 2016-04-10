System.register(['angular2/core', './twitter.service', './like.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, twitter_service_1, like_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(tweetsService) {
                    this.tweets = tweetsService.getTweet();
                }
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        styles: ["\n\t\th4 span{\n\t\t\tcolor: grey;\n\t\t}\n\t"],
                        template: "\n\t\t<div class=\"media\" *ngFor=\"#tweet of tweets\">\n\t\t  <div class=\"media-left\">\n\t\t    <a href=\"#\">\n\t\t      <img class=\"media-object\" [src]=\"tweet.image\" alt=\"...\">\n\t\t    </a>\n\t\t  </div>\n\t\t  <div class=\"media-body\">\n\t\t    <h4 class=\"media-heading\">{{tweet.header}} <span>{{tweet.user}}</span></h4>\n\t\t    {{tweet.body}}\n\t\t    <br />\n\t\t    <like [likes]=\"tweet.likes\"></like>\n\t\t  </div>\n\t\t  \n\t\t</div>\n\t",
                        providers: [twitter_service_1.TwitterService],
                        directives: [like_component_1.LikeComponent],
                    }), 
                    __metadata('design:paramtypes', [twitter_service_1.TwitterService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map