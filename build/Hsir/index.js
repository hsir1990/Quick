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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Hsir/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Hsir/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Hsir/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "flexDirection": "row",
    "height": "100px",
    "lineHeight": "100px",
    "alignItems": "center",
    "backgroundColor": "#f7f7f7",
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
    "width": "34px",
    "height": "34px",
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
  ".box .top .top-middle": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "34px",
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
          "v": "top-middle"
        }
      ]
    }
  },
  ".box .top .bookshelf": {
    "fontSize": "28px",
    "color": "#5f5f5f",
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
          "v": "bookshelf"
        }
      ]
    }
  },
  ".box .top .magnifier": {
    "height": "46px",
    "width": "46px",
    "backgroundImage": "/Common/Images/magnifier.png",
    "backgroundSize": "60% 60%",
    "backgroundRepeat": "no-repeat",
    "backgroundPosition": "center center",
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
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
          "v": "magnifier"
        }
      ]
    }
  },
  ".box .bar": {
    "backgroundColor": "#eeeeee",
    "height": "80px",
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
          "v": "bar"
        }
      ]
    }
  },
  ".box .bar tab-bar": {
    "display": "flex",
    "flexDirection": "row",
    "height": "80px",
    "lineHeight": "80px",
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
          "v": "bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "tab-bar"
        }
      ]
    }
  },
  ".box .bar tab-bar text": {
    "display": "flex",
    "height": "80px",
    "width": "100%",
    "flex": 1,
    "textAlign": "center",
    "fontSize": "28px",
    "color": "#5f5f5f",
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
          "v": "bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "tab-bar"
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
  ".box .bar tab-bar .active": {
    "borderBottomWidth": "4px",
    "borderBottomColor": "#f54b41",
    "borderStyle": "solid",
    "color": "#f54b41",
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
          "v": "bar"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "tab-bar"
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
  ".box .swiper-box": {
    "width": "100%",
    "height": "226px",
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
          "v": "swiper-box"
        }
      ]
    }
  },
  ".box .swiper-box stack": {
    "width": "100%",
    "height": "226px",
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
          "v": "swiper-box"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
        }
      ]
    }
  },
  ".box .swiper-box stack image": {
    "width": "100%",
    "height": "226px",
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
          "v": "swiper-box"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "stack"
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
  ".box .ban-list": {
    "display": "flex",
    "flexDirection": "row",
    "height": "150px",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "20px",
    "borderBottomColor": "#f3f3f3",
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
          "v": "ban-list"
        }
      ]
    }
  },
  ".box .ban-list > div": {
    "flex": 1,
    "display": "flex",
    "flexDirection": "column",
    "height": "150px",
    "paddingBottom": "20px",
    "justifyContent": "center",
    "alignItems": "center",
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
          "v": "ban-list"
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
  ".box .ban-list > div .ban-list-top": {
    "marginTop": "15px",
    "width": "52px",
    "height": "52px",
    "backgroundImage": "/Common/Images/login.png",
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
          "v": "ban-list"
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
          "v": "ban-list-top"
        }
      ]
    }
  },
  ".box .ban-list > div .ban-list-top1": {
    "marginTop": "15px",
    "width": "52px",
    "height": "52px",
    "backgroundImage": "/Common/Images/region.png",
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
          "v": "ban-list"
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
          "v": "ban-list-top1"
        }
      ]
    }
  },
  ".box .ban-list > div .ban-list-bot": {
    "paddingTop": "10px",
    "fontSize": "28px",
    "color": "#5f5f5f",
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
          "v": "ban-list"
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
          "v": "ban-list-bot"
        }
      ]
    }
  },
  ".box .content-tip": {
    "height": "76px",
    "backgroundColor": "#ffffff",
    "borderBottomWidth": "2px",
    "borderBottomColor": "#dedede",
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
          "v": "content-tip"
        }
      ]
    }
  },
  ".box .content-tip text": {
    "fontSize": "32px",
    "color": "#5f5f5f",
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
          "v": "content-tip"
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
  ".box .recommend": {
    "height": "100px",
    "display": "flex",
    "flexDirection": "row",
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
          "v": "recommend"
        }
      ]
    }
  },
  ".box .recommend a": {
    "color": "#333333",
    "fontSize": "28px",
    "lineHeight": "100px",
    "textAlign": "center",
    "paddingRight": "30px",
    "backgroundImage": "/Common/Images/arrow.png",
    "backgroundSize": "10px 20px",
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
          "v": "recommend"
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
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Hsir/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Hsir/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
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
            "src": "../Common/Images/top-icon.png"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "熊猫看书"
          },
          "classList": [
            "top-middle"
          ]
        },
        {
          "type": "a",
          "attr": {
            "href": "Content/List?bookid='110'",
            "value": "书架"
          },
          "classList": [
            "bookshelf"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "magnifier"
          ]
        }
      ]
    },
    {
      "type": "tabs",
      "attr": {},
      "classList": [
        "bar"
      ],
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "fixed"
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "首页"
              },
              "classList": [
                "active"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "排行"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "分类"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "男生"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "女生"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "swiper",
      "attr": {
        "autoplay": "true"
      },
      "classList": [
        "swiper-box"
      ],
      "children": [
        {
          "type": "stack",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "../Common/Images/ban1.jpg"
              }
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "../Common/Images/ban2.jpg"
              }
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "../Common/Images/ban2.jpg"
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
        "ban-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "events": {
            "click": "routerLogin"
          },
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "ban-list-top"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "登录"
              },
              "classList": [
                "ban-list-bot"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "events": {
            "click": "routerRegister"
          },
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "ban-list-top1"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "注册"
              },
              "classList": [
                "ban-list-bot"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "ban-list-top"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "登录"
              },
              "classList": [
                "ban-list-bot"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {},
              "classList": [
                "ban-list-top1"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": "注册"
              },
              "classList": [
                "ban-list-bot"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-tip"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "重磅推荐"
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
                    "src": "../Common/Images/list1.jpg"
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
                          "events": {
                            "click": "routerDetail"
                          },
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
                    "src": "../Common/Images/list2.jpg"
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
                          "events": {
                            "click": "routerDetail"
                          },
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
                    "src": "../Common/Images/list3.jpg"
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
                          "events": {
                            "click": "routerDetail"
                          },
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
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "recommend"
      ],
      "children": [
        {
          "type": "a",
          "attr": {
            "href": "Content/List",
            "value": "更多重磅推荐"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Hsir/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Hsir/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  routerDetail: function routerDetail() {
    _system.default.push({
      uri: '/Content/Detail'
    });
  },
  routerLogin: function routerLogin() {
    _system.default.push({
      uri: '/Login/Login'
    });
  },
  routerRegister: function routerRegister() {
    _system.default.push({
      uri: '/Login/Register'
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

/***/ "./src/Hsir/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Hsir/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/template-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=template!./src/Hsir/index.ux?uxType=page")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/json-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=style!./src/Hsir/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=f:/work/zongheng/Quick/node_modules/hap-toolkit/tools/packager/webpack/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!../../node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/tools/packager/webpack/loader/script-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=f:\\work\\zongheng\\Quick\\node_modules\\hap-toolkit\\tools\\packager\\webpack\\loader\\jsx-loader.js&comments=false!./node_modules/hap-toolkit/tools/packager/webpack/loader/access-loader.js!./node_modules/hap-toolkit/tools/packager/webpack/loader/fragment-loader.js?index=0&type=script!./src/Hsir/index.ux?uxType=page")

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