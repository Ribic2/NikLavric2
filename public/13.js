(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/cms.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      posnetkiData: '',
      naslovPosnetka: '',
      opisPosnetka: '',
      videoLink: '',
      thumbnail: '',
      apiNaslovPosnetka: '',
      thumbnailName: '',
      filterErrorMessage: '',
      //Snackbar
      showSnackbar: false,
      position: 'center',
      duration: 4000,
      isInfinity: false,
      //Add new record settings
      showAddSection: false
    };
  },
  //When page is loaded it calls to API and stores returned data into global variable
  created: function created() {
    var _this = this;

    axios.get("/api/posnetki").then(function (response) {
      _this.posnetkiData = response.data.data;
    }).then(function () {
      for (var i = 0; i < Object.keys(_this.posnetkiData).length; i++) {
        _this.posnetkiData[i].id = i;

        _this.showArray.push(true);
      }
    });
  },
  methods: {
    //Filters all the data if its correct
    checkData: function checkData() {
      //Variables that check if data that was submited is correct before sending it to database
      if (this.naslovPosnetka == "" || this.videoLink == "" || this.thumbnailName == "" || this.thumbnail == null || this.opisPosnetka == "" || this.apiNaslovPosnetka == "") {
        this.showSnackbar = true;
        this.filterErrorMessage = "Some fields are empty.";
        return false;
      }

      var checkVideoLink = false;
      var checkImageName = false; //Checks apiNaslovPosnetka is correct, if it have '-' insted of spaces
      //If not then it splits it and joins it on '-'

      var split = this.apiNaslovPosnetka.split(' ');
      var splitJoin = split.join('-');
      this.apiNaslovPosnetka = splitJoin.toLowerCase(); //Check if provided video link is valid

      if (this.videoLink.includes("embed")) {
        var checkVideoLink = true;
      } //Checks if image name contains extenstion


      if (!this.thumbnailName.includes(".")) {
        checkImageName = true;
      }

      if (checkVideoLink && checkVideoLink) {
        return true;
      }

      this.showSnackbar = true;
      this.filterErrorMessage = "Some of the given data is not correct.";
      return false;
    },
    //Adds news record to database
    addData: function addData() {
      var _this2 = this;

      //Gets image file
      var thumbnail = document.getElementById('thumbnail').files[0];
      var data = new FormData(); //Sets header to multipart/form-data so it can send files

      var settings = {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      }; //if function 'checkData()' return true program procedes with axioes request

      if (this.checkData()) {
        data.append('image', thumbnail);
        data.append('sendByUser', true);
        data.append('type', 'add');
        data.append('imageName', this.thumbnailName);
        data.append('naslovPosnetka', this.naslovPosnetka);
        data.append('opisPosnetka', this.opisPosnetka);
        data.append('videoLink', this.videoLink);
        data.append('apiNaslovPosnetka', this.apiNaslovPosnetka);
        data.append('zaporedje', Object.keys(this.posnetkiData).length + 1);
        axios.post('https://niklavric.com/admin-panel', data, settings).then(function (response) {
          _this2.posnetkiData = response.data.data;
        }).then(function () {
          for (var i = 0; i < Object.keys(_this2.posnetkiData).length; i++) {
            _this2.posnetkiData[i].id = i;
          }
        }).then(function () {
          _this2.naslovPosnetka = '';
          _this2.opisPosnetka = '';
          _this2.videoLink = '';
          _this2.thumbnail = '';
          _this2.apiNaslovPosnetka = '';
          _this2.thumbnailName = '';
          _this2.filterErrorMessage = '';
        });
      }
    },
    changeValueShow: function changeValueShow() {
      if (this.showAddSection == true) {
        this.showAddSection = false;
      } else {
        this.showAddSection = true;
      }
    },
    changeData: function changeData(e) {
      var _this3 = this;

      //Data to change
      var naslovPosnetka = document.getElementsByClassName('naslovPosnetka')[e].value;
      var opisPosnetka = document.getElementsByClassName('opisPosnetka')[e].value;
      var naslovPosnetkaApi = document.getElementsByClassName('naslovPosnetkaApi')[e].value;
      var videoLink = document.getElementsByClassName('videoLink')[e].value;
      var id = this.posnetkiData[e].idPosnetki;
      axios.post('https://niklavric.com/admin-panel', {
        sendByUser: true,
        type: "changeData",
        naslovPosnetka: naslovPosnetka,
        opisPosnetka: opisPosnetka,
        naslovPosnetkaApi: naslovPosnetkaApi,
        id: id
      }).then(function (response) {
        _this3.posnetkiData = response.data.data;
      }).then(function () {
        for (var i = 0; i < Object.keys(_this3.posnetkiData).length; i++) {
          _this3.posnetkiData[i].id = i;
        }
      });
    },
    //This function changes the order of elements
    onEnd: function onEnd(evt) {
      var _this4 = this;

      var oldIndex = evt.oldIndex;
      var newIndex = evt.newIndex;
      var indexOfElementsArray = [];
      var zaporedjeArray = []; //Appends order of ids, if order is not the same as order of moved id

      for (var i = 0; i < Object.keys(this.posnetkiData).length; i++) {
        if (this.posnetkiData[i].zaporedje != this.posnetkiData[newIndex].zaporedje) {
          zaporedjeArray.push(parseInt(this.posnetkiData[i].zaporedje));
        }
      } //Checks all of ids and appends those who are not the same as the selected one


      for (var i = 0; i < Object.keys(this.posnetkiData).length; i++) {
        if (this.posnetkiData[i].idPosnetki != this.posnetkiData[oldIndex].idPosnetki) {
          indexOfElementsArray.push(this.posnetkiData[i].idPosnetki);
        }
      } //Sends data to backend


      axios.post('https://niklavric.com/admin-panel', {
        sendByUser: true,
        type: "changeOrder",
        id: this.posnetkiData[oldIndex].idPosnetki,
        zaporedjeArray: zaporedjeArray,
        indexOfElementsArray: indexOfElementsArray,
        newIndex: newIndex + 1
      }).then(function (response) {
        _this4.posnetkiData = response.data.data;
      }).then(function () {
        for (var i = 0; i < Object.keys(_this4.posnetkiData).length; i++) {
          _this4.posnetkiData[i].id = i;
        }
      });
    },
    //Deletes record from the database and reincrements the order
    deleteData: function deleteData(e) {
      var _this5 = this;

      var idPosnetkovArray = [];
      var thumbnailName; //Loops through data and appends all id that are not equal to selected one.
      //It also stores thumbnail name to variable and sends everything to database

      for (var i = 0; i < Object.keys(this.posnetkiData).length; i++) {
        if (this.posnetkiData[i].idPosnetki != e + 1) {
          idPosnetkovArray.push(this.posnetkiData[i].idPosnetki);
        } else {
          thumbnailName = this.posnetkiData[e].thumbnail;
        }
      } //Sends data to database


      axios.post('/admin-panel', {
        sendByUser: true,
        type: "delete",
        id: this.posnetkiData[e].idPosnetki,
        thumbnailName: thumbnailName,
        idPosnetkov: idPosnetkovArray
      }).then(function (response) {
        _this5.posnetkiData = response.data.data;
      }).then(function () {
        for (var i = 0; i < Object.keys(_this5.posnetkiData).length; i++) {
          _this5.posnetkiData[i].id = i;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-66587862]{\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n.page-container[data-v-66587862] {\n    min-height: 300px;\n    overflow: hidden;\n    position: relative;\n    border: 1px solid rgba(#000, .12);\n}\n#opisPosnetka[data-v-66587862]{\n    height: 250px;\n}\n.md-field[data-v-66587862]{\n    margin: 5px;\n}\n.changeButtonShow[data-v-66587862]{\n    width: 100%;\n    height: 50px;\n    margin: 5px;\n    background-color: #448aff;\n    color: white;\n    border: solid 1px #448aff;\n}\n.md-primary[data-v-66587862]{\n    overflow: hidden;\n}\n#addButton[data-v-66587862]{\n    width: 100%;\n    margin: 5px;\n    height: 50px;\n}\n.input[data-v-66587862]{\n    position: relative;\n    top: 15px;\n}\n#errorDisplay[data-v-66587862]{\n    text-align: center;\n    width: 100%;\n    height: 100%;\n}\n/*Change, edit, delete part */\n.sortable[data-v-66587862]{\n    width: 100%;\n    min-height: 100px;\n    height: auto;\n    margin: 5px;\n    margin-top: 10px;\n    border-radius: 2px;\n    background-color: #f2f2f2;\n    border: solid 1px #cccccc;\n}\n.sortable[data-v-66587862]:hover{\n    cursor: move;\n    box-shadow: 10px 10px 10px gray;\n}\n.changeButton[data-v-66587862]{\n    background-color: green;\n    border: solid 1px green;\n}\n.deleteButton[data-v-66587862]{\n    background-color: red;\n    border: solid 1px red;\n}\n.button[data-v-66587862]{\n    color: white;\n    margin: 5px;\n    height: 50px;\n    width: 200px;\n}\n.changeInputField[data-v-66587862]{\n    margin: 5px;\n    width: 32.3%;\n    height: 50px;\n}\n.changeTextArea[data-v-66587862]{\n    resize: none !important;\n    position: relative;\n    width: 99%;\n    margin: 5px;\n    display: block;\n}\n.id[data-v-66587862]{\n    margin: 5px;\n}\n/*Responsive section */\n@media only screen and (max-width: 767px){\n.header[data-v-66587862]{\n        height: 64px;\n}\n.changeInputField[data-v-66587862], .changeTextArea[data-v-66587862]{\n        display: block;\n        width: 98%;\n}\n}\n@media only screen and (min-width: 600px) and (max-width: 960px){\n.header[data-v-66587862]{\n        height: 64px;\n}\n.changeInputField[data-v-66587862], .changeTextArea[data-v-66587862]{\n        display: block;\n        width: 98%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-container" },
    [
      _c(
        "md-app",
        { attrs: { "md-mode": "reveal" } },
        [
          _c("md-app-toolbar", { staticClass: "md-primary header" }, [
            _c("span", { staticClass: "md-title" }, [
              _vm._v("Urejanje posnetkov")
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-content",
        [
          _vm.showAddSection == true
            ? _c("form", [
                _c(
                  "div",
                  [
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Naslov posnetka")]),
                        _vm._v(" "),
                        _c("md-input", {
                          staticClass: "input",
                          model: {
                            value: _vm.naslovPosnetka,
                            callback: function($$v) {
                              _vm.naslovPosnetka = $$v
                            },
                            expression: "naslovPosnetka"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Video link")]),
                        _vm._v(" "),
                        _c("md-input", {
                          staticClass: "input",
                          model: {
                            value: _vm.videoLink,
                            callback: function($$v) {
                              _vm.videoLink = $$v
                            },
                            expression: "videoLink"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Ime slike")]),
                        _vm._v(" "),
                        _c("md-input", {
                          staticClass: "input",
                          model: {
                            value: _vm.thumbnailName,
                            callback: function($$v) {
                              _vm.thumbnailName = $$v
                            },
                            expression: "thumbnailName"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Slika")]),
                        _vm._v(" "),
                        _c("md-file", {
                          staticClass: "input",
                          attrs: { id: "thumbnail" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Naslov posnetka API")]),
                        _vm._v(" "),
                        _c("md-input", {
                          staticClass: "input",
                          model: {
                            value: _vm.apiNaslovPosnetka,
                            callback: function($$v) {
                              _vm.apiNaslovPosnetka = $$v
                            },
                            expression: "apiNaslovPosnetka"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-field",
                      { staticClass: "md-field" },
                      [
                        _c("label", [_vm._v("Opis posnetka")]),
                        _vm._v(" "),
                        _c("md-textarea", {
                          staticClass: "input",
                          attrs: { id: "opisPosnetka" },
                          model: {
                            value: _vm.opisPosnetka,
                            callback: function($$v) {
                              _vm.opisPosnetka = $$v
                            },
                            expression: "opisPosnetka"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "md-button",
                      {
                        staticClass: "md-raised md-primary",
                        attrs: { id: "addButton" },
                        on: {
                          click: function($event) {
                            return _vm.addData()
                          }
                        }
                      },
                      [_vm._v("DODAJ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "changeButtonShow",
                        on: {
                          click: function($event) {
                            return _vm.changeValueShow()
                          }
                        }
                      },
                      [_vm._v("SKRIJ")]
                    )
                  ],
                  1
                )
              ])
            : _vm.showAddSection == false
            ? _c("div", [
                _c(
                  "button",
                  {
                    staticClass: "changeButtonShow",
                    on: {
                      click: function($event) {
                        return _vm.changeValueShow()
                      }
                    }
                  },
                  [_vm._v("SKRIJ")]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c(
            "draggable",
            { attrs: { "ghost-class": "ghost" }, on: { end: _vm.onEnd } },
            [
              _c(
                "transition-group",
                { attrs: { type: "transition", name: "flip-list" } },
                _vm._l(_vm.posnetkiData, function(posnetek) {
                  return _c(
                    "div",
                    { key: posnetek.idPosnetki, staticClass: "sortable" },
                    [
                      _c("p", { staticClass: "id" }, [
                        _vm._v("Id: " + _vm._s(posnetek.idPosnetki))
                      ]),
                      _vm._v(" "),
                      _c("form", { attrs: { method: "POST" } }, [
                        _c("input", {
                          staticClass: "naslovPosnetka changeInputField",
                          attrs: {
                            type: "text",
                            placeholder: "Naslov posnetka"
                          },
                          domProps: { value: posnetek.naslovPosnetka }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "videoLink changeInputField",
                          attrs: { type: "text", placeholder: "Video link" },
                          domProps: { value: posnetek.videoLink }
                        }),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "naslovPosnetkaApi changeInputField",
                          attrs: {
                            type: "text",
                            placeholder: "Naslov posnetka api"
                          },
                          domProps: { value: posnetek.naslovPosnetkaApi }
                        }),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "opisPosnetka changeTextArea",
                          attrs: { placeholder: "Opis posnetka", rows: "8" },
                          domProps: { value: posnetek.opisPosnetka }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "deleteButton button",
                          on: {
                            click: function($event) {
                              return _vm.deleteData(posnetek.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "changeButton button",
                          on: {
                            click: function($event) {
                              return _vm.changeData(posnetek.id)
                            }
                          }
                        },
                        [_vm._v("Spremeni")]
                      )
                    ]
                  )
                }),
                0
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-snackbar",
        {
          attrs: {
            "md-position": _vm.position,
            "md-duration": _vm.isInfinity ? Infinity : _vm.duration,
            "md-active": _vm.showSnackbar,
            "md-persistent": ""
          },
          on: {
            "update:mdActive": function($event) {
              _vm.showSnackbar = $event
            },
            "update:md-active": function($event) {
              _vm.showSnackbar = $event
            }
          }
        },
        [
          _c("p", { attrs: { id: "errorDisplay" } }, [
            _vm._v(_vm._s(_vm.filterErrorMessage))
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App/pages/cms.vue":
/*!****************************************!*\
  !*** ./resources/js/App/pages/cms.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cms.vue?vue&type=template&id=66587862&scoped=true& */ "./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true&");
/* harmony import */ var _cms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cms.vue?vue&type=script&lang=js& */ "./resources/js/App/pages/cms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& */ "./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "66587862",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/pages/cms.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/pages/cms.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/App/pages/cms.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cms.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=style&index=0&id=66587862&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_style_index_0_id_66587862_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cms.vue?vue&type=template&id=66587862&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/cms.vue?vue&type=template&id=66587862&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cms_vue_vue_type_template_id_66587862_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);