(function(){
  angular
    .module('MB')
    .factory('TeamService', TeamService);

  TeamService.$inject = ['$http', '$log'];

  function TeamService(Dropbox, $http, $log){
    var factory = {
      getAll: getAll,
      getOfficers: getOfficers,
      getDevelopers: getDevelopers,
      getAlumni: getAlumni,
      getPastMembers: getPastMembers
    }

    var team = {
      officers: [
        {
          "name": "Felix Su",
          "position": "President / Project Leader",
          "website": "http://felixsu.com",
          "header": "Amazon SDE Intern",
          "subheader": "",
          "image": "/img/team/officers/felix_su.png",
          "semester": "Fall 2017"
        },
        {
          "name": "Caleb Siu",
          "position": "VP of Technology",
          "website": "https://www.linkedin.com/in/calebsiu",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/caleb_siu.jpg",
          "semester": "Fall 2017"
        },
        {
          "name": "Nipun Ramakrishnan",
          "position": "Project Leader",
          "website": "https://www.linkedin.com/in/nipun-ramakrishnan-001a40116",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/nipun_ramakrishnan.jpg",
          "semester": "Fall 2017"
        },
        {
          "name": "Hank O'Brien",
          "position": "Project Leader",
          "website": "https://github.com/hjobrien",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/hank_obrien.jpg",
          "semester": "Fall 2017"
        },
        {
          "name": "Arsh Zahed",
          "position": "Project Leader",
          "website": "https://github.com/azahed98",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/arsh_zahed.jpg",
          "semester": "Fall 2017"
        }
      ],
      developers: [
      ],
      alumni: [
        {
          "name": "Peter Lee",
          "position": "President / Project Leader",
          "website": "http://peterlee.tech",
          "header": "Microsoft SDE Intern",
          "subheader": "",
          "image": "/img/team/officers/peter_lee.png",
          "semester": "Spring 2017"
        },
        {
          "name": "Katie Li",
          "position": "External Vice President",
          "website": "http://linkedin.com/in/katienli",
          "header": "Project Manager at",
          "subheader": "",
          "image": "/img/team/alumni/katie_li.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Michelle Huang",
          "position": "Internal Vice President",
          "website": "http://linkedin.com/in/michellerhuang",
          "header": "Business Analyst at",
          "subheader": "",
          "image": "/img/team/alumni/michelle_huang.jpg",
          "semester": "Spring 2017"
        }
      ],
      pastMembers: [
        {
          "name": "Aditya Gandhi",
          "position": "Business Developer",
          "website": "https://www.linkedin.com/in/adigandhi1",
          "header": "",
          "subheader": "",
          "image": "/img/team/alumni/aditya_gandhi.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Jim Xu",
          "position": "Business Developer",
          "website": "https://www.linkedin.com/in/zijingxu",
          "header": "",
          "subheader": "",
          "image": "/img/team/alumni/jim_xu.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Annie Wang",
          "position": "Project Developer",
          "website": "https://www.linkedin.com/in/annieyueyiwang",
          "header": "",
          "subheader": "",
          "image": "/img/team/alumni/annie_wang.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Darren Lee",
          "position": "Project Developer",
          "website": "http://darrenklee.me/",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/darren_lee.png",
          "semester": "Spring 2017"
        },
        {
          "name": "Evan Limanto",
          "position": "Project Developer",
          "website": "http://evanlimanto.github.io/",
          "header": "",
          "subheader": "",
          "image": "/img/team/alumni/evan_limanto.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "George Zhang",
          "position": "Project Developer",
          "website": "",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/george_zhang.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Harika Kalidhindi",
          "position": "Project Developer",
          "website": "https://github.com/jrharika",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/harika_kalidhindi.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Lenny Dong",
          "position": "Project Developer",
          "website": "http://lennyd.me/",
          "header": "",
          "subheader": "",
          "image": "/img/team/alumni/lenny_dong.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Michael Fan",
          "position": "Project Developer",
          "website": "https://github.com/mqfan",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/michael_fan.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Nate Young",
          "position": "Project Developer",
          "website": "https://github.com/natetyoung",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nate_young.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Nick Zoghb",
          "position": "Project Developer",
          "website": "https://github.com/nzoghb",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/nick_zoghb.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Nina Chang",
          "position": "Project Developer",
          "website": "https://www.linkedin.com/in/nina-chang-100133118",
          "header": "",
          "subheader": "",
          "image": "/img/team/officers/nina_chang.jpg",
          "semester": "Spring 2017"
        },
        {
          "name": "Vishal Satish",
          "position": "Project Developer",
          "website": "https://github.com/visatish",
          "header": "",
          "subheader": "",
          "image": "/img/team/members/developers/vishal_satish.jpg",
          "semester": "Spring 2017"
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

    function getAlumni() {
      return team.alumni;
    }

    function getOfficers() {
      return team.officers
    }

    function getDevelopers() {
      return team.developers;
    }

    function getPastMembers() {
      return team.pastMembers;
    }

    function getMembers() {
      var result = [];
      for (var key in team) {
        if (team.hasOwnProperty(key)) {
          if (key != "officers" && key != "alumni" && key != "pastMembers") result = result.concat(team[key]);
        }
      }
      return result;
    }

    return factory;
  }
}());
