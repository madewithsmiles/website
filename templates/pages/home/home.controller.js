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
        header: 'Amazon SDE Intern',
        subheader: 'Summer 2017',
        image: path + 'felixsu.png'
      },
      {
        name: 'Peter Lee',
        position: 'Founder',
        website: 'http://peterlee.tech',
        header: 'Microsoft SDE Intern',
        subheader: 'Summer 2017',
        image: path + 'peterlee.png'
      },
      {
        name: 'Katie Li',
        position: 'External Vice President',
        website: 'http://linkedin.com/in/katienli',
        header: 'Project Manager at',
        subheader: 'DiversaTech',
        image: path + 'katieli.jpg'
      },
      {
        name: 'Michelle Huang',
        position: 'Internal Vice President',
        website: 'http://linkedin.com/in/michellerhuang',
        header: 'Business Analyst at',
        subheader: 'CMG Consulting',
        image: path + 'michellehuang.jpg'
      }
    ];
  }
})();
