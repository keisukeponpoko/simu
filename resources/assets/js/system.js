// Controllers
// コントローラー用のclassオブジェクトをimportする。
//import AppController from './controllers/AppController';

// directives
// ディレクトリ用のオブジェクトをimportする。
//import ChoParentScrollDisable from './directives/cho_parent_scroll_disable/cho_parent_scroll_disable.js';

// Services
// サービス用のclassオブジェクトをimportする。
//import SearchQueryService from './services/SearchQueryService';

// Values
// バリュー用の変数、オブジェクトをimportする。
/*import {
  LOG_TAB,
} from './definitions/UI';
*/

(() => {
  // appモジュールを定義する
  const module = angular.module('app', ['onsen']);
  module.controller('AppController', function($scope) { });

  // Contorller
  // App
  // モジュールにAppControllerコントローラーを定義する。以下同
  //module.controller('AppController', AppController);

  // Directive
  // モジュールにchoParentScrollDisableディレクティブを定義する
  //module.directive('choParentScrollDisable', ChoParentScrollDisable);

  // Value
  // モジュールにPROFILE_TABバリューを定義する。以下同
  //module.value('PROFILE_TAB', PROFILE_TAB);

  // Service
  // モジュールにSearchQueryServiceサービスを定義する。以下同
  //module.service('SearchQueryService', SearchQueryService);
})();
