export default class RecommendController {
  constructor($scope, $location, $anchorScroll, SearchService) {
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
    this.SearchService = SearchService;
    this.loading = false;
    this.lists = {};
    this.area = {
      prefecture: null,
      city: null
    };
    this.money = {
      monthly: 0,
      temporary: 0
    };
    this.cond = {};

    $scope.$on('pushInputArea', (event, arg) => {
      this.area = arg;
    });

    $scope.$on('pushInputMoney', (event, arg) => {
      this.money = arg;
    });

    $scope.$on('pushInputCondition', (event, arg) => {
      this.cond = arg;
    });
  }

  search() {
    this.loading = true;
    this.lists = {};
    this.SearchService.search(this.area, this.money, this.cond).then(
      (response) => {
        this.lists = response.data;
        this.loading = false;
        // set the location.hash to the id of
        // the element you wish to scroll to.
        this.$location.hash('recommend');

        // call $anchorScroll()
        this.$anchorScroll();
      }
    );
  }
}

RecommendController.$inject = [
  '$scope',
  '$location',
  '$anchorScroll',
  'SearchService'
];
