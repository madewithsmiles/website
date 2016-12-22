(function() {
  angular
  .module('MB')
  .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    var vm = this;

    var path = '/img/team/';
    vm.team = [
      {
        name: 'Felix Su',
        position: 'Founder',
        website: 'http://felixsu.com',
        tagline: 'Future Amazon Intern',
        image: path + 'felixsu.png'
      },
      {
        name: 'Peter Lee',
        position: 'Founder',
        website: 'http://peterlee.tech',
        tagline: 'Future Microsoft Intern',
        image: path + 'peterlee.png'
      },
      {
        name: 'Katie Li',
        position: 'External Vice President',
        website: 'http://linkedin.com/in/katienli',
        tagline: 'Project Manager at DiversaTech',
        image: path + 'katieli.jpg'
      },
      {
        name: 'Michelle Huang',
        position: 'Internal Vice President',
        website: 'http://linkedin.com/in/michellerhuang',
        tagline: 'Business Analyst at CMG Consulting',
        image: path + 'michellehuang.jpg'
      }
    ];
  }
})();
