(function() {
  angular.module('MB')
    .config(function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'templates/pages/home/index.html'
      })
      .when('/about', {
        templateUrl: 'templates/pages/about/index.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
})();

