System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TwitterService;
    return {
        setters:[],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.getTweet = function () {
                    return [
                        {
                            image: 'http://lorempixel.com/100/100/people/?' + Math.random(),
                            header: 'Windward',
                            body: 'The spin about how the public likes certain parts of the health bill ignores the fact that the whole bill polls like typhoid',
                            likes: 0,
                            user: '@windwardstudios'
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people/?' + Math.random(),
                            header: 'AngularJs News',
                            body: 'Who says the parties can’t come together? Republicans have supported the Patriot Act for years & now Dems love it too!',
                            likes: 5,
                            user: '@angularjs_news'
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people/?' + Math.random(),
                            header: 'UX and Bootstrap',
                            body: 'The Abe Lincoln loathing in some quarters may be intellectually defensible, but it’s wrong & unexplainable to the public.',
                            likes: 1,
                            user: '@3rdwave'
                        }
                    ];
                };
                TwitterService.prototype.getRandom = function () {
                    return Math.random();
                };
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map