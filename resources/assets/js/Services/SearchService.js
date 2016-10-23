export default class SearchService {
  constructor($http) {
    this.$http = $http;
  }

  search(area, money, condition) {
    const req = {
      method: 'POST',
      url: '/api/search',
      data: {
        area,
        money,
        condition
      },
      responseType: 'json',
    };

    return this.$http(req);
  }
}
SearchService.$inject = ['$http'];
