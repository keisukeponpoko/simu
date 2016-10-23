(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AreaController = function () {
  function AreaController($scope, PREF) {
    _classCallCheck(this, AreaController);

    this.$scope = $scope;
    this.prefecture = PREF;
    this.select = {};
    this.select.prefecture = null;
    this.select.city = null;
  }

  _createClass(AreaController, [{
    key: 'pushInputArea',
    value: function pushInputArea() {
      this.$scope.$emit('pushInputArea', this.select);
    }
  }]);

  return AreaController;
}();

exports.default = AreaController;

AreaController.$inject = ['$scope', 'PREF'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecommendController = function () {
  function RecommendController($scope, SearchService) {
    var _this = this;

    _classCallCheck(this, RecommendController);

    this.area = {};
    this.money = {};

    $scope.$on('pushInputArea', function (event, arg) {
      _this.area = arg;
      console.log(_this.area);
    });

    $scope.$on('pushInputMoney', function (event, arg) {
      _this.money = arg;
      console.log(_this.money);
    });
  }

  _createClass(RecommendController, [{
    key: 'search',
    value: function search() {
      this.MemberService.search(this.area, this.money).then(function (response) {
        console.log(response);
      });
    }
  }]);

  return RecommendController;
}();

exports.default = RecommendController;

RecommendController.$inject = ['$scope', 'SearchService'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderController = function () {
  function SliderController($scope, $timeout) {
    var _this = this;

    _classCallCheck(this, SliderController);

    $scope.$on("slideEnded", function (event, arg) {
      _this.pushInputMoney();
    });

    this.$scope = $scope;
    this.incomePension = {};
    this.incomeAssist = {};
    this.payTemporary = {};
    this.payTemporaryMoneys = {};

    this.incomePension = {
      value: 0,
      options: {
        floor: 0,
        ceil: 50,
        step: 1,
        translate: this.formatToPrice
      }
    };

    this.incomeAssist = {
      value: 0,
      options: {
        floor: 0,
        ceil: 100,
        step: 1,
        translate: this.formatToPrice
      }
    };

    this.payTemporary = {
      value: 0,
      options: {
        floor: 0,
        ceil: 3000,
        step: 10,
        translate: this.formatToPrice
      }
    };

    this.temporaryMoney = ['house', 'store', 'stock', 'retire', 'insurance', 'other'];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.temporaryMoney[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var name = _step.value;

        this.payTemporaryMoneys[name] = {
          value: this.payTemporary.value,
          options: this.payTemporary.options
        };
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(SliderController, [{
    key: 'pushInputMoney',
    value: function pushInputMoney() {
      var money = {
        monthly: this.incomePension.value + this.incomeAssist.value,
        temporary: this.payTemporary.value
      };
      this.$scope.$emit('pushInputMoney', money);
    }
  }, {
    key: 'formatToPrice',
    value: function formatToPrice(value) {
      return value + '万円';
    }
  }, {
    key: 'openModal',
    value: function openModal(modalName) {
      $('#' + modalName).modal();
    }
  }, {
    key: 'calculatePayTemporary',
    value: function calculatePayTemporary() {
      this.payTemporary.value = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.temporaryMoney[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var name = _step2.value;

          this.payTemporary.value += this.payTemporaryMoneys[name].value;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.pushInputMoney();
    }
  }]);

  return SliderController;
}();

exports.default = SliderController;

SliderController.$inject = ['$scope', '$timeout'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var PREF = exports.PREF = {
  11: {
    'name': '千葉県',
    'city': {
      1: '舞浜市',
      2: '船橋市',
      3: '浦安市'
    }
  },
  12: {
    'name': '埼玉県',
    'city': {
      1: '富士見市',
      2: '川越市',
      3: '大宮区'
    }
  },
  13: {
    'name': '東京都',
    'city': {
      1: '西東京市',
      2: '小平市',
      3: '国分寺市'
    }
  },
  14: {
    'name': '神奈川県',
    'city': {
      1: '藤沢市',
      2: '厚木市',
      3: '鎌倉市'
    }
  }
};

},{}],5:[function(require,module,exports){
'use strict';

var _RecommendController = require('./controllers/RecommendController');

var _RecommendController2 = _interopRequireDefault(_RecommendController);

var _SliderController = require('./controllers/SliderController');

var _SliderController2 = _interopRequireDefault(_SliderController);

var _AreaController = require('./controllers/AreaController');

var _AreaController2 = _interopRequireDefault(_AreaController);

var _area = require('./definitions/area');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

// Services
// サービス用のclassオブジェクトをimportする。
//import SearchQueryService from './services/SearchQueryService';


// Controllers
// コントローラー用のclassオブジェクトをimportする。
(function () {
  // appモジュールを定義する
  var app = angular.module('app', ['rzModule']);

  // Contorller
  // モジュールにコントローラーを定義する。
  app.controller('RecommendController', _RecommendController2.default);
  app.controller('SliderController', _SliderController2.default);
  app.controller('AreaController', _AreaController2.default);

  // Value
  // モジュールにPREFバリューを定義する。
  app.value('PREF', _area.PREF);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);


  // Service
  // モジュールにSearchQueryServiceサービスを定義する。以下同
  //module.service('SearchQueryService', SearchQueryService);
})();

// Values
// バリュー用の変数、オブジェクトをimportする。

},{"./controllers/AreaController":1,"./controllers/RecommendController":2,"./controllers/SliderController":3,"./definitions/area":4}]},{},[5]);

//# sourceMappingURL=system.js.map
