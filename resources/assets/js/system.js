// Controllers
// コントローラー用のclassオブジェクトをimportする。
import RecommendController from './controllers/RecommendController';
import SliderController from './controllers/SliderController';
import AreaController from './controllers/AreaController';

// Services
// サービス用のclassオブジェクトをimportする。
import SearchService from './services/SearchService';

// Values
// バリュー用の変数、オブジェクトをimportする。
import {
  PREF,
} from './definitions/area';

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

(() => {
  // appモジュールを定義する
  const module = angular.module('app', ['rzModule']);

  // Contorller
  // モジュールにコントローラーを定義する。
  module.controller('RecommendController', RecommendController);
  module.controller('SliderController', SliderController);
  module.controller('AreaController', AreaController);

  // Value
  // モジュールにPREFバリューを定義する。
  module.value('PREF', PREF);

  // Service
  //モジュールにサービスを定義する。
  module.service('SearchService', SearchService);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);
})();
