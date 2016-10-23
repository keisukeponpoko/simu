// Controllers
// コントローラー用のclassオブジェクトをimportする。
import RecommendController from './controllers/RecommendController';
import SliderController from './controllers/SliderController';
import AreaController from './controllers/AreaController';
import ConditionController from './controllers/ConditionController';

// Services
// サービス用のclassオブジェクトをimportする。
import SearchService from './services/SearchService';

// Values
// バリュー用の変数、オブジェクトをimportする。
import {PREF} from './definitions/area';
import {CONDITION, DESIRED} from './definitions/condition';

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

(() => {
  // appモジュールを定義する
  const module = angular.module('app', ['rzModule', 'checklist-model']);

  // Contorller
  // モジュールにコントローラーを定義する。
  module.controller('RecommendController', RecommendController);
  module.controller('SliderController', SliderController);
  module.controller('AreaController', AreaController);
  module.controller('ConditionController', ConditionController);

  // Value
  // モジュールにPREFバリューを定義する。
  module.value('PREF', PREF);
  module.value('CONDITION', CONDITION);
  module.value('DESIRED', DESIRED);

  // Service
  //モジュールにサービスを定義する。
  module.service('SearchService', SearchService);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);
})();
