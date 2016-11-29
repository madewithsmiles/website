(function() {
  angular.module('MB')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('about');

      $stateProvider
        .state('about', {
          url: '/',
          templateUrl: 'templates/pages/home/index.html'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: 'templates/pages/projects/index.html'
        })
        .state('companies', {
          url: '/companies',
          templateUrl: 'templates/pages/companies/index.html',
          controller: 'CompaniesCtrl',
          controllerAs: 'vm'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'templates/pages/contact/index.html',
          controller: 'ContactCtrl',
          controllerAs: 'vm'
        })
        .state('apply', {
            url: '/apply',
            templateUrl: 'templates/pages/apply/index.html',
            controller: 'ApplyCtrl',
            controllerAs: 'vm'
        });

      // $locationProvider.html5Mode({enabled: true, requireBase: false, rewriteLinks: false});
    });
})();
