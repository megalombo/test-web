function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _denunciaform_denunciaform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./denunciaform/denunciaform.component */
    "./src/app/denunciaform/denunciaform.component.ts");
    /* harmony import */


    var _denunciaform_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./denunciaform/formulario/formulario.component */
    "./src/app/denunciaform/formulario/formulario.component.ts");
    /* harmony import */


    var _seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seguimiento/seguimiento.component */
    "./src/app/seguimiento/seguimiento.component.ts");
    /* harmony import */


    var _denunciaform_formulario_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./denunciaform/formulario/registro/registro.component */
    "./src/app/denunciaform/formulario/registro/registro.component.ts");
    /* harmony import */


    var _seguimiento_estado_estado_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./seguimiento/estado/estado.component */
    "./src/app/seguimiento/estado/estado.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'formulariodenuncia',
      component: _denunciaform_denunciaform_component__WEBPACK_IMPORTED_MODULE_3__["DenunciaformComponent"]
    }, {
      path: 'formulariodenuncia/formulario',
      component: _denunciaform_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioComponent"]
    }, {
      path: 'formulariodenuncia/formulario/registro',
      component: _denunciaform_formulario_registro_registro_component__WEBPACK_IMPORTED_MODULE_6__["RegistroComponent"]
    }, {
      path: 'seguimiento',
      component: _seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_5__["SeguimientoComponent"]
    }, {
      path: 'seguimiento/estado',
      component: _seguimiento_estado_estado_component__WEBPACK_IMPORTED_MODULE_7__["EstadoComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'EthicsWeb';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _denunciaform_denunciaform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./denunciaform/denunciaform.component */
    "./src/app/denunciaform/denunciaform.component.ts");
    /* harmony import */


    var _denunciaform_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./denunciaform/formulario/formulario.component */
    "./src/app/denunciaform/formulario/formulario.component.ts");
    /* harmony import */


    var _seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./seguimiento/seguimiento.component */
    "./src/app/seguimiento/seguimiento.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _denunciaform_formulario_registro_registro_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./denunciaform/formulario/registro/registro.component */
    "./src/app/denunciaform/formulario/registro/registro.component.ts");
    /* harmony import */


    var _seguimiento_estado_estado_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./seguimiento/estado/estado.component */
    "./src/app/seguimiento/estado/estado.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _denunciaform_denunciaform_component__WEBPACK_IMPORTED_MODULE_9__["DenunciaformComponent"], _denunciaform_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__["FormularioComponent"], _seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_11__["SeguimientoComponent"], _denunciaform_formulario_registro_registro_component__WEBPACK_IMPORTED_MODULE_14__["RegistroComponent"], _seguimiento_estado_estado_component__WEBPACK_IMPORTED_MODULE_15__["EstadoComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBRootModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _denunciaform_denunciaform_component__WEBPACK_IMPORTED_MODULE_9__["DenunciaformComponent"], _denunciaform_formulario_formulario_component__WEBPACK_IMPORTED_MODULE_10__["FormularioComponent"], _seguimiento_seguimiento_component__WEBPACK_IMPORTED_MODULE_11__["SeguimientoComponent"], _denunciaform_formulario_registro_registro_component__WEBPACK_IMPORTED_MODULE_14__["RegistroComponent"], _seguimiento_estado_estado_component__WEBPACK_IMPORTED_MODULE_15__["EstadoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/denunciaform/denunciaform.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/denunciaform/denunciaform.component.ts ***!
    \********************************************************/

  /*! exports provided: DenunciaformComponent */

  /***/
  function srcAppDenunciaformDenunciaformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DenunciaformComponent", function () {
      return DenunciaformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DenunciaformComponent = /*#__PURE__*/function () {
      function DenunciaformComponent(router) {
        _classCallCheck(this, DenunciaformComponent);

        this.router = router;
        this.aviso_privacidad = false;
      }

      _createClass(DenunciaformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "siguiente",
        value: function siguiente() {
          if (this.aviso_privacidad == false) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire("Check!", "Acepte las condiciones anunciadas en el aviso de privacidad", "error");
          } else {
            this.router.navigate(['/formulariodenuncia/formulario']);
          }
        }
      }]);

      return DenunciaformComponent;
    }();

    DenunciaformComponent.ɵfac = function DenunciaformComponent_Factory(t) {
      return new (t || DenunciaformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    DenunciaformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DenunciaformComponent,
      selectors: [["app-denunciaform"]],
      decls: 129,
      vars: 3,
      consts: [[1, "view", "viewhome", 2, "background-color", "#1a1a1a", "height", "300px", "border-bottom", "2px solid #bda663"], [1, "mask"], [1, "ml-auto", "mr-auto"], [1, "row", "mt-100"], [1, "container"], [1, "text-white", "text-center", "text-md-left", "mt-xl-5", "mb-5", "wow", "fadeInLeft", "slower"], [1, "h1-responsive", "font-weight", "mt-sm-5"], ["align", "right", 1, "h1-responsive", "mt--20", "title"], [1, "fab", "fa-wpforms", 2, "margin-left", "20px"], [1, "bg-form", 2, "background-image", "url('assets/greybgmedium.svg')", "background-repeat", "repeat-y", "background-size", "contain", "background-position", "center", "height", "1200px"], [1, "container", "pt-5"], [1, "mt-3"], [1, "p-4", 2, "border", "2px solid #ffbb33", "border-radius", "30px"], [2, "margin-top", "-50px"], [1, "fas", "fa-exclamation-triangle", 2, "color", "white", "font-size", "60px", "background-color", "#ffbb33", "padding", "10px", "border-radius", "20px"], [2, "margin-top", "20px"], [2, "color", "black"], [1, "p-4"], [2, "font-size", "x-large", "color", "#1a1a1a"], [2, "vertical-align", "top"], ["colspan", "2", 2, "text-align", "center"], [2, "width", "25%"], ["href", "", "target", "_blank", "title", "Informaci\xF3n B\xE1sica sobre protecci\xF3n de datos"], [1, "mt-1", "mb-5"], ["align", "center"], [1, "text-black-50", 3, "checked", "ngModel", "default", "ngModelChange"], ["align", "right"], ["mdbBtn", "", 2, "border-radius", "60px", "background", "#bda663", "font-weight", "bold", "font-family", "Nunito", "color", "white", "margin-top", "1%", 3, "click"]],
      template: function DenunciaformComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Formulario de denuncia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " El Canal \xC9tico ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " es un servicio de emergencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "No utilice este sitio para comunicar problemas relacionados con una amenaza inminente contra la integridad f\xEDsica o contra la propiedad. Puede que los informes enviados a trav\xE9s de este servicio no obtengan una respuesta inmediata. Si necesita asistencia urgente, contacte con las autoridades locales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Aviso sobre Privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Para poder recibir y tramitar su denuncia, debe confirmar que ha le\xEDdo este Aviso sobre Privacidad que resumimos en la ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\"INFORMACI\xD3N B\xC1SICA SOBRE PROTECCI\xD3N DE DATOS\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "En caso de que no acepte las condiciones conforme a lo dispuesto en el aviso, no podr\xE1 realizar su denuncia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Informaci\xF3n basica sobre protecci\xF3n de datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Responsable de tratamiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "SU EMPRESA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Finalidad del tratamiento y Legitimaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "La finalidad del tratamiento es ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "tramitar y resolver las correspondientes denuncias, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "recibidas a trav\xE9s del Canal de Denuncias (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Whistleblowing Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ") de SU EMPRESA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, ", ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "de conformidad con lo establecido en el Programa de Cumplimiento Normativo (");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "em");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Compliance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "), sus normas corporativas y la normativa vigente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " El tratamiento de los datos est\xE1 basado en el ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "consentimiento del interesado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, ", el cual se otorga en la facilitaci\xF3n de los datos que se solicitan para completar y enviar el formulario de denuncias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Destinatarios de cesiones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Tus datos ser\xE1n cedidos a la empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Ethics Channel SL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " (i2 Ethics) que act\xFAa en calidad de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "ENCARGADA DE TRATAMIENTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, ", legitimada por el contrato de encargo firmado con ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "SU EMPRESA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, ". No se ceder\xE1n datos a otros terceros, salvo obligaci\xF3n legal.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Destinatario de transferencia internacional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Los datos podr\xE1n ser comunicados a otras sociedades de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "SU EMPRESA\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "en terceros pa\xEDses para fines administrativos internos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Derechos de los interesados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "A retirar tu consentimiento en cualquier momento, a oponerse al tratamiento, a acceder, rectificar y suprimir los datos, as\xED como otros derechos, como se explica en la informaci\xF3n adicional.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Informaci\xF3n adicional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Puedes consultar\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "aqu\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "todos los detalles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mdb-checkbox", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DenunciaformComponent_Template_mdb_checkbox_ngModelChange_124_listener($event) {
            return ctx.aviso_privacidad = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Acepto las condiciones enunciadas en el Aviso de Privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DenunciaformComponent_Template_button_click_127_listener() {
            return ctx.siguiente();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Siguiente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false)("ngModel", ctx.aviso_privacidad)("default", true);
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MdbBtnDirective"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Nunito\";\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: -0.05rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2RlbnVuY2lhZm9ybS9kZW51bmNpYWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbnVuY2lhZm9ybS9kZW51bmNpYWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbnVuY2lhZm9ybS9kZW51bmNpYWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XG59IiwiaDEge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenunciaformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-denunciaform',
          templateUrl: './denunciaform.component.html',
          styleUrls: ['./denunciaform.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/denunciaform/formulario/formulario.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/denunciaform/formulario/formulario.component.ts ***!
    \*****************************************************************/

  /*! exports provided: FormularioComponent */

  /***/
  function srcAppDenunciaformFormularioFormularioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormularioComponent", function () {
      return FormularioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    function FormularioComponent_mdb_error_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seleccionar una relacion empresarial v\xE1lida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_58_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Describa el asunto de su denuncia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_89_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seleccione una conducta o comportamiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_90_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Describa el detalle de su denuncia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_100_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Indique denunciado o puesto de la empresa a denunciar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_127_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_171_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contrase\xF1a inv\xE1lida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_172_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contrase\xF1a v\xE1lida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_error_179_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "repita la contrase\xF1a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormularioComponent_mdb_success_180_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-success");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "correcto");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FormularioComponent = /*#__PURE__*/function () {
      function FormularioComponent(formBuilder, httpClient, router) {
        _classCallCheck(this, FormularioComponent);

        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.router = router;
        this.submitok = false;
        this.SERVER_URL = "http://localhost:7000/uploadfiles/";
        this.currentFiles = [];
        this.contactForm = formBuilder.group({
          relacion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          asunto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          conducta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          detalle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          centro: [''],
          denunciado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          files: [''],
          compartir: [false],
          denunciante: [''],
          email: [''],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          repetirpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
          validator: this.pwdMatchValidator
        });
      }

      _createClass(FormularioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "pwdMatchValidator",
        value: function pwdMatchValidator(frm) {
          return frm.get('password').value === frm.get('repetirpassword').value ? null : {
            'mismatch': true
          };
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          var i = 0;
          this.currentFiles = [];

          if (event.target.files.length > 0) {
            while (i < event.target.files.length) {
              this.currentFiles.push(event.target.files[i]);
              i = i + 1;
            }
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this = this;

          if (this.contactForm.valid) {
            console.log(this.contactForm.value); //ESTE ES EL DEL EJEMPLO -- https://www.techiediaries.com/angular-formdata/
            // formData.append('file', this.uploadForm.get('profile').value);

            this.httpClient.post(this.SERVER_URL, this.toFormData(this.contactForm.value)).subscribe(function (res) {
              console.log(res);
              var hash = res.tx_hash;
              var id = res.generated_id;
              console.log(hash);
              console.log(id);

              _this.router.navigate(['/formulariodenuncia/formulario/registro/', res]);
            }, function (err) {
              return console.log(err);
            });
            console.log('DATA');
            console.log(this.data);
          } else {
            alert("Completa todos los campos requeridos correctamente");
            this.submitok = true;
          }
        }
      }, {
        key: "toFormData",
        value: function toFormData(formValue) {
          var formData = new FormData(); // Por cada valor del form agregarlo a nuestro data

          for (var _i = 0, _Object$keys = Object.keys(formValue); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            var value = formValue[key];

            if (key != "files") {
              // Agregar key - value del formulario
              if (key == "denunciante" || key == "email" || key == "centro") {
                // Si la key es opcional preguntar si es vacio
                if (value == "") {
                  // Si es vacio mandar 2nodata"
                  formData.append(key, "nodata");
                } else {
                  // Si no es vacio mando lo que ingreso el usuario
                  formData.append(key, value);
                }
              } else {
                // Si no es ninguna key opcional, mando la cual esta.
                formData.append(key, value);
              }
            }
          } // Agregar bien todos los archivos


          this.currentFiles.forEach(function (file) {
            formData.append('files', file, file.name);
          });
          return formData;
        }
      }, {
        key: "relacion",
        get: function get() {
          return this.contactForm.get('relacion');
        }
      }, {
        key: "asunto",
        get: function get() {
          return this.contactForm.get('asunto');
        }
      }, {
        key: "conducta",
        get: function get() {
          return this.contactForm.get('conducta');
        }
      }, {
        key: "detalle",
        get: function get() {
          return this.contactForm.get('detalle');
        }
      }, {
        key: "denunciado",
        get: function get() {
          return this.contactForm.get('denunciado');
        }
      }, {
        key: "password",
        get: function get() {
          return this.contactForm.get('password');
        }
      }, {
        key: "repetirpassword",
        get: function get() {
          return this.contactForm.get('repetirpassword');
        }
      }]);

      return FormularioComponent;
    }();

    FormularioComponent.ɵfac = function FormularioComponent_Factory(t) {
      return new (t || FormularioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    FormularioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormularioComponent,
      selectors: [["app-formulario"]],
      decls: 184,
      vars: 17,
      consts: [[1, "view", "viewhome", 2, "background-color", "#1a1a1a", "border-bottom", "2px solid #bda663", "height", "300px"], [1, "mask", 2, "height", "400px"], [1, "ml-auto", "mr-auto"], [1, "row", "mt-100"], [1, "container"], [1, "text-white", "text-center", "text-md-left", "mt-xl-5", "mb-5", "wow", "fadeInLeft", "slower"], [1, "h1-responsive", "font-weight", "mt-sm-5"], ["align", "right", 1, "h1-responsive", "mt--20", "title"], [1, "fab", "fa-wpforms", 2, "margin-left", "20px"], [1, "bg-form", 2, "background-image", "url('assets/greybglarge.svg')", "background-repeat", "repeat-y", "background-size", "contain", "background-position", "center", "height", "2100px"], [1, "container", "pt-5"], [1, "p-4", "mt-5", "mb-5", 2, "border", "2px solid #33b5e5", "border-radius", "30px"], [2, "margin-top", "-60px"], [1, "fas", "fa-info-circle", 2, "color", "white", "font-size", "60px", "background-color", "#0099CC", "padding", "10px", "border-radius", "20px"], [2, "padding-top", "15px"], [2, "color", "#1a1a1a"], [1, "container", "shadow-card", "p-5", 2, "background", "white"], [3, "formGroup", "ngSubmit"], [1, "md-form"], [1, "pt-3"], [2, "color", "red"], ["name", "relacion", "formControlName", "relacion", 1, "browser-default", "custom-select", "form-control"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["class", "pt-50", 4, "ngIf"], [1, "md-form", "mt-5"], ["mdbInput", "", "type", "text", "name", "asunto", "formControlName", "asunto", "id", "form1", 1, "form-control"], ["for", "form1", 1, ""], [4, "ngIf"], [1, "pt-4"], ["name", "conducta", "formControlName", "conducta", 1, "browser-default", "custom-select", "form-control"], ["value", "1", "selected", ""], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["class", "pt-60", 4, "ngIf"], ["name", "detalle", "formControlName", "detalle", "type", "text", "id", "form7", "mdbInput", "", 1, "md-textarea", "md-textarea-auto", "form-control"], ["for", "form7"], ["name", "centro", "formControlName", "centro", 1, "browser-default", "custom-select", "form-control"], ["value", "0", "selected", ""], ["mdbInput", "", "name", "denunciado", "formControlName", "denunciado", "type", "text", "id", "form8", 1, "form-control"], ["for", "form8", 1, ""], [1, "mt-5"], ["name", "files", "formControlName", "files", "formControlName", "files", "type", "file", "multiple", "", 3, "change"], ["name", "compartir", "formControlName", "compartir", 1, "text-black-50", 3, "checked", "default"], [1, "md-form", "mt-3"], ["mdbInput", "", "name", "denunciante", "formControlName", "denunciante", "type", "text", "id", "form3", 1, "form-control"], ["for", "form3", 1, ""], ["mdbInput", "", "name", "email", "formControlName", "email", "type", "text", "id", "form5", 1, "form-control"], ["for", "form5", 1, ""], ["name", "password", "formControlName", "password", "mdbInput", "", "type", "text", "id", "form4", 1, "form-control"], ["for", "form4", 1, ""], ["mdbInput", "", "type", "text", "id", "form6", "name", "repetirpassword", "formControlName", "repetirpassword", 1, "form-control"], ["for", "form6", 1, ""], ["align", "right"], ["mdbBtn", "", "type", "submit", 2, "border-radius", "60px", "background", "linear-gradient(120deg, #bda663 0%, #bda663 100%)", "font-weight", "bold", "font-family", "Nunito", "color", "white", "margin-top", "2%"], [1, "pt-50"], [1, "pt-60"]],
      template: function FormularioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Formulario de denuncia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "A continuaci\xF3n le presentamos el formulario de denuncia donde puede informar de los hechos para los cuales se ha creado este canal de denuncias. Le indicamos que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "los campos marcados con un * son obligatorios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Si quiere permanecer an\xF3nimo no complete los campos de sus datos personales, aunque le animamos a hacerlo, ya que de esta forma podremos ponernos en contacto con usted. De esta forma, es muy posible que se pueda llegar a resolver la denuncia satisfactoriamente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "FORMULAR UNA DENUNCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioComponent_Template_form_ngSubmit_27_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ind\xEDquenos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "cual es su relaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " con la Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Relacion con la empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Empleado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Proveedor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Cliente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Otros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, FormularioComponent_mdb_error_47_Template, 2, 0, "mdb-error", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, FormularioComponent_mdb_success_48_Template, 2, 0, "mdb-success", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Describa brevemente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "el asunto de su denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " (un t\xEDtulo para su denuncia) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, FormularioComponent_mdb_error_58_Template, 2, 0, "mdb-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FormularioComponent_mdb_success_59_Template, 2, 0, "mdb-success", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Elija de la lista desplegable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "una conducta o comportamiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " que se asemeje a lo que nos quiere informar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "select", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Corrupci\xF3n. Aceptaci\xF3n y entrega de regalos no permitidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Fraude a la Hacienda P\xFAblica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Fraude a la Seguridad Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Relativos a la propiedad intelectual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Acoso laboral");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Discriminaci\xF3n por razones de g\xE9nero, religiosas, etc.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Acoso sexual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Protecci\xF3n de datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Blanqueo de Capitales por incumplimiento de la Ley de Prevenci\xF3n de Blanqueo de Capitales y normativa de desarrollo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Otras conductas no definidas en el listado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, FormularioComponent_mdb_error_89_Template, 2, 0, "mdb-error", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, FormularioComponent_mdb_success_90_Template, 2, 0, "mdb-success", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "textarea", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\xBFQue ha ocurrido?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Intente brindar la mayor cantidad de datos posible para poder resolver su denuncia satisfactoriamente ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, FormularioComponent_mdb_error_99_Template, 2, 0, "mdb-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, FormularioComponent_mdb_success_100_Template, 2, 0, "mdb-success", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Centro de trabajo donde se produjeron los hechos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Centro de trabajo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "AMG Campinas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "AMG Parana");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "AMG Senica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Ferrodisa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "AIPL Pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Indique el ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "nombre y apellido/s del denunciado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " y/o su puesto en la empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, FormularioComponent_mdb_error_126_Template, 2, 0, "mdb-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, FormularioComponent_mdb_success_127_Template, 2, 0, "mdb-success", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Por favor adjunte todos los archivos que sean relevantes para el caso (.jpeg, .png, Word, .pdf). Puede adjuntar m\xE1s de un archivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormularioComponent_Template_input_change_131_listener($event) {
            return ctx.onFileSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Identificaci\xF3n del denunciante:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Su empresa le permite las siguientes opciones: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Permanecer an\xF3nimo o incluir sus datos y no compartirlos con la empresa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "En caso de que quiera permanecer an\xF3nimo no rellene los campos a continuaci\xF3n. En caso de no querer compartirlos, incluya sus datos y NO marque la casilla de COMPARTIR. Sus datos ser\xE1n custodiados por i2 Ethics y no ser\xE1n trasladados a su empresa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "mdb-checkbox", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Compartir los datos con mi empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Su nombre y apellidos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Su direcci\xF3n de correo: Si incluye una direcci\xF3n de correo le pedimos que incluya ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "una direcci\xF3n personal, no corporativa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, ", para mantener su confidencialidad. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Incluya una contrase\xF1a para su denuncia. La longitud m\xEDnima de la misma son 6 caracteres. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Recuerde la misma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " ya que se le solicitar\xE1 para realizar consultas o ampliaciones de su denuncia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Al enviar su denuncia, le aparecer\xE1 un codigo que debe guardar y custodiar para poder acceder a consultar, o ampliar su denuncia. Este c\xF3digo no puede ser recuperado en caso de perdida.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, FormularioComponent_mdb_error_171_Template, 2, 0, "mdb-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, FormularioComponent_mdb_success_172_Template, 2, 0, "mdb-success", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "label", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Repetir Contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "b", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, FormularioComponent_mdb_error_179_Template, 2, 0, "mdb-error", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, FormularioComponent_mdb_success_180_Template, 2, 0, "mdb-success", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " Enviar Denuncia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.relacion.invalid && (ctx.relacion.dirty || ctx.relacion.touched || ctx.contactForm.get("relacion").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.relacion.valid && (ctx.relacion.dirty || ctx.relacion.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asunto.invalid && (ctx.asunto.dirty || ctx.asunto.touched || ctx.contactForm.get("asunto").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.asunto.valid && (ctx.asunto.dirty || ctx.asunto.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conducta.invalid && (ctx.conducta.dirty || ctx.conducta.touched || ctx.contactForm.get("conducta").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.relacion.valid && (ctx.conducta.dirty || ctx.conducta.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detalle.invalid && (ctx.detalle.dirty || ctx.detalle.touched || ctx.contactForm.get("detalle").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detalle.valid && (ctx.detalle.dirty || ctx.detalle.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denunciado.invalid && (ctx.denunciado.dirty || ctx.denunciado.touched || ctx.contactForm.get("denunciado").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denunciado.valid && (ctx.denunciado.dirty || ctx.denunciado.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", false)("default", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched || ctx.contactForm.get("password").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password.valid && (ctx.password.dirty || ctx.password.touched) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denunciado.invalid && (ctx.denunciado.dirty || ctx.denunciado.touched || ctx.contactForm.get("denunciado").hasError("required")) && ctx.submitok == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.denunciado.valid && (ctx.denunciado.dirty || ctx.denunciado.touched) && ctx.submitok == true);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbInput"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CheckboxComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbErrorDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MdbSuccessDirective"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Roboto-condensed\";\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: -0.05rem;\n}\n\n.bg-form[_ngcontent-%COMP%] {\n  height: 2000px;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.shadow-card[_ngcontent-%COMP%] {\n  box-shadow: 10px -10px #bda663;\n  z-index: 100;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2RlbnVuY2lhZm9ybS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbnVuY2lhZm9ybS9mb3JtdWxhcmlvL2Zvcm11bGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSwyQkFBQTtBQ0FKOztBREdBO0VBR0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZGVudW5jaWFmb3JtL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG59XG5cbi50aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90by1jb25kZW5zZWQnO1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVyZW07XG59XG5cbi5iZy1mb3JtIHtcbiAgICBoZWlnaHQ6IDIwMDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zaGFkb3ctY2FyZCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICAgIGJveC1zaGFkb3c6IDEwcHggLTEwcHggI2JkYTY2MztcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gIH1cbiIsImgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG8tY29uZGVuc2VkXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNXJlbTtcbn1cblxuLmJnLWZvcm0ge1xuICBoZWlnaHQ6IDIwMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zaGFkb3ctY2FyZCB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4ICNiZGE2NjM7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4ICNiZGE2NjM7XG4gIGJveC1zaGFkb3c6IDEwcHggLTEwcHggI2JkYTY2MztcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-formulario',
          templateUrl: './formulario.component.html',
          styleUrls: ['./formulario.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/denunciaform/formulario/registro/registro.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/denunciaform/formulario/registro/registro.component.ts ***!
    \************************************************************************/

  /*! exports provided: RegistroComponent */

  /***/
  function srcAppDenunciaformFormularioRegistroRegistroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroComponent", function () {
      return RegistroComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var RegistroComponent = /*#__PURE__*/function () {
      function RegistroComponent(activatedRoute) {
        _classCallCheck(this, RegistroComponent);

        this.activatedRoute = activatedRoute;
        this.txhash = this.activatedRoute.snapshot.params.tx_hash;
        this.generatedid = this.activatedRoute.snapshot.params.generated_id;
      }

      _createClass(RegistroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistroComponent;
    }();

    RegistroComponent.ɵfac = function RegistroComponent_Factory(t) {
      return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistroComponent,
      selectors: [["app-registro"]],
      decls: 48,
      vars: 5,
      consts: [[1, "view", "viewhome", 2, "background-color", "#1a1a1a", "border-bottom", "2px solid #bda663", "height", "90px"], [1, "bg-form", "pt-5", 2, "background-image", "url('assets/greybg.svg')", "background-repeat", "repeat-y", "background-size", "contain", "background-position", "center", "height", "860px"], [1, "container"], [1, "mt-5"], [2, "color", "#1a1a1a"], [1, "container", "shadow-card", "p-5", 2, "background", "white"], ["align", "center", 2, "color", "#a8955a"], ["align", "right"], ["mdbBtn", "", 2, "border-radius", "60px", "background", "linear-gradient(120deg, #bda663 0%, #bda663 100%)", "font-weight", "bold", "font-family", "Nunito", "color", "white", "margin-top", "2%", 3, "click"], ["mdbModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myBasicModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["basicModal", "mdbModal"], ["role", "document", 1, "modal-dialog", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], ["id", "myModalLabel", 1, "modal-title", "w-200"], ["align", "center", 1, "modal-body"], [1, "modal-footer"], ["type", "button", "mdbBtn", "", "color", "secondary", "aria-label", "Close", "mdbWavesEffect", "", 1, "waves-light", "btn-deep-purple", "darken-3", 3, "click"], ["type", "button", "mdbBtn", "", "color", "primary", "mdbWavesEffect", "", 1, "relative", "waves-light", 3, "routerLink"]],
      template: function RegistroComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DENUNCIA REGISTRADA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Su denuncia fue registrada en la blockchain para que sea inmutable y segura. Puede seguirla con la siguiente direcci\xF3n de transaccion.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "direcci\xF3n de la transacci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Para el seguimiento de su denuncia a trav\xE9s de nuestra plataforma deber\xE1 ingresar con el siguiente identificador y la contrase\xF1a que anteriormente especific\xF3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Identificaci\xF3n de usuario:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return _r0.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Volver al inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return _r0.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "No olvide copiar su id de usuario antes de retirarse de esta p\xE1gina. De lo contrario no podr\xE1 recuperarlo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistroComponent_Template_button_click_44_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return _r0.hide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Volver al home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("bc7eccb485c40753763ec8a8f3209b7bf18ab43e24d3d70d31678c0df4a6e00e ", ctx.txhash, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("d59daf9f-2144-4dbd-ade5-59292752c5f9 ", ctx.generatedid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.generatedid, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MdbBtnDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ModalDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".shadow-card[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px #bda663;\n  z-index: 100;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2RlbnVuY2lhZm9ybS9mb3JtdWxhcmlvL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW51bmNpYWZvcm0vZm9ybXVsYXJpby9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2RlbnVuY2lhZm9ybS9mb3JtdWxhcmlvL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYWRvdy1jYXJkIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4ICNiZGE2NjM7XG4gIHotaW5kZXg6IDEwMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbn0iLCIuc2hhZG93LWNhcmQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registro',
          templateUrl: './registro.component.html',
          styleUrls: ['./registro.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 0,
      consts: [[1, "page-footer", "bottomfooter", "font-small", 2, "position", "fixer", "background", "#1a1a1a"], [1, "footer-copyright", "text-center", "py-3"], ["href", "/", 1, "pr-5"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 2020 Copyright: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "BurninStone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Soporte T\xE9cnico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pol\xEDtica de Coockies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pol\xEDtica de Privacidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T\xE9rminos y Condiciones de uso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".circlefooter[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  background: white;\n  height: 90px;\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xlZm9vdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiAyMzBweDtcbiAgICBcbiAgICAvL2JveC1zaGFkb3c6IDEwcHggNXB4ICNjNGQ3ZTM7XG59IiwiLmNpcmNsZWZvb3RlciB7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAyMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "scrolling-navbar", "intro-fixed-nav", 2, "box-shadow", "none !important"], ["href", "#", 1, "navbar-brand"], ["src", "assets/burninstone-logo-white.png", "alt", "Logo", 1, "img-responsive", "logo-resp", 2, "width", "200px"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logo-resp[_ngcontent-%COMP%] {\n  width: 10% !important;\n}\n\n@media (max-width: 768px) {\n  .logo-resp[_ngcontent-%COMP%] {\n    width: 35% !important;\n  }\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.top-nav-collapse[_ngcontent-%COMP%] {\n  background-color: rgba(41, 40, 40, 0.6) !important;\n  z-index: 10000000000;\n}\n\n@media only screen and (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: rgba(41, 40, 40, 0.6) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxxQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSSx3Q0FBQTtBQ0FKOztBREdBO0VBQ0ksa0RBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxrREFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tcmVzcCB7XG4gICAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAubG9nby1yZXNwIHtcbiAgICAgICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRvcC1uYXYtY29sbGFwc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDQwLCA0MCwgMC42KSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDEwMDAwMDAwMDAwO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDEsIDQwLCA0MCwgMC42KSAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIubG9nby1yZXNwIHtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28tcmVzcCB7XG4gICAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICB9XG59XG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRvcC1uYXYtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA0MCwgNDAsIDAuNikgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTAwMDAwMDAwMDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNDAsIDQwLCAwLjYpICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/formulariodenuncia"];
    };

    var _c1 = function _c1() {
      return ["/seguimiento"];
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToElement",
        value: function scrollToElement($element) {
          console.log($element);
          $element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 114,
      vars: 4,
      consts: [[1, "view", "viewhome", "goldborder", 2, "background-image", "url('assets/bg-home.png')", "background-repeat", "no-repeat", "background-size", "cover", "background-position", "center"], [1, "bg-form", "animated", "fadeIn", "fadeOut", "anim", 2, "background-image", "url('assets/Burningstone.svg')", "background-repeat", "repeat-y", "background-size", "cover", "background-position", "center", "height", "1000x", "z-index", "10", "position", "relative"], ["data-wow-delay", "1s", 1, "bg-form", "animated", "fadeIn", "fadeIn", "anim", 2, "background-image", "url('assets/Burningstone2.svg')", "background-repeat", "repeat-y", "background-size", "cover", "background-position", "center", "height", "1000px", "z-index", "5", "position", "relative"], [1, "mask", "align-items-center", 2, "z-index", "20"], [1, "ml-auto", "mr-auto"], [1, "row", "align-items-center", "mt-5"], [1, "col-1"], [1, "col-md-5", "mt-200"], ["data-wow-delay", "0.3s", 1, "text-center", "text-md-left", "mt-xl-5", "mb-5", "wow", "fadeInLeft", "animated", "fadeInLeft", "slower"], [1, "h1-responsive", "font-weight", "mt--20"], [2, "color", "white", "font-family", "Mont"], [1, "h1-responsive", "font-weight-bold", "mt-sm-5"], [1, "row", "mt-200"], [1, "col-3"], ["align", "center"], ["mdbWavesEffect", "", 1, "circlehome", "hoverable", 3, "click"], ["size", "2x", "fas", "", "icon", "angle-down", 2, "color", "white"], [1, "presentacion"], [1, "container", 2, "padding-top", "200px"], [2, "padding-top", "100px"], ["seccionprincipal", ""], [1, "mt--10"], ["align", "center", 1, "pb-1", 2, "color", "black", "font-size", "50px"], ["align", "center", 2, "font-size", "xx-large", "color", "#bda663"], [1, "far", "fa-handshake", "pb-4"], [1, "circleborder", "mb-5"], [1, "container"], [1, "text-center"], ["pill", "true", 1, "mt-3", "mb-2", "outline", 2, "background-color", "#bda663", 3, "click"], ["fas", "", "icon", "angle-down", "size", "2x"], ["mdbCollapse", "", 1, "mb--10", "mt-2"], ["test", "bs-collapse"], [1, "card-text"], [1, "container-fluid", "mb-3", 2, "margin-top", "150px"], [1, "row", 2, "margin-top", "5rem"], [1, "col-sm-6", "col-md-6", "col-lg-6", "col-xl-3", "mb-md-0", "padding-0"], [1, "text-center", 2, "background-color", "#1a1a1a", "border-radius", "0px"], ["src", "assets/form.png", "alt", "Responsive image", 2, "width", "72px", "height", "72px", "margin-top", "50px"], [1, "mt-70"], [1, "zoom", 2, "margin-top", "25px", "color", "white"], [1, "my-3", 2, "background-color", "grey"], ["mdbBtn", "", 1, "zoom2", 2, "border-radius", "60px", "background", "#bda663", "font-weight", "bold", "color", "white", "margin-bottom", "50px", 3, "routerLink"], [1, "col-sm-6", "col-md-6", "col-lg-6", "col-xl-3", "padding-0"], [1, "text-center", 2, "background-color", "whitesmoke", "border-radius", "0px"], ["src", "assets/search.png", "alt", "Responsive image", 2, "width", "72px", "height", "72px", "margin-top", "50px"], [1, "mt-70", "mb-36"], [1, "zoom", 2, "top", "50%"], [1, "my-3"], ["href", "#!", "mdbBtn", "", 1, "zoom2", 2, "border-radius", "60px", "background", "#bda663", "font-weight", "bold", "color", "white", "margin-bottom", "50px", 3, "routerLink"], [1, "text-center", 2, "background-color", "#c2c2c2", "border-radius", "0px"], ["src", "assets/dictionary.png", "alt", "Responsive image", 2, "width", "72px", "height", "72px", "margin-top", "50px"], [1, "zoom", 2, "margin-top", "25px"], ["href", "#!", "mdbBtn", "", 1, "zoom2", 2, "border-radius", "60px", "background", "#bda663", "font-weight", "bold", "color", "white", "margin-bottom", "50px"], [1, "text-center", 2, "background-color", "#000000", "border-radius", "0px"], ["src", "assets/phone.png", "alt", "Responsive image", 2, "width", "72px", "height", "72px", "margin-top", "50px"], [1, "row"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Canal \xC9tico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "i2 Ethics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            return ctx.scrollToElement(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mdb-icon", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Bienvenido al Canal \xC9tico Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Su empresa ha habilitado este canal \xE9tico como una herramienta de comunicaci\xF3n que permite informar sobre presuntas irregularidades que vulneren nuestro C\xF3digo \xC9tico o la normativa vigente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mdb-badge", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_mdb_badge_click_35_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return _r1.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mdb-icon", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Adem\xE1s, el canal es una de las principales fuentes de informaci\xF3n y detecci\xF3n de delitos, componente fundamental en nuestro sistema de cumplimiento. Como parte de nuestro compromiso de mejora continua en los procesos, el canal \xE9tico permitir\xE1 a su empresa, detectar aspectos a modificar en nuestras pol\xEDticas, procedimientos y protocolos para prevenir futuras malas pr\xE1cticas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Teniendo en cuenta la sensibilidad de la informaci\xF3n enviada, la gesti\xF3n de la comunicaci\xF3n inicial ser\xE1 realizada por una empresa independiente y externa (i2 Ethics) garantizando as\xED la confidencialidad del tratamiento de las denuncias. Adem\xE1s, se velar\xE1 para que no se produzca ning\xFAn tipo de represalia sobre aquellos usuarios que han planteado denuncias de buena fe, as\xED como tambien se asegurar\xE1 la adecuada gesti\xF3n de cualquier potencial conflicto de inter\xE9s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Las denuncias se pueden realizar a trav\xE9s de la presente plataforma completando el formulario habilitado a tal efecto. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Por favor, haz un uso responsable de este canal. No se consideran objeto de denuncias, por ejemplo, toda la informaci\xF3n relacionada con quejas, reclamaciones, acusaciones falsas sin fundamento, etc., de modo que el mal uso de este canal ser\xE1 considerado como un incumplimiento de la normativa interna de su empresa. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Muchas gracias por tu aportaci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mdb-card", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\xBFQuiere comunicar una situaci\xF3n que sospecha que no cumple con los principios y normas de actuaci\xF3n establecidos en nuestro C\xF3digo \xC9tico? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "hr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mdb-card-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Necesitar\xE1 cumplimentar un formulario sencillo a continuaci\xF3n. Intente aportar la mayor cantidad de informaci\xF3n posible. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Formular una denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mdb-card", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xBFQuiere verificar el estado en el que se encuentra su denuncia? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mdb-card-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Deber\xE1 utilizar el c\xF3digo que se le proporcion\xF3 en el momento de la realizaci\xF3n de su denuncia y la contrase\xF1a que incluy\xF3 en el formulario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Seguimiento de su denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mdb-card", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\xBFQuiere realizar una propuesta de mejora sobre nuestros procedimientos o una consulta sobre C\xF3digo \xC9tico? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "hr", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mdb-card-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Complete el formulario a continuaci\xF3n y un responsable se pondr\xE1 en contacto con usted a la brevedad ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Consultas sobre C\xF3digo \xC9tico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mdb-card", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Puede tramitar su denuncia a trav\xE9s del formulario web o si lo prefiere, podemos llamarle nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "hr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mdb-card-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Facil\xEDtenos sus datos y nos pondremos en contacto con usted, en la franja horaria y en los idiomas disponibles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Quiero que me llamen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["FasDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBadgeComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CollapseComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTitleComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTextComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"]],
      styles: ["mdb-card[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.viewhome[_ngcontent-%COMP%] {\n  height: 1000px;\n  width: 100%;\n}\n\n.goldborder[_ngcontent-%COMP%] {\n  border-bottom: 10px solid #bda663;\n}\n\n.presentacion[_ngcontent-%COMP%] {\n  height: 1400px;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.imgsize[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n\n.viewhome[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n}\n\n.viewhome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.main-navigation[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 5px #cccccc;\n  z-index: 100;\n  position: relative;\n}\n\n.hv[_ngcontent-%COMP%] {\n  border: none;\n  border-left: 1px solid #b9b9b6;\n  height: 100px;\n  width: 1px;\n}\n\n.circlehome[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n  border: 3px solid white;\n  background-color: transparent;\n  padding-top: 5px;\n  text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  outline: none;\n}\n\n.skewedbox[_ngcontent-%COMP%] {\n  background: linear-gradient(120deg, #b5e1e4 0%, #1787bb 100%);\n  padding-top: 150px;\n  padding-bottom: 150px;\n  transform: skew(0deg, 0deg);\n}\n\n.skedwedboxreverse[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  transform: skew(0deg, 0deg);\n}\n\n.circleborder[_ngcontent-%COMP%] {\n  border-radius: 30px;\n}\n\n.anim[_ngcontent-%COMP%] {\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n.padding-0[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n@media (max-width: 1500px) {\n  .imgsize[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n\n@media (max-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: calc(1.625rem + 3.3vw);\n  }\n\n  .imgsize[_ngcontent-%COMP%] {\n    max-width: 600px;\n  }\n}\n\n@media (max-width: 1000px) {\n  .imgsize[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n}\n\n@media (max-width: 800px) {\n  .viewhome[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n\n  .imgsize[_ngcontent-%COMP%] {\n    max-width: 400px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media (max-width: 764px) {\n  .hv[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n\n  .imgsize[_ngcontent-%COMP%] {\n    max-width: 400px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n\n@media (max-width: 400px) {\n  .viewhome[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUNDRjs7QURFQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDRSxpQ0FBQTtBQ0NGOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUVBLDJCQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBR0UsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDQUY7O0FER0E7RUFDSSxXQUFBO0VBQWEsWUFBQTtFQUNiLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLDZEQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSxnQkFBQTtFQ0FGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGlDQUFBO0VDRkY7O0VESUE7SUFDRSxnQkFBQTtFQ0RGO0FBQ0Y7O0FES0E7RUFDRTtJQUNFLGdCQUFBO0VDSEY7QUFDRjs7QURPQTtFQUNFO0lBQ00sYUFBQTtFQ0xOOztFRE9BO0lBQ0UsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ0pGO0FBQ0Y7O0FEUUE7RUFDRTtJQUNFLFlBQUE7RUNORjs7RURRQTtJQUNFLGdCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUNMRjtBQUNGOztBRFNBO0VBQ0k7SUFDRSxhQUFBO0VDUEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1kYi1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udmlld2hvbWUge1xuICAgIGhlaWdodDogMTAwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5nb2xkYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjYmRhNjYzO1xufVxuXG4ucHJlc2VudGFjaW9uIHtcbiAgICBoZWlnaHQ6IDE0MDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIC8vYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiAgLmltZ3NpemUge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gIH1cblxuLnZpZXdob21lIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xufVxuXG4udmlld2hvbWUgaDIge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1haW4tbmF2aWdhdGlvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDVweCAjY2NjY2NjO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA1cHggI2NjY2NjYztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAjY2NjY2NjO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmh2IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGhzbCg2MCwgMiUsIDcyJSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxcHg7IFxufVxuXG4uY2lyY2xlaG9tZSB7XG4gICAgd2lkdGg6IDkwcHg7IGhlaWdodDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbntcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgfVxuXG4uc2tld2VkYm94IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjYjVlMWU0IDAlLCAjMTc4N2JiIDEwMCUpO1xuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XG4gICAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIDBkZWcpO1xufVxuXG4uc2tlZHdlZGJveHJldmVyc2Uge1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHRyYW5zZm9ybTogc2tldygwZGVnLCAwZGVnKTtcbn1cblxuXG4uY2lyY2xlYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmFuaW0ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4ucGFkZGluZy0wIHtcbiAgcGFkZGluZy1yaWdodDowO1xuICBwYWRkaW5nLWxlZnQ6MDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xuICAuaW1nc2l6ZSB7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogY2FsYygxLjYyNXJlbSArIDMuM3Z3KTtcbiAgfVxuICAuaW1nc2l6ZSB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmltZ3NpemUge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgXG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC52aWV3aG9tZSB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG4gIC5pbWdzaXplIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY0cHgpIHtcbiAgLmh2IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgLmltZ3NpemUge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIFxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgIC52aWV3aG9tZSB7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbn0iLCJtZGItY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnZpZXdob21lIHtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ29sZGJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2JkYTY2Mztcbn1cblxuLnByZXNlbnRhY2lvbiB7XG4gIGhlaWdodDogMTQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmltZ3NpemUge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG4udmlld2hvbWUgaDEge1xuICBmb250LXNpemU6IDVyZW07XG59XG5cbi52aWV3aG9tZSBoMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLm1haW4tbmF2aWdhdGlvbiB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDVweCAjY2NjY2NjO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMTBweCA1cHggI2NjY2NjYztcbiAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAjY2NjY2NjO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmh2IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiOWI5YjY7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi5jaXJjbGVob21lIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNrZXdlZGJveCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICNiNWUxZTQgMCUsICMxNzg3YmIgMTAwJSk7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xuICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgMGRlZyk7XG59XG5cbi5za2Vkd2VkYm94cmV2ZXJzZSB7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgdHJhbnNmb3JtOiBza2V3KDBkZWcsIDBkZWcpO1xufVxuXG4uY2lyY2xlYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmFuaW0ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4ucGFkZGluZy0wIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC5pbWdzaXplIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IGNhbGMoMS42MjVyZW0gKyAzLjN2dyk7XG4gIH1cblxuICAuaW1nc2l6ZSB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaW1nc2l6ZSB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC52aWV3aG9tZSB7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgfVxuXG4gIC5pbWdzaXplIHtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NHB4KSB7XG4gIC5odiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLmltZ3NpemUge1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnZpZXdob21lIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguimiento/estado/estado.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/seguimiento/estado/estado.component.ts ***!
    \********************************************************/

  /*! exports provided: EstadoComponent */

  /***/
  function srcAppSeguimientoEstadoEstadoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoComponent", function () {
      return EstadoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return ["/formulariodenuncia"];
    };

    var EstadoComponent = /*#__PURE__*/function () {
      function EstadoComponent() {
        _classCallCheck(this, EstadoComponent);
      }

      _createClass(EstadoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstadoComponent;
    }();

    EstadoComponent.ɵfac = function EstadoComponent_Factory(t) {
      return new (t || EstadoComponent)();
    };

    EstadoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EstadoComponent,
      selectors: [["app-estado"]],
      decls: 69,
      vars: 4,
      consts: [[1, "view", "viewhome", 2, "background-color", "#1a1a1a", "border-bottom", "2px solid #bda663", "height", "300px"], [1, "mask"], [1, "ml-auto", "mr-auto"], [1, "row", "mt-100"], [1, "container"], [1, "text-white", "text-center", "text-md-left", "mt-xl-5", "mb-5", "wow", "fadeInLeft", "slower"], [1, "h1-responsive", "font-weight", "mt-sm-5"], ["align", "right", 1, "h1-responsive", "font-weight-bold", "mt--20", "title"], [1, "fas", "fa-id-card", 2, "margin-left", "20px"], [1, "bg-form", "pt-5", 2, "background-image", "url('assets/greybg.svg')", "background-repeat", "repeat-y", "background-size", "contain", "background-position", "center", "height", "750px"], [2, "color", "#1a1a1a"], [1, "row", "pb-5", 2, "margin-top", "5rem"], [1, "col-sm-6", "mb-3", "mb-md-0"], [1, "shadow-card", 2, "border-radius", "30px"], [2, "margin-left", "10px", "margin-top", "-50px", "width", "72px", "height", "72px", "border-radius", "20px", "padding", "10px", "box-shadow", "5px 5px 5px #cccccc", "background", "#1a1a1a"], ["src", "assets/form.png", "alt", "Responsive image", 1, "img-fluid", "animated", "animated", "fadeInRight", "slower", "imgsize", 2, "width", "50px"], [1, "mt-5"], [1, "form-row"], [1, "col-12", "inline"], ["align", "center", 2, "color", "#1a1a1a"], [1, "col-12"], ["align", "center", 2, "color", "#bda663"], ["mdbBtn", "", 2, "border-radius", "60px", "background", "linear-gradient(120deg, #bda663 0%, #bda663 100%)", "font-weight", "bold", "font-family", "Nunito", "color", "white", 3, "routerLink"], ["src", "assets/wallet.png", "alt", "Responsive image", 1, "img-fluid", "animated", "animated", "fadeInRight", "slower", "imgsize", 2, "width", "50px"], ["align", "center", 2, "color", "#bda663", "font-size", "30px"], [1, "col-12", "mb-3", 2, "margin-top", "73px"], ["mdbInput", "", "type", "text", "placeholder", "billetera", 1, "form-control", 2, "border-radius", "30px", "margin-top", "-10px"]],
      template: function EstadoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "denuncia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "SEGUIMIENTO DE SU DENUNCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mdb-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fecha de la denuncia:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "14:00 04/07/20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Estado de la denuncia:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "APROBADA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Registro en la blockchain:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "bc7eccb485c40753763ec8a8f3209b7bf18ab43e24d3d70d31678c0df4a6e00e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DESCARGAR DENUNCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mdb-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Cantidad a cobrar:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "1,76543330 BCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ingrese su billetera Bitcoin Cash:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "COBRAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTitleComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbInput"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.shadow-card[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px #bda663;\n  z-index: 100;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Roboto-condensed\";\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: -0.05rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL3NlZ3VpbWllbnRvL2VzdGFkby9lc3RhZG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NlZ3VpbWllbnRvL2VzdGFkby9lc3RhZG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFHSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FER0U7RUFDRSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NlZ3VpbWllbnRvL2VzdGFkby9lc3RhZG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc2hhZG93LWNhcmQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4ICNiZGE2NjM7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gIH1cblxuICAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tY29uZGVuc2VkJztcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc2hhZG93LWNhcmQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1jb25kZW5zZWRcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstadoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-estado',
          templateUrl: './estado.component.html',
          styleUrls: ['./estado.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/seguimiento/seguimiento.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/seguimiento/seguimiento.component.ts ***!
    \******************************************************/

  /*! exports provided: SeguimientoComponent */

  /***/
  function srcAppSeguimientoSeguimientoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeguimientoComponent", function () {
      return SeguimientoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-bootstrap-md */
    "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/seguimiento/estado"];
    };

    var SeguimientoComponent = /*#__PURE__*/function () {
      function SeguimientoComponent() {
        _classCallCheck(this, SeguimientoComponent);
      }

      _createClass(SeguimientoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SeguimientoComponent;
    }();

    SeguimientoComponent.ɵfac = function SeguimientoComponent_Factory(t) {
      return new (t || SeguimientoComponent)();
    };

    SeguimientoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SeguimientoComponent,
      selectors: [["app-seguimiento"]],
      decls: 38,
      vars: 2,
      consts: [[1, "view", "viewhome", 2, "background-color", "#1a1a1a", "height", "300px", "border-bottom", "2px solid #bda663"], [1, "mask"], [1, "ml-auto", "mr-auto"], [1, "row", "mt-100"], [1, "container"], [1, "text-white", "text-center", "text-md-left", "mt-xl-5", "mb-5", "wow", "fadeInLeft", "slower"], [1, "h1-responsive", "font-weight", "mt-sm-5"], ["align", "right", 1, "h1-responsive", "font-weight-bold", "mt--20", "title"], [1, "fas", "fa-search-location", 2, "margin-left", "20px"], [1, "bg-form", "pt-5", 2, "background-image", "url('assets/greybg.svg')", "background-repeat", "repeat-y", "background-size", "contain", "background-position", "center", "height", "750px"], [2, "color", "#1a1a1a"], [1, "row", "pb-5", 2, "margin-top", "5rem"], [1, "col-sm-12", "mb-3", "mb-md-0"], [1, "shadow-card", 2, "border-radius", "30px"], [2, "margin-left", "10px", "margin-top", "-50px", "width", "72px", "height", "72px", "border-radius", "20px", "box-shadow", "5px 5px 5px #cccccc", "padding", "10px", "background", "#1a1a1a"], ["src", "assets/searchwhite.png", "alt", "Responsive image", 1, "img-fluid", "animated", "animated", "fadeInRight", "slower", "imgsize", 2, "width", "50px"], [1, "mt-5"], [1, "form-row"], [1, "col-12"], [2, "margin-left", "px"], ["mdbInput", "", "type", "text", "placeholder", "Id de seguimiento", 1, "form-control", 2, "border-radius", "30px", "margin-top", "-10px"], [1, "col-12", "mt-3"], ["mdbInput", "", "type", "text", "placeholder", "Contrase\xF1a", 1, "form-control", 2, "border-radius", "30px", "margin-top", "-10px"], ["mdbBtn", "", 2, "border-radius", "60px", "background", "linear-gradient(120deg, #bda663 0%, #bda663 100%)", "font-weight", "bold", "font-family", "Nunito", "color", "white", 3, "routerLink"]],
      template: function SeguimientoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Seguimiento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BUSCADOR DE DENUNCIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mdb-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mdb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mdb-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ingrese el id que identifica su denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ingrese su contrase\xF1a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "CONSULTAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardBodyComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbCardTitleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbInput"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MdbBtnDirective"]],
      styles: ["h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.shadow-card[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px #bda663;\n  z-index: 100;\n  border: 1px solid #cccccc;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Roboto-condensed\";\n  font-size: 3rem;\n  font-weight: bold;\n  letter-spacing: -0.05rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2hhbmNob24vZGV2ZWwvZXRoaWNzL2Zyb250ZW5kLWV0aGljcy9zcmMvYXBwL3NlZ3VpbWllbnRvL3NlZ3VpbWllbnRvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWd1aW1pZW50by9zZWd1aW1pZW50by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUdJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2VndWltaWVudG8vc2VndWltaWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc2hhZG93LWNhcmQge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4ICNiZGE2NjM7XG4gICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gIH1cblxuICAudGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tY29uZGVuc2VkJztcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufSIsImgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uc2hhZG93LWNhcmQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAjYmRhNjYzO1xuICBib3gtc2hhZG93OiAxMHB4IDEwcHggI2JkYTY2MztcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90by1jb25kZW5zZWRcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeguimientoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-seguimiento',
          templateUrl: './seguimiento.component.html',
          styleUrls: ['./seguimiento.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/hanchon/devel/ethics/frontend-ethics/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map