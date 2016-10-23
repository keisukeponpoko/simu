// Controllers
// コントローラー用のclassオブジェクトをimportする。
import RecommendController from './controllers/RecommendController';
import SliderController from './controllers/SliderController';
import AreaController from './controllers/AreaController';

// Values
// バリュー用の変数、オブジェクトをimportする。
import {
  PREF,
} from './definitions/area';

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

// Services
// サービス用のclassオブジェクトをimportする。
//import SearchQueryService from './services/SearchQueryService';


(() => {
  // appモジュールを定義する
  const app = angular.module('app', ['rzModule']);

  // Contorller
  // モジュールにコントローラーを定義する。
  app.controller('RecommendController', RecommendController);
  app.controller('SliderController', SliderController);
  app.controller('AreaController', AreaController);

  // Value
  // モジュールにPREFバリューを定義する。
  app.value('PREF', PREF);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);


  // Service
  // モジュールにSearchQueryServiceサービスを定義する。以下同
  //module.service('SearchQueryService', SearchQueryService);
})();
