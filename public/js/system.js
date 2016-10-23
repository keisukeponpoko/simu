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

var ConditionController = function () {
  function ConditionController($scope, CONDITION, DESIRED) {
    _classCallCheck(this, ConditionController);

    this.$scope = $scope;
    this.conditions = CONDITION;
    this.desired = DESIRED;
    this.select = {
      condition: null,
      desired: []
    };
  }

  _createClass(ConditionController, [{
    key: 'pushInputCondition',
    value: function pushInputCondition() {
      this.$scope.$emit('pushInputCondition', this.select);
    }
  }, {
    key: 'conditionCheck',
    value: function conditionCheck(key) {
      return this.select.condition === key;
    }
  }, {
    key: 'openModal',
    value: function openModal(modalName) {
      $('#' + modalName).modal();
    }
  }]);

  return ConditionController;
}();

exports.default = ConditionController;

ConditionController.$inject = ['$scope', 'CONDITION', 'DESIRED'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecommendController = function () {
  function RecommendController($scope, $location, $anchorScroll, SearchService) {
    var _this = this;

    _classCallCheck(this, RecommendController);

    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
    this.SearchService = SearchService;
    this.loading = false;
    this.lists = {};
    this.area = {
      prefecture: null,
      city: null
    };
    this.money = {
      monthly: 0,
      temporary: 0
    };
    this.cond = {};

    $scope.$on('pushInputArea', function (event, arg) {
      _this.area = arg;
    });

    $scope.$on('pushInputMoney', function (event, arg) {
      _this.money = arg;
    });

    $scope.$on('pushInputCondition', function (event, arg) {
      _this.cond = arg;
    });
  }

  _createClass(RecommendController, [{
    key: 'search',
    value: function search() {
      var _this2 = this;

      this.loading = true;
      this.lists = {};
      this.SearchService.search(this.area, this.money, this.cond).then(function (response) {
        _this2.lists = response.data;
        _this2.loading = false;
        // set the location.hash to the id of
        // the element you wish to scroll to.
        _this2.$location.hash('recommend');

        // call $anchorScroll()
        _this2.$anchorScroll();
      });
    }
  }]);

  return RecommendController;
}();

exports.default = RecommendController;


RecommendController.$inject = ['$scope', '$location', '$anchorScroll', 'SearchService'];

},{}],4:[function(require,module,exports){
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
        translate: this.formatToPrice,
        showSelectionBar: true
      }
    };

    this.incomeAssist = {
      value: 0,
      options: {
        floor: 0,
        ceil: 100,
        step: 1,
        translate: this.formatToPrice,
        showSelectionBar: true
      }
    };

    this.payTemporary = {
      value: 0,
      options: {
        floor: 0,
        ceil: 3000,
        step: 10,
        translate: this.formatToPrice,
        showSelectionBar: true
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CONDITION = exports.CONDITION = {
  'self': '自立',
  'support': '要支援',
  'nurse': '要介護',
  'dementia': '認知症'
};

var DESIRED = exports.DESIRED = ['海が見える', '夫婦部屋あり', '人工透析可能', 'ペットと暮らせる', '温泉あり', '駅から近い'];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchService = function () {
  function SearchService($http) {
    _classCallCheck(this, SearchService);

    this.$http = $http;
  }

  _createClass(SearchService, [{
    key: 'search',
    value: function search(area, money, condition) {
      var req = {
        method: 'POST',
        url: '/api/search',
        data: {
          area: area,
          money: money,
          condition: condition
        },
        responseType: 'json'
      };

      return this.$http(req);
    }
  }]);

  return SearchService;
}();

exports.default = SearchService;

SearchService.$inject = ['$http'];

},{}],8:[function(require,module,exports){
'use strict';

var _RecommendController = require('./controllers/RecommendController');

var _RecommendController2 = _interopRequireDefault(_RecommendController);

var _SliderController = require('./controllers/SliderController');

var _SliderController2 = _interopRequireDefault(_SliderController);

var _AreaController = require('./controllers/AreaController');

var _AreaController2 = _interopRequireDefault(_AreaController);

var _ConditionController = require('./controllers/ConditionController');

var _ConditionController2 = _interopRequireDefault(_ConditionController);

var _SearchService = require('./services/SearchService');

var _SearchService2 = _interopRequireDefault(_SearchService);

var _area = require('./definitions/area');

var _condition = require('./definitions/condition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

// Values
// バリュー用の変数、オブジェクトをimportする。
(function () {
  // appモジュールを定義する
  var module = angular.module('app', ['rzModule', 'checklist-model']);

  // Contorller
  // モジュールにコントローラーを定義する。
  module.controller('RecommendController', _RecommendController2.default);
  module.controller('SliderController', _SliderController2.default);
  module.controller('AreaController', _AreaController2.default);
  module.controller('ConditionController', _ConditionController2.default);

  // Value
  // モジュールにPREFバリューを定義する。
  module.value('PREF', _area.PREF);
  module.value('CONDITION', _condition.CONDITION);
  module.value('DESIRED', _condition.DESIRED);

  // Service
  //モジュールにサービスを定義する。
  module.service('SearchService', _SearchService2.default);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);
})();

// Services
// サービス用のclassオブジェクトをimportする。
// Controllers
// コントローラー用のclassオブジェクトをimportする。

},{"./controllers/AreaController":1,"./controllers/ConditionController":2,"./controllers/RecommendController":3,"./controllers/SliderController":4,"./definitions/area":5,"./definitions/condition":6,"./services/SearchService":7}]},{},[8]);

//# sourceMappingURL=system.js.map
