<div>
  <h4>都道府県</h4>
  <select class="form-control" ng-model="$area.select.prefecture" ng-change="$area.pushInputArea()">
      <option value="">[都道府県]</option>
      <option ng-repeat="(key, value) in $area.prefecture" ng-value="key">
        @{{value.name}}
      </option>
  </select>

  <div ng-if="$area.select.prefecture">
    <h4>市区町村</h4>
    <select class="form-control" ng-model="$area.select.city" ng-change="$area.pushInputArea()">
        <option value="">[市区町村]</option>
        <option ng-repeat="(key, value) in $area.prefecture[$area.select.prefecture].city" ng-value="key">
          @{{value}}
        </option>
    </select>
  </div>
</div>
