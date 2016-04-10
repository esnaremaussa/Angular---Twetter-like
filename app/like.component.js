System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.likes = 0;
                    this.isliked = false;
                }
                LikeComponent.prototype.onClick = function () {
                    this.isliked = !this.isliked;
                    this.likes += this.isliked ? 1 : -1;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "likes", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        styles: ["\n\t\t.likes{\n\t\t\tcursor:pointer;\n\t\t}\n\t\t.liked{\n\t\t\tcolor: red;\n\t\t}\n\t"],
                        template: "\n\t\t<i \n\t\t\tclass=\"glyphicon glyphicon-heart-empty likes\" \n\t\t\t(click)=\"onClick()\"\n\t\t\t[class.liked]=\"isliked\"\n\t\t>\n\t\t\t{{likes}}\n\t\t</i>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map