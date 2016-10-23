<div class="container">
  <div class="row" ng-repeat="val in $ctrl.lists">
    <h3>@{{val[0]}}</h3>
    <div class="col-xs-5">
      <img ng-src="img/@{{val[6]}}.jpg" class="img-responsive">
    </div>
    <div class="col-xs-7">
      @{{val[1]}}<br>
      @{{val[2]}}<br>
      初期費用 : @{{val[3]}}<br>
      月額費用 : @{{val[4]}}<br>
      @{{val[5]}}<br>
    </div>
  </div>
</div>
