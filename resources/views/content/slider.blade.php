<div>
  <h4>
    月々の年金額 :
    <input type="text" class="moneyForm" ng-model="$vm.incomePension.value">
    万
  </h4>
  <rzslider rz-slider-model="$vm.incomePension.value"
            rz-slider-options="$vm.incomePension.options">
  </rzslider>
</div>

<div>
  <h4>
    月々の支援額 :
    <input type="text" class="moneyForm" ng-model="$vm.incomeAssist.value">
    万
  </h4>
  <rzslider rz-slider-model="$vm.incomeAssist.value"
            rz-slider-options="$vm.incomeAssist.options">
  </rzslider>
</div>

<div>
  <h4>
    入居時に払える額 :
    <input type="text" class="moneyForm" ng-model="$vm.payTemporary.value">
    万
    <button class="btn btn-success"
            ng-click="$vm.openModal('payTemporaryModal')">
      <i class="fa ion-calculator"></i>
    </button>
  </h4>
  <rzslider rz-slider-model="$vm.payTemporary.value"
            rz-slider-options="$vm.payTemporary.options">
  </rzslider>
</div>

<div class="modal fade" id="payTemporaryModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">入居時に支払える額</h4>
      </div>
      <div class="modal-body">
        <label class="control-label">
          自宅などの売却金額: @{{$vm.payTemporaryMoneys['house'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['house'].value"
          rz-slider-options="$vm.payTemporaryMoneys['house'].options">
        </rzslider>

        <label class="control-label">
          預貯金: @{{$vm.payTemporaryMoneys['store'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['store'].value"
          rz-slider-options="$vm.payTemporaryMoneys['store'].options">
        </rzslider>

        <label class="control-label">
          有価証券の売却額: @{{$vm.payTemporaryMoneys['stock'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['stock'].value"
          rz-slider-options="$vm.payTemporaryMoneys['stock'].options">
        </rzslider>

        <label class="control-label">
          退職金: @{{$vm.payTemporaryMoneys['retire'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['retire'].value"
          rz-slider-options="$vm.payTemporaryMoneys['retire'].options">
        </rzslider>

        <label class="control-label">
          生命保険等: @{{$vm.payTemporaryMoneys['insurance'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['insurance'].value"
          rz-slider-options="$vm.payTemporaryMoneys['insurance'].options">
        </rzslider>

        <label class="control-label">
          その他: @{{$vm.payTemporaryMoneys['other'].value}}万円
        </label>
        <rzslider
          rz-slider-model="$vm.payTemporaryMoneys['other'].value"
          rz-slider-options="$vm.payTemporaryMoneys['other'].options">
        </rzslider>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success"
          ng-click="$vm.calculatePayTemporary()" data-dismiss="modal">
            計算
        </button>
        <button type="button" class="btn btn-default" data-dismiss="modal">
            閉じる
        </button>
      </div>
    </div>
  </div>
</div>
