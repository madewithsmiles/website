(function(){
  angular
    .module('MB')
    .factory('TeamService', TeamService);

  TeamService.$inject = ['$http', '$log'];

  function TeamService(Dropbox, $http, $log){
    var factory = {
      getAll: getAll,
      getExecutives: getExecutives,
      getMembers: getMembers
    }

    var team = {
      executives: [
        {
          "name": "Felix Su",
          "position": "Founder",
          "website": "http://felixsu.com",
          "header": "Amazon SDE Intern",
          "subheader": "Summer 2017",
          "image": "/img/team/executives/felix_su.png"
        },
        {
          "name": "Peter Lee",
          "position": "Founder",
          "website": "http://peterlee.tech",
          "header": "Microsoft SDE Intern",
          "subheader": "Summer 2017",
          "image": "/img/team/executives/peter_lee.png"
        },
        {
          "name": "Katie Li",
          "position": "External Vice President",
          "website": "http://linkedin.com/in/katienli",
          "header": "Project Manager at",
          "subheader": "DiversaTech",
          "image": "/img/team/executives/katie_li.jpg"
        },
        {
          "name": "Michelle Huang",
          "position": "Internal Vice President",
          "website": "http://linkedin.com/in/michellerhuang",
          "header": "Business Analyst at",
          "subheader": "CMG Consulting",
          "image": "/img/team/executives/michelle_huang.jpg"
        }
      ],
      business: [
        {
          "name": "Aditya Gandhi",
          "position": "Business Developer",
          "website": "https://www.linkedin.com/in/adigandhi1",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/business/aditya_gandhi.jpg"
        }
      ],
      designers: [],
      developers: [
        {
          "name": "Arsh Zahed",
          "position": "Project Developer",
          "website": "https://github.com/azahed98",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/arsh_zahed.jpg"
        },
        {
          "name": "Evan Limanto",
          "position": "Project Developer",
          "website": "http://evanlimanto.github.io/",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/evan_limanto.jpg"
        },
        {
          "name": "Hank O'Brien",
          "position": "Project Developer",
          "website": "https://github.com/hjobrien",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/hank_obrien.jpg"
        },
        {
          "name": "Lenny Dong",
          "position": "Project Developer",
          "website": "http://lennyd.me/",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/lenny_dong.jpg"
        },
        {
          "name": "Nate Young",
          "position": "Project Developer",
          "website": "https://github.com/natetyoung",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nate_young.jpg"
        },
        {
          "name": "Nikita Vemuri",
          "position": "Project Developer",
          "website": "https://github.com/nikitavemuri",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nikita_vemuri.jpg"
        }
      ]
    }

    function getAll() {
      var result = [];
      for (var key in team) {
        if (team.hasOwnProperty(key)) {
          result = result.concat(team[key]);
        }
      }
      return result;
    }

    function getExecutives() {
      return team.executives;
    }

    function getMembers() {
      var result = [];
      for (var key in team) {
        if (team.hasOwnProperty(key)) {
          if (key != "executives") result = result.concat(team[key]);
        }
      }
      return result;
    }

    return factory;
  }
}());
