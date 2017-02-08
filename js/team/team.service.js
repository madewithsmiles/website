(function(){
  angular
    .module('MB')
    .factory('TeamService', TeamService);

  TeamService.$inject = ['$http', '$log'];

  function TeamService(Dropbox, $http, $log){
    var factory = {
      getAll: getAll,
      getExecutives: getExecutives,
      getBusiness: getBusiness,
      getDevelopers: getDevelopers,
      getMembers: getMembers
    }

    var team = {
      executives: [
        {
          "name": "Felix Su",
          "position": "President / Project Leader",
          "website": "http://felixsu.com",
          "header": "Amazon SDE Intern",
          "subheader": "",
          "image": "/img/team/executives/felix_su.png"
        },
        {
          "name": "Peter Lee",
          "position": "President / Project Leader",
          "website": "http://peterlee.tech",
          "header": "Microsoft SDE Intern",
          "subheader": "",
          "image": "/img/team/executives/peter_lee.png"
        },
        {
          "name": "Katie Li",
          "position": "External Vice President",
          "website": "http://linkedin.com/in/katienli",
          "header": "Project Manager at",
          "subheader": "",
          "image": "/img/team/executives/katie_li.jpg"
        },
        {
          "name": "Michelle Huang",
          "position": "Internal Vice President",
          "website": "http://linkedin.com/in/michellerhuang",
          "header": "Business Analyst at",
          "subheader": "",
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
        },
        {
          "name": "Jim Xu",
          "position": "Business Developer",
          "website": "https://www.linkedin.com/in/zijingxu",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/business/jim_xu.jpg"
        }
      ],
      designers: [],
      developers: [
        {
          "name": "Annie Wang",
          "position": "Project Developer",
          "website": "https://www.linkedin.com/in/annieyueyiwang",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/annie_wang.jpg"
        },
        {
          "name": "Arsh Zahed",
          "position": "Project Developer",
          "website": "https://github.com/azahed98",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/arsh_zahed.jpg"
        },
        {
          "name": "Caleb Siu",
          "position": "Project Developer",
          "website": "https://www.linkedin.com/in/calebsiu",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/caleb_siu.jpg"
        },
        {
          "name": "Darren Lee",
          "position": "Project Developer",
          "website": "http://darrenklee.me/",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/darren_lee.png"
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
          "name": "George Zhang",
          "position": "Project Developer",
          "website": "",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/george_zhang.jpg"
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
          "name": "Harika Kalidhindi",
          "position": "Project Developer",
          "website": "https://github.com/jrharika",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/harika_kalidhindi.jpg"
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
          "name": "Michael Fan",
          "position": "Project Developer",
          "website": "https://github.com/RI5E",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/michael_fan.jpg"
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
          "name": "Nick Zoghb",
          "position": "Project Developer",
          "website": "https://github.com/nzoghb",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nick_zoghb.jpg"
        },
        {
          "name": "Nikita Vemuri",
          "position": "Project Developer",
          "website": "https://github.com/nikitavemuri",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nikita_vemuri.jpg"
        },
        {
          "name": "Nina Chang",
          "position": "Project Developer",
          "website": "https://www.linkedin.com/in/nina-chang-100133118",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nina_chang.jpg"
        },
        {
          "name": "Nipun Ramakrishnan",
          "position": "Project Developer",
          "website": "https://github.com/nipunramk",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nipun_ramakrishnan.jpg"
        },
        {
          "name": "Vishal Satish",
          "position": "Project Developer",
          "website": "https://github.com/visatish",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/vishal_satish.jpg"
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

    function getBusiness() {
      return team.business;
    }

    function getDevelopers() {
      return team.developers;
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
