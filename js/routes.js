(function() {
  angular.module('MB')
    .config(function($stateProvider, $urlRouterProvider, ngMetaProvider) {
      $urlRouterProvider.otherwise('/');

      ngMetaProvider.setDefaultTitle('Launchpad | Solving Problems with Intelligent Software');
      ngMetaProvider.setDefaultTag('id', '1211816982245928');
      ngMetaProvider.setDefaultTag('url', 'http://callaunchpad.org');
      ngMetaProvider.setDefaultTag('type', 'website');
      ngMetaProvider.setDefaultTag('description', 'We are a group of UC Berkeley students that use machine learning, AI, and data science techniques to solve problems by building intelligent software.');
      ngMetaProvider.setDefaultTag('image', 'http://callaunchpad.org/img/og_image.png');

      $stateProvider
        .state('about', {
          url: '/',
          templateUrl: 'templates/pages/home/index.html',
          controller: 'HomeCtrl',
          controllerAs: 'vm',
          data: {
            meta: {
              id: "1211816982245928",
              url: "http://callaunchpad.org",
              type: "website",
              title: "Launchpad | Solving Problems with Intelligent Software",
              description: "We are a group of UC Berkeley students that use machine learning, AI, and data science techniques to solve problems by building intelligent software.",
              image: "http://callaunchpad.org/img/og_image.png"
            }
          }
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
          url: '/{datePath}/{titlePath}',
          controller: 'BlogCtrl',
          controllerAs: 'vm',
          templateUrl: function (params) {
            return 'templates/pages/blog/posts/' + params.datePath + "/" + params.titlePath + '.html';
          }
        });

      // $locationProvider.html5Mode({enabled: true, requireBase: false, rewriteLinks: false});
    });
})();
