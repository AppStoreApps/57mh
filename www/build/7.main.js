webpackJsonp([7],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person__ = __webpack_require__(295);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageModule", function() { return PersonPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonPageModule = (function () {
    function PersonPageModule() {
    }
    return PersonPageModule;
}());
PersonPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__person__["a" /* PersonPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__person__["a" /* PersonPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__person__["a" /* PersonPage */]
        ]
    })
], PersonPageModule);

//# sourceMappingURL=person.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_public__ = __webpack_require__(100);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonPage = (function () {
    function PersonPage(navCtrl, navParams, pubilcService, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pubilcService = pubilcService;
        this.menuCtrl = menuCtrl;
        this.Version = '';
        this.itimer = null;
        this.Version = this.pubilcService.Version;
        this.name = this.pubilcService.user.nickname;
        this.img = "https://avatars0.githubusercontent.com/u/11835988?v=3&s=460";
        this.menuCtrl.close();
    }
    PersonPage.prototype.out = function () {
        var _this = this;
        this.pubilcService.presentLoadingDefault();
        this.pubilcService.clearStorage();
        this.itimer = setTimeout(function () {
            clearTimeout(_this.itimer);
            _this.pubilcService.presentLoadingDismiss();
            _this.navCtrl.pop();
        }, 1000);
    };
    return PersonPage;
}());
PersonPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-person',template:/*ion-inline-start:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/person/person.html"*/'<ion-header no-border>\n\n    <ion-navbar color="fff">\n        <ion-title>个人信息</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n        <ion-item>\n            头像:\n            <ion-avatar item-right>\n                <img [src]="img">\n            </ion-avatar>\n        </ion-item>\n        <ion-item>\n            昵称:\n            <ion-note item-right>\n                {{name}}\n            </ion-note>\n        </ion-item>\n\n    </ion-list>\n    <br/>\n    <br/>\n    <button ion-button full (click)="out();">注销</button>\n</ion-content>'/*ion-inline-end:"/Users/apple/Documents/ionic2/3.3.0/buka/src/pages/person/person.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_public__["a" /* pubilcService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], PersonPage);

//# sourceMappingURL=person.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map