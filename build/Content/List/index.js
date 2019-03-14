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
    "alignItems": "center",
    "height": "100px",
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
      "children": [
        {
          "type": "block",
          "attr": {},
          "classList": [
            "content-block"
          ],
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
                    "src": "../../Common/Images/list1.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list2.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list3.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list1.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list2.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list3.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list1.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list2.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
                          }
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
                "type": "product"
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "../../Common/Images/list3.jpg"
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
                                "value": "透视小毒医"
                              },
                              "classList": [
                                "left-title"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "无敌贱客"
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
                            "value": "王兵只是个小保安，直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天直到那天他遇到了丧尽天良的师父，从此他的人..."
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

/***/ }),

/***/ "./src/Content/List/index.ux?uxType=page":
/*!***********************************************!*\
  !*** ./src/Content/List/index.ux?uxType=page ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/List/index.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/List/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
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