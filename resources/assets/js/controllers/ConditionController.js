export default class ConditionController {
  constructor($scope, CONDITION, DESIRED) {
    this.$scope = $scope;
    this.conditions = CONDITION;
    this.desired = DESIRED;
    this.select = {
      condition: null,
      desired: []
    }
  }

  pushInputCondition() {
    this.$scope.$emit('pushInputCondition', this.select);
  }

  conditionCheck(key) {
    return this.select.condition === key;
  }

  openModal(modalName) {
    $(`#${modalName}`).modal();
  }
}
ConditionController.$inject = [
  '$scope',
  'CONDITION',
  'DESIRED'
];
