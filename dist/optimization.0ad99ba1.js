// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin * {\nmargin: 0;\npadding: 0;\nbox-sizing: border-box;\n}\n.skin *::after,\n.skin *::before {\nbox-sizing: border-box;\n}\n.skin {\nbackground: #ffe600;\nmin-height:50vh;\nposition: relative;\n}\n.nose {\nborder: 10px solid black;\nborder-color: black transparent transparent transparent;\nwidth: 0;\nheight: 0;\nposition: relative;\nleft: 50%;\nmargin-left: -10px;\ntop: 150px;\nz-index: 99;\n}\n@keyframes wave {\n0% {\ntransform: rotate(0deg);\n}\n33% {\ntransform: rotate(5deg);\n}\n66% {\ntransform: rotate(-5deg);\n}\n100% {\ntransform: rotate(0deg);\n}\n}\n.nose:hover {\ntransform-origin: center bottom;\nanimation: wave 0.2s infinite linear;\n}\n.yuan {\nposition: absolute;\nwidth: 20px;\nheight: 6px;\nborder: 1px solid black;\nbackground: black;\ntop: -16px;\nleft: -10px;\nborder-radius: 8px 8px 0 0;\n}\n/* \u773C\u775B */\n.eye {\nborder: 2px solid #000;\nbackground-color: #2e2e2e;\nwidth: 64px;\nheight: 64px;\nposition: absolute;\nleft: 50%;\ntop: 100px;\nmargin-left: -32px;\nborder-radius: 50%;\n}\n.eye.left {\ntransform: translateX(-100px);\n}\n.eye.right {\ntransform: translateX(100px);\n}\n.eye::before {\ndisplay: block;\ncontent: \"\";\nborder: 3px solid #000;\nwidth: 30px;\nheight: 30px;\nbackground-color: #fff;\nborder-radius: 50%;\nposition: relative;\nleft: 5px;\ntop: 2px;\n}\n.mouth {\nwidth: 200px;\nheight: 200px;\nposition: absolute;\nleft: 50%;\ntop: 180px;\nmargin-left: -100px;\n}\n.mouth .up {\nposition: relative;\ntop: -20px;\nz-index: 1;\n}\n.mouth .up .lip {\nborder: 4px solid #000;\nheight: 30px;\nwidth: 80px;\nposition: relative;\nposition: absolute;\nleft: 50%;\nbackground: #ffe600;\n}\n.mouth .up .lip.left {\nborder-radius: 0 0 0 50px;\nborder-top-color: transparent;\nborder-right-color: transparent;\n/* \u65B9\u6848\u4E8C */\nborder-top: none;\nborder-right: none;\ntransform: rotate(-15deg) translateX(-53px);\nmargin-left: -30px;\n/* \u65B9\u6848\u4E8C */\nborder-bottom-left-radius: 45px 30px;\n}\n/* .mouth .up .lip.left::after {\ncontent: \"\";\ndisplay: block;\nwidth: 7px;\nheight: 30px;\nposition: absolute;  \nright: -6px;\nbottom: 0;\nbackground-color: #ffe600;\n} */\n\n.mouth .up .lip.right {\nborder-radius: 0 0 50px 0;\nborder-top-color: transparent;\nborder-left-color: transparent;\n/* \u65B9\u6848\u4E8C */\nborder-top: none;\nborder-left: none;\ntransform: rotate(15deg) translateX(53px);\nmargin-left: -50px;\n/* \u65B9\u6848\u4E8C */\nborder-bottom-right-radius: 45px 30px;\n}\n/* .mouth .up .lip.right::after {\ncontent: \"\";\ndisplay: block;\nwidth: 7px;\nheight: 30px;\nposition: absolute;\nleft: -6px;\nbottom: 0;\nbackground-color: #ffe600;\n} */\n.mouth .down {\nheight: 160px;\nposition: absolute;\ntop: 8px;\nwidth: 100%;\noverflow: hidden;\n}\n.mouth .down .yuan1 {\nborder: 3px solid #000;\nwidth: 140px;\nheight: 1000px;\nposition: absolute;\nbottom: 0;\nleft: 50%;\ntransform: translateX(-50%);\nborder-radius: 75px/300px;\nbackground-color: #9b000a;\noverflow: hidden;\n}\n.mouth .down .yuan1 > .yuan2 {\nbackground-color: #ff485f;\nwidth: 200px;\nheight: 300px;\nposition: absolute;\nbottom: -170px;\nleft: 50%;\ntransform: translateX(-50%);\nborder-radius: 100px;\n}\n.face {\nborder: 3px solid #000;\nwidth: 88px;\nheight: 88px;\nposition: absolute;\ntop: 200px;\nleft: 50%;\nmargin-left: -44px;\nz-index: 4;\nbackground-color: #ff0000;\nborder-radius: 50%;\n}\n.face.left {\ntransform: translateX(-180px);\n}\n.face.right {\ntransform: translateX(180px);\n}\n\n.face > img {\nposition: absolute;\ntop: 50%;\nleft: 50%;\n}\n.face > .shock-left {\ntransform: rotateY(180deg);\ntransform-origin: 0 0;\n}";
var _default = string;
exports.default = _default;
},{}],"vpqV":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('这是text');
//声明对象
var player = {
  n: 1,
  times: 100,
  id: undefined,
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo2.innerText = _css.default.substr(0, player.n);
    player.ui.demo.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n++;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    } //添加样式


    player.ui.demo.innerHTML = _css.default.substr(0, player.n); //文本显示

    player.ui.demo2.innerText = _css.default.substr(0, player.n); //高度等于文本的高度

    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.times);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.times = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.times = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.times = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["vpqV"], null)
//# sourceMappingURL=optimization.0ad99ba1.js.map