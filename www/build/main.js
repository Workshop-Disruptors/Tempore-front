webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RendezVousPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_display_display__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RendezVousPage = (function () {
    function RendezVousPage(navCtrl, DisplayProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.DisplayProvider = DisplayProvider;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
        this.loadDoctors();
    }
    RendezVousPage.prototype.loadDoctors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.DisplayProvider.listDoctors()
                .then(function (ans) {
                resolve(_this.doctors = ans);
            }, function (err) {
                console.log(err);
                var alert = _this.alertCtrl.create({
                    title: "Erreur",
                    subTitle: err.error,
                    buttons: ['OK']
                });
                reject(alert.present());
            });
        });
    };
    RendezVousPage.prototype.getItems = function (ev) {
        var _this = this;
        // Reset items back to all of the items
        this.loadDoctors()
            .then(function (ans) {
            // set val to the value of the searchbar
            var val = ev.target.value;
            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                _this.doctors = _this.doctors.filter(function (doctor) {
                    return (doctor.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
                console.log(_this.doctors);
            }
        });
    };
    RendezVousPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rendez-vous',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/rendez-vous/rendez-vous.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      À l\'heure ?\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n<ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let doctor of doctors" >\n      <h2>{{doctor.name}} - {{doctor.city}}</h2>\n      <h3>{{doctor.description}} - {{doctor.tel}}</h3>\n      <p>{{doctor.delay}} min de retard </p>\n     </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/rendez-vous/rendez-vous.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_display_display__["a" /* DisplayProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_display_display__["a" /* DisplayProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RendezVousPage);
    return RendezVousPage;
}());

//# sourceMappingURL=rendez-vous.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NouveauComptePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medecin_medecin__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_register_api_register_api__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NouveauComptePage = (function () {
    function NouveauComptePage(navCtrl, registerApiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.registerApiProvider = registerApiProvider;
        this.alertCtrl = alertCtrl;
        this.doctorData = {
            "name": "",
            "mail": "",
            "password": "",
            "passwordConf": "",
            "city": "",
            "tel": "",
            "description": ""
        };
    }
    NouveauComptePage.prototype.goToMedecin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__medecin_medecin__["a" /* MedecinPage */]);
    };
    NouveauComptePage.prototype.register = function () {
        var _this = this;
        console.log(this.doctorData);
        this.registerApiProvider.postDoctor(this.doctorData)
            .then(function (ans) {
            console.log(ans);
            var alert = _this.alertCtrl.create({
                title: "Réussi",
                subTitle: String(ans),
                buttons: ['OK']
            });
            alert.present();
            _this.goToMedecin({});
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: "Erreur",
                subTitle: err.error,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    NouveauComptePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nouveau-compte',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/nouveau-compte/nouveau-compte.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Nouveau compte\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <form id="nouveauCompte-form4" >\n    <ion-list id="nouveauCompte-list5">\n      <ion-item id="nouveauCompte-input9">\n        <ion-label>\n          Nom\n        </ion-label>\n        <ion-input [(ngModel)]="doctorData.name" name="name" type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="nouveauCompte-input10">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input [(ngModel)]="doctorData.mail" name="mail" type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="nouveauCompte-input11">\n        <ion-label>\n          Mot de passe\n        </ion-label>\n        <ion-input [(ngModel)]="doctorData.password" name="password" type="password" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="nouveauCompte-input16">\n        <ion-label>\n          Confirmer le mot de passe\n        </ion-label>\n        <ion-input [(ngModel)]="doctorData.passwordConf" name="passwordConf" type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-item id="nouveauCompte-input13">\n      <ion-label>\n        Ville\n      </ion-label>\n      <ion-input [(ngModel)]="doctorData.city" name="city" type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="nouveauCompte-input14">\n      <ion-label>\n        Téléphone\n      </ion-label>\n      <ion-input [(ngModel)]="doctorData.tel" type="tel" name="tel" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="nouveauCompte-input15">\n      <ion-label>\n        Description\n      </ion-label>\n      <ion-input [(ngModel)]="doctorData.description" name="descritpion" type="text" placeholder=""></ion-input>\n    </ion-item>\n    <button id="nouveauCompte-button6" ion-button color="stable" block on-click="register()">\n      Enregistrer\n    </button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/nouveau-compte/nouveau-compte.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_register_api_register_api__["a" /* RegisterApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_register_api_register_api__["a" /* RegisterApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NouveauComptePage);
    return NouveauComptePage;
}());

//# sourceMappingURL=nouveau-compte.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemporePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medecin_medecin__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rendez_vous_rendez_vous__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemporePage = (function () {
    function TemporePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TemporePage.prototype.goToMedecin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__medecin_medecin__["a" /* MedecinPage */]);
    };
    TemporePage.prototype.goToRendezVous = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__rendez_vous_rendez_vous__["a" /* RendezVousPage */]);
    };
    TemporePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tempore',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/tempore/tempore.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Accueil\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1" style="background-color:#76D6FF;">\n  <h1 id="tempore-heading1" style="text-align:center;">\n    Bienvenue sur Tempore\n  </h1>\n  <div id="tempore-markdown1" style="text-align:center;">\n    <p style="color:#000000;">\n      Le retard est votre allié !\n    </p>\n  </div>\n    <div class="spacer" style="height:100px;" id="medecin-spacer5"></div>\n  <div id="tempore-markdown1" style="text-align:center;">\n  <button ion-button color="light" style="text-align:center;" round on-click="goToRendezVous()"> Votre médecin est-il à l\'heure ?</button>\n  <div class="spacer" style="height:80px;" id="medecin-spacer5"></div>\n  <p>\n  Et si vous êtes un praticien :\n  </p>\n  <div class="spacer" style="height:20px;" id="medecin-spacer5"></div>\n  <button ion-button color="light" style="text-align:center;" round on-click="goToMedecin()"> Informez vos patients de l\'avancée de vos consultations </button>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/tempore/tempore.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TemporePage);
    return TemporePage;
}());

//# sourceMappingURL=tempore.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medecin_medecin__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nouveau_compte_nouveau_compte__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, registerApiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.registerApiProvider = registerApiProvider;
        this.alertCtrl = alertCtrl;
        this.doctorLogin = {
            "mail": "",
            "password": "",
        };
    }
    LoginPage.prototype.goToMedecin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__medecin_medecin__["a" /* MedecinPage */]);
    };
    LoginPage.prototype.goToNouveauCompte = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__nouveau_compte_nouveau_compte__["a" /* NouveauComptePage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.doctorLogin);
        this.registerApiProvider.loginDoctor(this.doctorLogin)
            .then(function (ans) {
            var alert = _this.alertCtrl.create({
                title: "Réussi",
                subTitle: String(ans),
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            _this.goToMedecin({});
                        }
                    }]
            });
            alert.present();
        }, function (err) {
            console.log(err);
            var alert = _this.alertCtrl.create({
                title: "Erreur",
                subTitle: err.error,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/login/login.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="login-form3">\n    <ion-list id="login-list4">\n      <ion-item id="login-input7">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input [(ngModel)]="doctorLogin.mail" name="mail" type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input8">\n        <ion-label>\n          Mot de passe\n        </ion-label>\n        <ion-input [(ngModel)]="doctorLogin.password" name="password" type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer3"></div>\n    <button id="login-button4" ion-button color="stable" block on-click="login()">\n      Log in\n    </button>\n    <button id="login-button5" ion-button clear color="positive" block on-click="goToNouveauCompte()">\n      Ou créer un compte\n    </button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__["a" /* RegisterApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__["a" /* RegisterApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DisplayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DisplayProvider = (function () {
    function DisplayProvider(http) {
        this.http = http;
    }
    DisplayProvider.prototype.listDoctors = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            _this.http.get("http://afternoon-river-25926.herokuapp.com/doctor/list", { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    DisplayProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DisplayProvider);
    return DisplayProvider;
}());

//# sourceMappingURL=display.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tempore_tempore__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_rendez_vous_rendez_vous__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_medecin_medecin__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_nouveau_compte_nouveau_compte__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mes_informations_mes_informations__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_register_api_register_api__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_display_display__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tempore_tempore__["a" /* TemporePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_rendez_vous_rendez_vous__["a" /* RendezVousPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_medecin_medecin__["a" /* MedecinPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_nouveau_compte_nouveau_compte__["a" /* NouveauComptePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mes_informations_mes_informations__["a" /* MesInformationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tempore_tempore__["a" /* TemporePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_rendez_vous_rendez_vous__["a" /* RendezVousPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_medecin_medecin__["a" /* MedecinPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_nouveau_compte_nouveau_compte__["a" /* NouveauComptePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mes_informations_mes_informations__["a" /* MesInformationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_register_api_register_api__["a" /* RegisterApiProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_display_display__["a" /* DisplayProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_rendez_vous_rendez_vous__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_nouveau_compte_nouveau_compte__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_medecin_medecin__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tempore_tempore__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tempore_tempore__["a" /* TemporePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goToTempore = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tempore_tempore__["a" /* TemporePage */]);
    };
    MyApp.prototype.goToRendezVous = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_rendez_vous_rendez_vous__["a" /* RendezVousPage */]);
    };
    MyApp.prototype.goToNouveauCompte = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_nouveau_compte_nouveau_compte__["a" /* NouveauComptePage */]);
    };
    MyApp.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.goToMedecin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_medecin_medecin__["a" /* MedecinPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/app/app.html"*/`<ion-menu [content]="mainContent">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Menu\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content id="side-menu21">\n    <ion-list id="menu-list1">\n      <ion-item color="none" menuClose="" on-click="goToTempore()" id="menu-list-item1">\n        Accueil\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToRendezVous()" id="menu-list-item2">\n        À l\'heure ?\n      </ion-item>\n      <ion-item color="none" menuClose="" on-click="goToMedecin()" id="menu-list-item3">\n        Médecin\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mainContent [root]="rootPage"></ion-nav>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesInformationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MesInformationsPage = (function () {
    function MesInformationsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MesInformationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mes-informations',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/mes-informations/mes-informations.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Mes informations\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="mesInformations-form6">\n    <ion-list id="mesInformations-list7">\n      <ion-item id="mesInformations-input17">\n        <ion-label>\n          Nom\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="mesInformations-input18">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="mesInformations-input19">\n        <ion-label>\n          Mot de passe\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="mesInformations-input20">\n        <ion-label>\n          Confirmer le mot de passe\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-item id="mesInformations-input21">\n      <ion-label>\n        Ville\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="mesInformations-input22">\n      <ion-label>\n        Téléphone\n      </ion-label>\n      <ion-input type="tel" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="mesInformations-input23">\n      <ion-label>\n        Description\n      </ion-label>\n      <ion-input type="text" placeholder=""></ion-input>\n    </ion-item>\n    <button id="mesInformations-button11" ion-button color="stable" block>\n      Enregistrer\n    </button>\n  </form>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/mes-informations/mes-informations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MesInformationsPage);
    return MesInformationsPage;
}());

//# sourceMappingURL=mes-informations.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedecinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tempore_tempore__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedecinPage = (function () {
    function MedecinPage(navCtrl, registerApiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.registerApiProvider = registerApiProvider;
        this.alertCtrl = alertCtrl;
        this.loadInfo();
    }
    MedecinPage.prototype.goToTempore = function (params) {
        if (!params)
            params = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tempore_tempore__["a" /* TemporePage */]);
    };
    MedecinPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MedecinPage.prototype.errNotConnected = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Non connecté",
            subTitle: "Vous devez être connecté pour accéder à cette page.",
            buttons: [{
                    text: 'Connexion',
                    handler: function () {
                        _this.goToLogin({});
                    }
                }, {
                    text: 'Annuler',
                    handler: function () {
                        _this.goToTempore({});
                    }
                }]
        });
        alert.present();
    };
    MedecinPage.prototype.loadInfo = function () {
        var _this = this;
        this.registerApiProvider.infoDoctor()
            .then(function (ans) {
            _this.delay = ans.delay;
            _this.name = ans.name;
        }, function (err) {
            if (err = "not connected") {
                _this.errNotConnected();
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "Erreur",
                    subTitle: err.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    MedecinPage.prototype.modifyDelay = function (newdelay) {
        var _this = this;
        this.registerApiProvider.delay(newdelay)
            .then(function (ans) {
            _this.loadInfo();
        }, function (err) {
            if (err = "not connected") {
                _this.errNotConnected();
            }
            else {
                console.log(err);
                var alert_2 = _this.alertCtrl.create({
                    title: "Erreur",
                    subTitle: err.error,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    MedecinPage.prototype.add10 = function () {
        console.log(this.delay + 10);
        this.modifyDelay(this.delay + 10);
    };
    MedecinPage.prototype.remove10 = function () {
        console.log(this.delay - 10);
        this.modifyDelay(this.delay - 10);
    };
    MedecinPage.prototype.raz = function () {
        this.modifyDelay(0);
    };
    MedecinPage.prototype.logout = function () {
        var _this = this;
        this.registerApiProvider.logout()
            .then(function (ans) {
            _this.goToTempore({});
        }, function (err) {
            if (err = "not connected") {
                _this.errNotConnected();
            }
            else {
                console.log(err);
                var alert_3 = _this.alertCtrl.create({
                    title: "Erreur",
                    subTitle: err.error,
                    buttons: ['OK']
                });
                alert_3.present();
            }
        });
    };
    MedecinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medecin',template:/*ion-inline-start:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/medecin/medecin.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Medecin\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <div id="medecin-container3"></div>\n  <button id="medecin-button7" ion-button color="danger" block on-click="add10()">\n    + 10 min\n  </button>\n  <div id="medecin-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n     Retard actuel : {{delay}} MIN\n    </p>\n  </div>\n  <button id="medecin-button8" ion-button color="secondary" block on-click="remove10()">\n    - 10 min\n  </button>\n    <div class="spacer" style="height:10px;" id="medecin-spacer4"></div>\n    <button id="medecin-button9" ion-button clear color="positive" block on-click="raz()">\n    RAZ\n  </button>\n    <div class="spacer" style="height:100px;" id="medecin-spacer5"></div>\n    <div id="medecin-markdown8" style="text-align:center;" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      {{name}} \n    </p>\n  </div>\n  <button id="medecin-button10" ion-button clear color="positive" block>\n    Mettre à jour mes informations\n  </button>\n    <button id="medecin-button11" ion-button clear color="danger" block on-click="logout()">\n    Logout\n  </button>\n</ion-content>`/*ion-inline-end:"/Users/gael/Documents/GitHub/Tempore-front/src/pages/medecin/medecin.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__["a" /* RegisterApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_register_api_register_api__["a" /* RegisterApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
    ], MedecinPage);
    return MedecinPage;
}());

//# sourceMappingURL=medecin.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the RegisterApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RegisterApiProvider = (function () {
    function RegisterApiProvider(http) {
        this.http = http;
    }
    RegisterApiProvider.prototype.postDoctor = function (doctorData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            var body = {
                name: doctorData.name,
                mail: doctorData.mail,
                password: doctorData.password,
                passwordConf: doctorData.passwordConf,
                city: doctorData.city,
                tel: doctorData.tel,
                description: doctorData.description
            };
            _this.http.post("http://afternoon-river-25926.herokuapp.com/doctor/register", body, { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    RegisterApiProvider.prototype.loginDoctor = function (doctorLogin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            var body = {
                logmail: doctorLogin.mail,
                logpassword: doctorLogin.password
            };
            _this.http.post("http://afternoon-river-25926.herokuapp.com/doctor/login", body, { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    ;
    RegisterApiProvider.prototype.infoDoctor = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            _this.http.get("http://afternoon-river-25926.herokuapp.com/doctor/profile", { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    RegisterApiProvider.prototype.delay = function (newdelay) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            var body = {
                delay: newdelay
            };
            _this.http.post("http://afternoon-river-25926.herokuapp.com/doctor/profile", body, { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    RegisterApiProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            _this.http.get("http://afternoon-river-25926.herokuapp.com/doctor/logout", { withCredentials: true })
                .subscribe(function (ans) {
                resolve(ans);
            }, function (err) {
                reject(err);
            });
        });
    };
    RegisterApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RegisterApiProvider);
    return RegisterApiProvider;
}());

//# sourceMappingURL=register-api.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map