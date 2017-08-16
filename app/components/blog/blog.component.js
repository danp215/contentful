"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contentful_service_1 = require("../../services/contentful.service");
var BlogComponent = (function () {
    function BlogComponent(router, _contentfulService) {
        this.router = router;
        this._contentfulService = _contentfulService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            var entry = params['id'];
            _this._contentfulService.getBlog(entry).subscribe(function (post) {
                _this.post = post.fields;
            });
        });
    };
    BlogComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'blog',
            templateUrl: 'blog.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            contentful_service_1.contentfulService])
    ], BlogComponent);
    return BlogComponent;
}());
exports.BlogComponent = BlogComponent;
//# sourceMappingURL=blog.component.js.map