(function() {
  angular.module('MB')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('about', {
          url: '/',
          templateUrl: 'templates/pages/home/index.html',
          controller: 'HomeCtrl',
          controllerAs: 'vm'
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
        })
        .state('blog', {
          url: '/blog',
          templateUrl: 'templates/pages/blog/index.html',
          controller: 'BlogCtrl',
          controllerAs: 'vm'
        })
        .state('post', {
          url: '/{postId}',
          templateUrl: function (params) {
            // console.log($stateParams.postId);
            console.log(atob(params.postId));
            // console.log(URIService.decode($stateParams.postId));
            return 'templates/pages/blog/posts/' + atob(params.postId) + '.html';
          }
        });

      // $locationProvider.html5Mode({enabled: true, requireBase: false, rewriteLinks: false});
    });
})();
