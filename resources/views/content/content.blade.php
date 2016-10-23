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

  <div id="recommend" class="contents" ng-if="$ctrl.lists.length">
    <h2>おすすめ施設</h2>
    <p ng-show="$ctrl.loading">検索中...</p>
    <div ng-if="!$ctrl.loading">
      @include('content.list')
    </div>
  </div>
</div>
