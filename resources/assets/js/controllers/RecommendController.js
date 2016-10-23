export default class RecommendController {
  constructor($scope, SearchService) {
    this.area = {};
    this.money = {};

    $scope.$on('pushInputArea', (event, arg) => {
      this.area = arg;
      console.log(this.area);
    });

    $scope.$on('pushInputMoney', (event, arg) => {
      this.money = arg;
      console.log(this.money);
    });
  }

  search() {
    this.MemberService.search(this.area, this.money).then(
      (response) => {
        console.log(response);
      }
    );
  }
}
RecommendController.$inject = [
  '$scope',
  'SearchService'
];
