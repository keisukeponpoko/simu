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

    this.incomePension = {
      value: 0,
      options: {
        floor: 0,
        ceil: 50,
        step: 1,
        translate: this.formatToPrice
      }
    };

    this.incomeAssist = {
      value: 0,
      options: {
        floor: 0,
        ceil: 100,
        step: 1,
        translate: this.formatToPrice
      }
    };

    this.payTemporary = {
      value: 0,
      options: {
        floor: 0,
        ceil: 3000,
        step: 10,
        translate: this.formatToPrice
      }
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
