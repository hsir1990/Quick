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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Content/List/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/List/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/List/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  ".box > div": {
    "display": "flex",
    "flexDirection": "row",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#cbcbcb",
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
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".box > div .top-left": {
    "width": "60px",
    "height": "100px",
    "backgroundImage": "/Common/Images/arrow.png",
    "backgroundSize": "20px 40px",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center center",
    "transform": "{\"rotate\":\"180deg\"}",
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
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-left"
        }
      ]
    }
  },
  ".box > div .top-mid": {
    "flex": 1,
    "textAlign": "center",
    "color": "#333333",
    "fontSize": "34px",
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
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-mid"
        }
      ]
    }
  },
  ".box > div a": {
    "color": "#999999",
    "fontSize": "24px",
    "textAlign": "center",
    "marginRight": "20px",
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
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "a"
        }
      ]
    }
  },
  ".box .content": {
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
          "v": "content"
        }
      ]
    }
  },
  ".box .content list-item": {
    "display": "flex",
    "flexDirection": "row",
    "height": "220px",
    "marginTop": "0px",
    "marginRight": "20px",
    "marginBottom": "0px",
    "marginLeft": "20px",
    "paddingTop": "30px",
    "paddingRight": "0px",
    "paddingBottom": "30px",
    "paddingLeft": "0px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#efefef",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        }
      ]
    }
  },
  ".box .content list-item image": {
    "width": "120px",
    "height": "160px",
    "marginRight": "20px",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
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
  ".box .content list-item > div": {
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".box .content list-item > div .top-list": {
    "display": "flex",
    "flexDirection": "row",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-list"
        }
      ]
    }
  },
  ".box .content list-item > div .top-list .left": {
    "flex": 1,
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        }
      ]
    }
  },
  ".box .content list-item > div .top-list .left .left-title": {
    "fontSize": "30px",
    "color": "#333333",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left-title"
        }
      ]
    }
  },
  ".box .content list-item > div .top-list .left .left-fu": {
    "fontSize": "24px",
    "color": "#999999",
    "marginTop": "16px",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "left-fu"
        }
      ]
    }
  },
  ".box .content list-item > div .top-list .right": {
    "paddingTop": "0px",
    "paddingRight": "16px",
    "paddingBottom": "0px",
    "paddingLeft": "16px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderTopColor": "#d2d6d8",
    "borderRightColor": "#d2d6d8",
    "borderBottomColor": "#d2d6d8",
    "borderLeftColor": "#d2d6d8",
    "borderStyle": "solid",
    "backgroundColor": "#f3f3f3",
    "borderRadius": "6px",
    "height": "56px",
    "lineHeight": "56px",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "top-list"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "right"
        }
      ]
    }
  },
  ".box .content list-item > div .bot": {
    "marginTop": "10px",
    "fontSize": "24px",
    "color": "#999999",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
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
  ".box .content list-item > div .bot text": {
    "lines": 2,
    "textOverflow": "ellipsis",
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
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "list-item"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
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
  },
  ".box .content .load-more": {
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
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
          "v": "load-more"
        }
      ]
    }
  },
  ".box .content .load-more text": {
    "textAlign": "center",
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
          "v": "load-more"
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

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/List/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/List/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "refresh",
  "attr": {
    "refreshing": function () {return this.isRefreshing}
  },
  "events": {
    "refresh": "refresh"
  },
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "box"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "top-left"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "重磅推荐"
              },
              "events": {
                "click": "backa"
              },
              "classList": [
                "top-mid"
              ]
            },
            {
              "type": "a",
              "attr": {
                "href": "/",
                "value": "首页"
              }
            }
          ]
        },
        {
          "type": "list",
          "attr": {
            "scrollpage": "true"
          },
          "classList": [
            "content"
          ],
          "events": {
            "scrollbottom": "loadMoreData"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "classList": [
                "content-block"
              ],
              "repeat": {
                "exp": function () {return this.listData},
                "key": "key",
                "value": "val"
              },
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "product"
                  },
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.val.img}
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "top-list"
                          ],
                          "children": [
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "left"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.val.title}
                                  },
                                  "classList": [
                                    "left-title"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.val.author}
                                  },
                                  "classList": [
                                    "left-fu"
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "right"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": "立即阅读"
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
                                "value": function () {return this.val.content}
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "list-item",
              "attr": {
                "type": "loadMore"
              },
              "classList": [
                "load-more"
              ],
              "children": [
                {
                  "type": "progress",
                  "attr": {
                    "type": "circular"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "加载更多"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/List/index.ux?uxType=page":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/List/index.ux?uxType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    isRefreshing: false,
    listData: [{
      img: "../../Common/Images/list1.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list2.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list3.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list1.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list2.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list3.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list1.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list2.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }, {
      img: "../../Common/Images/list3.jpg",
      title: "透视小毒医",
      author: "无敌贱客",
      content: "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
    }],
    vis: true
  },
  onInit: function onInit() {},
  backa: function backa() {
    this.$app.$def.router.back();
  },
  refresh: function refresh(evt) {
    var _this2 = this;

    var _this = this;

    this.isRefreshing = evt.refreshing;
    console.log(this.isRefreshing);
    setTimeout(function () {
      console.log(_this2.isRefreshing);

      _this.$app.$def.prompt.showToast({
        message: '下拉刷新成功！'
      });

      _this2.isRefreshing = false;
    }, 2000);
  },
  loadMoreData: function loadMoreData() {
    var _this = this;

    _fetch.default.getJson('/list', {}, function () {
      _this.$app.$def.prompt.showToast({
        message: '上拉加载成功！'
      });
    });
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

/***/ "./src/Content/List/index.ux?uxType=page":
/*!***********************************************!*\
  !*** ./src/Content/List/index.ux?uxType=page ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/List/index.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/List/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/List/index.ux?uxType=page")

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