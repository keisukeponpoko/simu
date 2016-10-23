export default class AreaController {
  constructor($scope, PREF) {
    this.$scope = $scope;
    this.prefecture = PREF;
    this.select = {};
    this.select.prefecture = null;
    this.select.city = null;
  }

  pushInputArea() {
    this.$scope.$emit('pushInputArea', this.select);
  }
}
AreaController.$inject = [
  '$scope',
  'PREF'
];
