<div ng-controller="RecommendController as $ctrl">
  <div class="contents">
    <h2>おすすめ施設</h2>
    <p ng-if="!$ctrl.lists && !$ctrl.loading">金額と希望エリアを入力後、検索してください</p>
    <p ng-show="$ctrl.loading">検索中...</p>
    <div ng-if="$ctrl.lists && !$ctrl.loading">
      @include('content.list')
    </div>
  </div>

  <div class="contents" ng-controller="SliderController as $vm">
    <h2>金額</h2>
    @include('content.slider')
  </div>

  <div class="contents" ng-controller="AreaController as $area">
    <h2>希望エリア</h2>
    @include('content.area')
  </div>

  <button class="btn btn-primary btn-block"
    ng-click="$ctrl.search()">
    おすすめ施設を検索
  </button>
</div>
