(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/video.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/api */ "./resources/js/Services/api.js");
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
  data: function data() {
    return {
      video: [],
      videoDescription: []
    };
  },
  methods: {
    getVideo: function getVideo() {
      var _this = this;

      var path = window.location.pathname;
      var splitPath = path.split('/')[2];
      var fullPathName = splitPath.split('%20').join(' ');
      _Services_api__WEBPACK_IMPORTED_MODULE_0__["default"].getVideo(fullPathName).then(function (response) {
        _this.video = response.data.response;
        console.log(_this.video.videoDescription);

        var split = _this.video.videoDescription.split(";");

        split.forEach(function (element, index) {
          var obj = element.split(":");

          _this.videoDescription.push({
            title: obj[0],
            text: obj[1],
            index: index
          });
        });
      });
    }
  },
  mounted: function mounted() {
    this.getVideo();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*[data-v-50f43358] {\n    padding: 0px;\n    margin: 0px;\n    font-family: 'Open Sans', sans-serif;\n}\n#videoDescription[data-v-50f43358]{\n    margin-top: 10px;\n}\n#Projects[data-v-50f43358] {\n    width: 100%;\n    position: relative;\n    margin-top: 20px;\n    padding-bottom: 50px;\n}\n#iframe[data-v-50f43358] {\n    position:absolute;top:0;left:0;width:100%;height:100%\n}\n#test[data-v-50f43358]{\n    position:relative;\n    padding-top:56.25%;\n}\n.title[data-v-50f43358] {\n    font-weight: 600;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row", attrs: { id: "Projects" } },
    [
      _c("h1", [_vm._v(_vm._s(_vm.video.videoTitle))]),
      _vm._v(" "),
      _c("div", { attrs: { id: "test" } }, [
        _c("iframe", {
          staticClass: "col-12",
          attrs: {
            src: _vm.video.videoLink,
            frameborder: "0",
            allowfullscreen: "",
            id: "iframe"
          }
        })
      ]),
      _vm._v(" "),
      _vm._l(_vm.videoDescription, function(section) {
        return _c(
          "div",
          {
            key: section.index,
            staticClass: "col-12",
            attrs: { id: "videoDescription" }
          },
          [
            _c("p", [
              _c("b", { staticClass: "title" }, [
                _vm._v(_vm._s(section.title))
              ]),
              _vm._v(":" + _vm._s(section.text))
            ])
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/App/pages/video.vue":
/*!******************************************!*\
  !*** ./resources/js/App/pages/video.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.vue?vue&type=template&id=50f43358&scoped=true& */ "./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true&");
/* harmony import */ var _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.vue?vue&type=script&lang=js& */ "./resources/js/App/pages/video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& */ "./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "50f43358",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/pages/video.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/pages/video.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/App/pages/video.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=style&index=0&id=50f43358&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_id_50f43358_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./video.vue?vue&type=template&id=50f43358&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/pages/video.vue?vue&type=template&id=50f43358&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_template_id_50f43358_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Services/api.js":
/*!**************************************!*\
  !*** ./resources/js/Services/api.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl: '/'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Get all videos
   * @returns {AxiosInstance}
   */
  getVideos: function getVideos() {
    return instance.get('/api/videos');
  },

  /**
   * Get video data
   * @param {string} id
   * @returns {Promise<AxiosResponse<any>>}
   */
  getVideo: function getVideo(id) {
    return instance.get('/api/videos/' + id);
  },

  /**
   * Deletes video from database
   * @param {number} id
   * @returns {AxiosInstance}
   */
  deleteVideo: function deleteVideo(id) {
    return instance["delete"]('/api/videos/' + id);
  },

  /**
   * Modifys video data
   * @param {number} id
   */
  modifyVideo: function modifyVideo(id) {
    return instance.patch('/api/videos/' + id);
  },

  /**
   * Attempts to login user
   * @param {string} username
   * @param {string} password
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: function login(username, password) {
    return instance.post('/api/login', {
      username: username,
      password: password
    });
  }
});

/***/ })

}]);