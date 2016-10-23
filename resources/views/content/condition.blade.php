<h4>介護状態</h4>
<div class="align-center contents">
  <div class="btn-group">
    <label class='btn btn-default btn-lg'
      ng-repeat="(key, value) in $cond.conditions"
      ng-class="{radioActive: $cond.conditionCheck(key)}">
      <input type="radio"
        class="radio"
        ng-model="$cond.select.condition"
        value="@{{key}}"
        ng-change="$cond.pushInputCondition()">
      @{{value}}
    </label>
  </div>
</div>

<div class="align-center">
  <button type="button" class="btn btn-success"
    ng-click="$cond.openModal('desireModal')">
      こだわり条件を追加
  </button>
</div>

<div class="modal fade" id="desireModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">こだわり条件</h4>
      </div>
      <div class="modal-body">
        <div class="funkyradio">
            <div class="funkyradio-primary" ng-repeat="(key, value) in $cond.desired">
                <input type="checkbox" checklist-model="$cond.select.desired" checklist-value="key" id="desired_@{{ key }}">
                <label for="desired_@{{ key }}">@{{value}}</label>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success"
          ng-click="$vm.calculatePayTemporary()" data-dismiss="modal">
            決定
        </button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
            閉じる
        </button>
      </div>
    </div>
  </div>
</div>
