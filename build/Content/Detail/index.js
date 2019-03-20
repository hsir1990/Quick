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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Content/Detail/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/Detail/index.ux?uxType=page":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/Detail/index.ux?uxType=page ***!
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
  ".box .title-bar": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "100px",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#cbcbcb",
    "borderStyle": "solid",
    "backgroundColor": "#f7f7f7",
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
          "v": "title-bar"
        }
      ]
    }
  },
  ".box .title-bar .top-left": {
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
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar"
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
  ".box .title-bar .top-mid": {
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
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar"
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
  ".box .title-bar a": {
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
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title-bar"
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
  ".box .book": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "30px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
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
          "v": "book"
        }
      ]
    }
  },
  ".box .book image": {
    "width": "160px",
    "height": "200px",
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
          "v": "book"
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
  ".box .book > div": {
    "display": "flex",
    "flexDirection": "column",
    "marginLeft": "20px",
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
          "v": "book"
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
  ".box .book > div .title": {
    "fontSize": "32px",
    "color": "#2e343f",
    "marginBottom": "16px",
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
          "v": "book"
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
          "v": "title"
        }
      ]
    }
  },
  ".box .book > div .author": {
    "fontSize": "24px",
    "color": "#666666",
    "marginBottom": "16px",
    "marginTop": "10px",
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
          "v": "book"
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
          "v": "author"
        }
      ]
    }
  },
  ".box .book > div .catalog": {
    "fontSize": "24px",
    "color": "#666666",
    "marginBottom": "16px",
    "marginTop": "10px",
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
          "v": "book"
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
          "v": "catalog"
        }
      ]
    }
  },
  ".box .book > text": {
    "marginTop": "10px",
    "width": "36px",
    "height": "32px",
    "backgroundImage": "/Common/Images/header.png",
    "backgroundSize": "100% 100%",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center center",
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
          "v": "book"
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
  ".box .book-bar": {
    "display": "flex",
    "flexDirection": "row",
    "paddingTop": "0px",
    "paddingRight": "25px",
    "paddingBottom": "0px",
    "paddingLeft": "25px",
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
          "v": "book-bar"
        }
      ]
    }
  },
  ".box .book-bar .free": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "height": "64px",
    "lineHeight": "64px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderTopColor": "#aaaaaa",
    "borderRightColor": "#aaaaaa",
    "borderBottomColor": "#aaaaaa",
    "borderLeftColor": "#aaaaaa",
    "borderStyle": "solid",
    "borderRadius": "6px",
    "textAlign": "center",
    "marginRight": "20px",
    "flex": 1,
    "fontSize": "30px",
    "color": "#555555",
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
          "v": "book-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "free"
        }
      ]
    }
  },
  ".box .book-bar .free .icon": {
    "backgroundImage": "/Common/Images/book.png",
    "backgroundSize": "100% 100%",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center center",
    "width": "40px",
    "height": "40px",
    "marginRight": "10px",
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
          "v": "book-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "free"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon"
        }
      ]
    }
  },
  ".box .book-bar .down": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "flex": 2,
    "fontSize": "30px",
    "height": "64px",
    "lineHeight": "64px",
    "color": "#ffffff",
    "backgroundColor": "#d3270f",
    "borderRadius": "6px",
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
          "v": "book-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "down"
        }
      ]
    }
  },
  ".box .book-bar .down .icon": {
    "backgroundImage": "/Common/Images/arrow-down.png",
    "backgroundSize": "100% 100%",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center center",
    "width": "40px",
    "height": "40px",
    "marginRight": "10px",
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
          "v": "book-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "down"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon"
        }
      ]
    }
  },
  ".box .book-bar .down text": {
    "color": "#ffffff",
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
          "v": "book-bar"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "down"
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
  ".box .tip": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "borderTopWidth": "2px",
    "borderTopColor": "#efefef",
    "height": "80px",
    "marginTop": "30px",
    "borderBottomWidth": "20px",
    "borderBottomColor": "#b8b8b8",
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
          "v": "tip"
        }
      ]
    }
  },
  ".box .tip .tip-left": {
    "width": "76px",
    "height": "36px",
    "backgroundColor": "#8bc118",
    "borderTopRightRadius": "6px",
    "derBottomRightRadius": "6px",
    "lineHeight": "36px",
    "textAlign": "center",
    "fontSize": "24px",
    "color": "#ffffff",
    "marginRight": "10px",
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
          "v": "tip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tip-left"
        }
      ]
    }
  },
  ".box .tip .tip-mid": {
    "flex": 1,
    "fontSize": "28px",
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
          "v": "tip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tip-mid"
        }
      ]
    }
  },
  ".box .tip .tip-right": {
    "fontSize": "20px",
    "color": "#9f9f9f",
    "marginTop": "0px",
    "marginRight": "20px",
    "marginBottom": "0px",
    "marginLeft": "20px",
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
          "v": "tip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tip-right"
        }
      ]
    }
  },
  ".box .content": {
    "display": "flex",
    "flexDirection": "column",
    "paddingTop": "0px",
    "paddingRight": "40px",
    "paddingBottom": "0px",
    "paddingLeft": "40px",
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
  ".box .content .con-title": {
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
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-title"
        }
      ]
    }
  },
  ".box .content .con-title .con-title-left": {
    "flex": 1,
    "borderTopWidth": "2px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderTopColor": "#b8b8b8",
    "borderRightColor": "#b8b8b8",
    "borderBottomColor": "#b8b8b8",
    "borderLeftColor": "#b8b8b8",
    "borderStyle": "solid",
    "textAlign": "center",
    "fontSize": "30px",
    "color": "#666666",
    "lineHeight": "70px",
    "backgroundColor": "#b8b8b8",
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
          "v": "con-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-title-left"
        }
      ]
    }
  },
  ".box .content .con-title .con-title-right": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "30px",
    "color": "#666666",
    "lineHeight": "70px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "borderTopColor": "#b8b8b8",
    "borderRightColor": "#b8b8b8",
    "borderBottomColor": "#b8b8b8",
    "borderLeftColor": "#b8b8b8",
    "borderStyle": "solid",
    "backgroundColor": "#b8b8b8",
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
          "v": "con-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-title-right"
        }
      ]
    }
  },
  ".box .content .con-title .active": {
    "color": "#ff0020",
    "backgroundColor": "#ffffff",
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
          "v": "con-title"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        }
      ]
    }
  },
  ".box .content .con-con": {
    "marginTop": "15px",
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
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": "100%",
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
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-left"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-left div": {
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
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-left"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-left div .con-con-nei": {
    "fontSize": "24px",
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
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-left"
        },
        {
          "t": "d"
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
          "v": "con-con-nei"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-left div .con-con-find": {
    "fontSize": "20px",
    "color": "#9f9f9f",
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
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-left"
        },
        {
          "t": "d"
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
          "v": "con-con-find"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-right": {
    "width": "100%",
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
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-right"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-right div": {
    "display": "flex",
    "flexDirection": "column",
    "width": "100%",
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
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-right"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".box .content .con-con .con-con-right div div": {
    "marginLeft": "10px",
    "marginRight": "10px",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#efefef",
    "borderStyle": "solid",
    "paddingTop": "10px",
    "paddingRight": "10px",
    "paddingBottom": "10px",
    "paddingLeft": "10px",
    "width": "100%",
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
          "v": "con-con"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "con-con-right"
        },
        {
          "t": "d"
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
          "n": "div"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/Detail/index.ux?uxType=page":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/Detail/index.ux?uxType=page ***!
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
      "type": "slot1",
      "attr": {
        "bookself": function () {return this.bookself}
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "书籍详情"
          },
          "classList": [
            "top-mid"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "book"
      ],
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
              "type": "text",
              "attr": {
                "value": "透视小毒医"
              },
              "classList": [
                "title"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "畅销 - 作者：周大少"
              },
              "classList": [
                "author"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "连载(共2361章)"
              },
              "classList": [
                "catalog"
              ]
            }
          ]
        },
        {
          "type": "text",
          "attr": {}
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "book-bar"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "free"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "免费试读"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "down"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "icon"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "下载app，看全站免费"
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
        "tip"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "最新"
          },
          "classList": [
            "tip-left"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "第二十一卷_第2360章 授业恩师"
          },
          "classList": [
            "tip-mid"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "17小时前"
          },
          "classList": [
            "tip-right"
          ]
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "classList": [
        "content"
      ],
      "events": {
        "change": "activeChage"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {},
          "classList": [
            "con-title"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "简介"
              },
              "classList": function () {return ['con-title-left', this.activeIndex==0?'active':'']}
            },
            {
              "type": "text",
              "attr": {
                "value": "目录"
              },
              "classList": function () {return ['con-title-right', this.activeIndex==1?'active':'']}
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "con-con"
          ],
          "children": [
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "con-con-left"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": "王兵只是个小保安，直到那天他遇到了丧尽天良的师父，从此他的人生轨迹发生了翻天覆地的变化。美女，你信不信只要我亲你一下，就能知道你穿什么样的内裤？什么？你不信？那我只能证明给你看了。"
                      },
                      "classList": [
                        "con-con-nei"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "授权方：酷匠网"
                      },
                      "classList": [
                        "con-con-find"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "con-con-right"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "第一卷_第1章 这里又没别人，你就别装了"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "第一卷_第2章 这里又没别人，你就别装了"
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": "第一卷_第3章 这里又没别人，你就别装了"
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
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/slot1.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/slot1.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "title-bar"
  ],
  "children": [
    {
      "type": "text",
      "attr": {},
      "classList": [
        "top-left"
      ]
    },
    {
      "type": "slot",
      "attr": {}
    },
    {
      "type": "a",
      "attr": {
        "href": "/",
        "value": function () {return this.bookself}
      }
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/Detail/index.ux?uxType=page":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/Detail/index.ux?uxType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    activeIndex: 0,
    bookself: "书架"
  },
  activeChage: function activeChage(evt) {
    this.activeIndex = evt.index;
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

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/slot1.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/slot1.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  prop: ['bookself']
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/slot1.ux?uxType=comp&name=slot1":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/slot1.ux?uxType=comp&name=slot1 ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./slot1.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/modules/slot1.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./slot1.ux?uxType=comp */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/modules/slot1.ux?uxType=comp")

$app_define$('@app-component/slot1', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
})


/***/ }),

/***/ "./src/Content/Detail/index.ux?uxType=page":
/*!*************************************************!*\
  !*** ./src/Content/Detail/index.ux?uxType=page ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!../../modules/slot1.ux?uxType=comp&name=slot1 */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/ux-loader.js?type=import!./src/modules/slot1.ux?uxType=comp&name=slot1")
var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Content/Detail/index.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Content/Detail/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!../../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Content/Detail/index.ux?uxType=page")

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