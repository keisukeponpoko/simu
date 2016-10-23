<div ng-controller="RecommendController as $ctrl">
  <div class="contents" ng-controller="SliderController as $vm">
    <h3>金額</h3>
    @include('content.slider')
  </div>

  <h3>希望条件</h3>
  <div class="contents" ng-controller="AreaController as $area">
    @include('content.area')
  </div>

  <div class="contents" ng-controller="ConditionController as $cond">
    @include('content.condition')
  </div>

  <button class="btn btn-primary btn-block btn-lg"
    ng-click="$ctrl.search()">
    おすすめ施設を検索
  </button>

  <div id="recommend" class="contents">
    <div ng-show="$ctrl.loading">
      <img ng-src="img/loading.gif" class="img-responsive margin-center">
    </div>
    <div ng-show="$ctrl.lists.length && !$ctrl.loading">
      <h2>おすすめ施設</h2>
      <div>
        @include('content.list')
      </div>
    </div>
  </div>

  <div ng-show="$ctrl.lists.length && !$ctrl.loading">
    <button class="btn btn-primary btn-block btn-lg"
      ng-click="$ctrl.goTop()">
      条件を変更する
    </button>
  </div>
</div>
