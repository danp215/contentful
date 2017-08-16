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
var contentful_service_1 = require("../../services/contentful.service");
var platform_browser_1 = require("@angular/platform-browser");
var ShowsComponent = (function () {
    function ShowsComponent(_contentfulService, _sanitizer) {
        var _this = this;
        this._contentfulService = _contentfulService;
        this._sanitizer = _sanitizer;
        this._contentfulService.getShows().subscribe(function (res) {
            _this.shows = res.items;
            console.log(_this.shows);
        });
    }
    ShowsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shows',
            templateUrl: 'shows.component.html'
        }),
        __metadata("design:paramtypes", [contentful_service_1.contentfulService,
            platform_browser_1.DomSanitizer])
    ], ShowsComponent);
    return ShowsComponent;
}());
exports.ShowsComponent = ShowsComponent;
//# sourceMappingURL=shows.component.js.map