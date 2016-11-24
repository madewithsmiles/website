(function() {
  angular.module('MB')
    .config(function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'templates/pages/home/index.html'
      })
      .when('/projects', {
        templateUrl: 'templates/pages/projects/index.html'
      })
      .when('/companies', {
        templateUrl: 'templates/pages/companies/index.html'
      })
      .when('/contact', {
        templateUrl: 'templates/pages/contact/index.html'
      })
      .when('/apply', {
        templateUrl: 'templates/pages/apply/index.html',
        controller: 'ApplyCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
})();
