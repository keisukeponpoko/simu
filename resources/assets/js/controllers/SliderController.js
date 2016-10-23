export default class SliderController {
  constructor($scope, $timeout) {
    $scope.$on("slideEnded", (event, arg) => {
      this.pushInputMoney();
    });

    this.$scope = $scope;
    this.incomePension = {};
    this.incomeAssist = {};
    this.payTemporary = {};
    this.payTemporaryMoneys = {};

    this.commonOptions = {
      translate: this.formatToPrice,
      showSelectionBar: true,
      customValueToPosition: function(val, minVal, maxVal) {
        val = Math.sqrt(val);
        minVal = Math.sqrt(minVal);
        maxVal = Math.sqrt(maxVal);
        var range = maxVal - minVal;
        return (val - minVal) / range;
      },
      customPositionToValue: function(percent, minVal, maxVal) {
        minVal = Math.sqrt(minVal);
        maxVal = Math.sqrt(maxVal);
        var value = percent * (maxVal - minVal) + minVal;
        return Math.pow(value, 2);
      }
    };

    this.incomePension = {
      value: 0,
      options: angular.extend(
        {
          floor: 0,
          ceil: 100,
          step: 1,
        },
        this.commonOptions
      )
    };

    this.incomeAssist = {
      value: 0,
      options: angular.extend(
        {
          floor: 0,
          ceil: 300,
          step: 1,
        },
        this.commonOptions
      )
    };

    this.payTemporary = {
      value: 0,
      options: angular.extend(
        {
          floor: 0,
          ceil: 10000,
          step: 10,
        },
        this.commonOptions
      )
    };

    this.temporaryMoney = [
      'house',
      'store',
      'stock',
      'retire',
      'insurance',
      'other'
    ];

    for (var name of this.temporaryMoney) {
      this.payTemporaryMoneys[name] = {
        value: this.payTemporary.value,
        options:  this.payTemporary.options
      }
    }
  }

  pushInputMoney() {
    const money = {
      monthly: this.incomePension.value + this.incomeAssist.value,
      temporary: this.payTemporary.value
    }
    this.$scope.$emit('pushInputMoney', money);
  }

  formatToPrice(value) {
    return value + '万円';
  }

  openModal(modalName) {
    $(`#${modalName}`).modal();
  }

  calculatePayTemporary() {
    this.payTemporary.value = 0;
    for (var name of this.temporaryMoney) {
      this.payTemporary.value += this.payTemporaryMoneys[name].value;
    }
    this.pushInputMoney();
  }
}

SliderController.$inject = [
  '$scope',
  '$timeout'
];
