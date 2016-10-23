export default class RecommendController {
  constructor($scope, SearchService) {
    this.SearchService = SearchService;
    this.loading = false;

    this.area = {
      prefecture: null,
      city: null
    };
    this.money = {
      monthly: 0,
      temporary: 0
    };

    $scope.$on('pushInputArea', (event, arg) => {
      this.area = arg;
    });

    $scope.$on('pushInputMoney', (event, arg) => {
      this.money = arg;
    });
  }

  search() {
    this.loading = true;
    this.SearchService.search(this.area, this.money).then(
      (response) => {
        this.lists = response.data;
        this.loading = false;
      }
    );
  }
}

RecommendController.$inject = [
  '$scope',
  'SearchService'
];
