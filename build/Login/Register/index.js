(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Login/Register/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Login/Register/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Login/Register/index.ux?uxType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": {
    "myfont": {
      "fontName": "myfont",
      "fontSrc": [
        "http://www.example.com/myfont.ttf"
      ]
    }
  },
  ".column": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".row": {
    "display": "flex",
    "flexDirection": "row"
  },
  ".box": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".box .top": {
    "display": "flex",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        }
      ]
    }
  },
  ".box .top image": {
    "alignSelf": "center",
    "width": "160px",
    "height": "160px",
    "marginTop": "120px",
    "marginBottom": "100px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".box .top .content": {
    "display": "flex",
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "90px",
    "paddingBottom": "0px",
    "paddingLeft": "90px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".box .top .content .phone": {
    "height": "110px",
    "lineHeight": "70px",
    "fontSize": "36px",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#e6e6e6",
    "borderStyle": "solid",
    "backgroundImage": "/Common/Images/close.png",
    "backgroundSize": "39px 39px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "right center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "phone"
        }
      ]
    }
  },
  ".box .top .content .operation-code": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#e6e6e6",
    "borderStyle": "solid",
    "lineHeight": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operation-code"
        }
      ]
    }
  },
  ".box .top .content .operation-code .code": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operation-code"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "code"
        }
      ]
    }
  },
  ".box .top .content .operation-code > text": {
    "fontSize": "30px",
    "color": "#df3d3d",
    "paddingLeft": "30px",
    "borderLeftWidth": "2px",
    "borderLeftColor": "#e6e6e6",
    "borderStyle": "solid",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operation-code"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".box .top .content .btn": {
    "backgroundColor": "#df3d3d",
    "width": "100%",
    "textAlign": "center",
    "lineHeight": "80px",
    "borderRadius": "6px",
    "color": "#ffffff",
    "fontSize": "32px",
    "marginTop": "60px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "btn"
        }
      ]
    }
  },
  ".box .bot": {
    "position": "fixed",
    "bottom": "0px",
    "display": "flex",
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bot"
        }
      ]
    }
  },
  ".box .bot text": {
    "color": "#2c85ff",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "2px",
    "borderTopColor": "#e6e6e6",
    "borderStyle": "solid",
    "width": "100%",
    "textAlign": "center",
    "fontSize": "30px",
    "lineHeight": "80px",
    "height": "80px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "bot"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/code.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/code.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": {
    "myfont": {
      "fontName": "myfont",
      "fontSrc": [
        "http://www.example.com/myfont.ttf"
      ]
    }
  },
  ".column": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".row": {
    "display": "flex",
    "flexDirection": "row"
  },
  ".operation-code": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#e6e6e6",
    "borderStyle": "solid",
    "lineHeight": "40px"
  },
  ".operation-code .code": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operation-code"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "code"
        }
      ]
    }
  },
  ".operation-code > text": {
    "fontSize": "30px",
    "color": "#df3d3d",
    "paddingLeft": "30px",
    "borderLeftWidth": "2px",
    "borderLeftColor": "#e6e6e6",
    "borderStyle": "solid",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "operation-code"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/input.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/input.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": {
    "myfont": {
      "fontName": "myfont",
      "fontSrc": [
        "http://www.example.com/myfont.ttf"
      ]
    }
  },
  ".column": {
    "display": "flex",
    "flexDirection": "column"
  },
  ".row": {
    "display": "flex",
    "flexDirection": "row"
  },
  ".phone": {
    "height": "110px",
    "lineHeight": "70px",
    "fontSize": "36px",
    "paddingTop": "20px",
    "paddingBottom": "20px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#e6e6e6",
    "borderStyle": "solid",
    "backgroundImage": "/Common/Images/close.png",
    "backgroundSize": "39px 39px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "right center"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Login/Register/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Login/Register/index.ux?uxType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "box"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "top"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "../../Common/Images/icn/logo-hsir.png"
          }
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content"
          ],
          "children": [
            {
              "type": "comp-input",
              "attr": {
                "id": "cinput",
                "phoneprop": function () {return this.phoneProp1}
              },
              "id": "cinput"
            },
            {
              "type": "comp-code",
              "attr": {
                "id": "ccode",
                "codeprop": function () {return this.codeprop1}
              },
              "id": "ccode"
            },
            {
              "type": "input",
              "attr": {
                "type": "text",
                "value": function () {return this.phone},
                "placeholder": "请输入手机号"
              },
              "classList": [
                "phone"
              ],
              "events": {
                "change": "youPhone"
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "operation-code"
              ],
              "children": [
                {
                  "type": "input",
                  "attr": {
                    "type": "text",
                    "placeholder": "请输入短信验证码"
                  },
                  "classList": [
                    "code"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "获取验证码"
                  }
                }
              ]
            },
            {
              "type": "input",
              "attr": {
                "type": "button",
                "value": "登录"
              },
              "classList": [
                "btn"
              ],
              "events": {
                "click": "login"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "bot"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "微信登录"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "QQ登录"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/code.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/code.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "operation-code"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": "text",
        "value": function () {return this.codeprop},
        "placeholder": "请输入短信验证码"
      },
      "classList": [
        "code"
      ],
      "events": {
        "change": "evtType2Emit"
      }
    },
    {
      "type": "text",
      "attr": {
        "value": "获取验证码"
      },
      "events": {
        "click": "sendMes"
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/input.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/input.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "input",
  "attr": {
    "type": "text",
    "value": function () {return this.phoneprop},
    "placeholder": "请输入手机号"
  },
  "classList": [
    "phone"
  ],
  "events": {
    "change": "youPhone"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Login/Register/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Login/Register/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fetch = _interopRequireDefault(__webpack_require__(/*! ../../Common/Js/fetch */ "./src/Common/Js/fetch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    phone: '',
    phoneProp1: '123',
    codeprop1: ''
  },
  onReady: function onReady() {
    this.vm();
  },
  vm: function vm() {
    var cinput = this.$vm('cinput');
    var ccode = this.$vm('ccode');
    cinput.parentVm = this;
    cinput.nextVm = ccode;
    ccode.parentVm = this;
    ccode.previousVm = cinput;
  },
  onInit: function onInit() {
    this.$on('evtType2', this.evtTypeHandler);
    this.$on('evtType3', this.evtTypeHandler);
  },
  evtTypeHandler: function evtTypeHandler(evt) {
    this.$app.$def.prompt.showToast({
      message: "\u5B50\u7EC4\u4EF6\uFF1A\u4E8B\u4EF6\u54CD\u5E94: " + evt.type + evt.detail
    });
    console.info("\u5B50\u7EC4\u4EF6\uFF1A\u4E8B\u4EF6\u54CD\u5E94: ", evt.type, evt.detail);
  },
  youPhone: function youPhone(_ref) {
    var value = _ref.value;
    this.phone = value;
    this.phoneProp1 = value;
  },
  login: function login() {
    Function.prototype.bindPage = function (vmInst) {
      var fn = this;
      return function () {
        if (!vmInst) {
          throw new Error("\u4F7F\u7528\u9519\u8BEF\uFF1A\u8BF7\u4F20\u9012VM\u5BF9\u8C61");
        }

        if (vmInst.$valid) {
          return fn.apply(vmInst, arguments);
        } else {
          console.info("\u9875\u9762\u9500\u6BC1\u65F6\uFF0C\u4E0D\u6267\u884C\u56DE\u8C03\u51FD\u6570");
        }
      };
    };

    this.$broadcast('evtType1', {
      params: '额外参数'
    });

    var _this = this;

    _fetch.default.getJson("/aa", {}, function (data) {
      if (data.code == 200) {
        _this.$app.$def.prompt.showToast({
          message: _this.phone + '登录成功，并存储了信息!,1.5秒后跳转首页！'
        });

        _this.$app.$def.storage.set({
          key: 'auth',
          phone: _this.phone
        });

        setTimeout(function () {}, 1500);
      }
    }.bindPage(_this));
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/code.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/code.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prop: {
    codeprop: Number
  },
  onInit: function onInit() {
    this.$on('evtType1', this.evtTypeHandler);
  },
  evtTypeHandler: function evtTypeHandler(evt) {
    this.$app.$def.prompt.showToast({
      message: "\u5B50\u7EC4\u4EF6\uFF1A\u4E8B\u4EF6\u54CD\u5E94: " + evt.type + evt.detail
    });
    console.info("\u5B50\u7EC4\u4EF6\uFF1A\u4E8B\u4EF6\u54CD\u5E94: ", evt.type, evt.detail);
  },
  evtType2Emit: function evtType2Emit() {
    this.$dispatch('evtType2', {
      params: '额外参数'
    });
  },
  evtType3Emit: function evtType3Emit() {
    this.$emit('evtType3', {
      params: '额外参数'
    });
  },
  sendMes: function sendMes() {
    if (this.previousVm) {
      this.previousVm.mes("组件之间传值");
      this.previousVm.$emit('customEventInVm2', '兄弟之间通信的消息内容');
    }
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/input.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/input.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: ["phoneprop"],
  data: function data() {
    return {
      upperProp1: this.phoneprop
    };
  },
  onInit: function onInit() {
    this.$watch('phoneprop', 'watchPropsChange');
  },
  watchPropsChange: function watchPropsChange(newV, oldV) {
    console.info("\u76D1\u542C\u6570\u636E\u53D8\u5316\uFF1A", newV, oldV);
    this.upperProp1 = newV && newV.toUpperCase();
  },
  events: {
    customEventInVm2: function customEventInVm2(evt) {
      var now = new Date().toISOString();
      this.eventDetail = "".concat(now, ": ").concat(evt.detail);
      this.$app.$def.prompt.showToast({
        message: "\u76D1\u542C\u6570\u636E\u53D8\u5316\uFF1A" + this.eventDetail
      });
    }
  },
  mes: function mes(msg) {
    this.$app.$def.prompt.showToast({
      message: "\u76D1\u542C\u6570\u636E\u53D8\u5316\uFF1A" + msg
    });
  }
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/code.ux?uxType=comp&name=comp-code":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/code.ux?uxType=comp&name=comp-code ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./code.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/code.ux?uxType=comp")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./code.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/code.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./code.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/code.ux?uxType=comp")

$app_define$('@app-component/comp-code', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/input.ux?uxType=comp&name=comp-input":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/input.ux?uxType=comp&name=comp-input ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./input.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/input.ux?uxType=comp")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./input.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/modules/input.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./input.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/input.ux?uxType=comp")

$app_define$('@app-component/comp-input', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/Common/Js/fetch.js":
/*!********************************!*\
  !*** ./src/Common/Js/fetch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_ROOT = 'http://47.92.48.144:3100';
var header = {};

function getAuth() {
  return new Promise(function (resolve, reject) {
    _system2.default.get({
      key: 'auth',
      success: function success(data) {
        header.Cookie = data;
        resolve(true);
      },
      fail: function fail(data, code) {
        reject(false);
      }
    });
  });
}

function fetchFun(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var CAllBACK = arguments.length > 3 ? arguments[3] : undefined;
  console.log('url++' + url);
  console.log('data++' + data);
  console.log('method++' + method);
  return new Promise(function (resolve, reject) {
    _system.default.fetch({
      url: API_ROOT + url,
      data: data,
      header: header,
      method: method,
      success: function success(data) {
        // console.log(data,'1111111111111')
        // CAllBACK && CAllBACK(data)
        resolve(CAllBACK && CAllBACK(data));
      },
      fail: function fail(data) {
        reject(data);
      }
    });
  });
}

function authAbout(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'get';
  var canSkip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return getAuth().then(function (auth) {
    if (auth || canSkip) {
      return fetchFun(url, data, method);
    } else {
      return new Promise(function (resolve, reject) {
        reject("请先登陆！");
      });
    }
  });
} // // async版
//  function fetchFun(){
//     return async ()=>{
//         const {native} = this.$app.$def;
//         const res = await native.fetch({
//             url: 'https://statres.quickapp.cn/quickapp/quickapptool/release/platform/quickapp_platform.json'
//         })
//     }
// }


var _default = {
  postJson: function postJson(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var CAllBACK = arguments.length > 2 ? arguments[2] : undefined;
    var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (config.authAbout) {
      return authAbout(url, data, 'post', config.canSkip);
    } else {
      return fetchFun(url, data, 'post', CAllBACK);
    }
  },
  getJson: function getJson(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var CAllBACK = arguments.length > 2 ? arguments[2] : undefined;
    var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (config.authAbout) {
      return authAbout(url, data, 'get', config.canSkip);
    } else {
      return fetchFun(url, data, 'get', CAllBACK);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./src/Login/Register/index.ux?uxType=page":
/*!*************************************************!*\
  !*** ./src/Login/Register/index.ux?uxType=page ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../../modules/input.ux?uxType=comp&name=comp-input */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/input.ux?uxType=comp&name=comp-input")
__webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../../modules/code.ux?uxType=comp&name=comp-code */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/code.ux?uxType=comp&name=comp-code")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Login/Register/index.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Login/Register/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Login/Register/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map