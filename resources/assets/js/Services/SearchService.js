export default class SearchService {
  constructor($http) {
    this.$http = $http;
  }

  search(area, money) {
    const req = {
      method: 'POST',
      url: '/api/search',
      data: {
        area,
        money
      },
      responseType: 'json',
    };

    return this.$http(req);
  }
}
SearchService.$inject = ['$http'];
