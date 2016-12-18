'use strict';

(function ($) {
  angular.module('MB', ['ui.router', 'ui.materialize', 'ngAnimate']).run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
      if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) setTimeout(function () {
        $('html, body').animate({ scrollTop: 0 }, 300);
      }, 0);
    });
  }]).constant('Dropbox', new Dropbox({ accessToken: 'jxFO4XmR3oAAAAAAAAAADo6UZ3wEVJac19ppbs7teOK0kOuzfHIa1xvBID-FxSkG' })).constant('ContactSheetURL', 'https://script.google.com/macros/s/AKfycbxr8GYXt7yPoqAYZJIwyZcYYyOAW-7gPiFCPOBr2J0ccMQcpGU/exec').constant('ApplicationSheetURL', 'https://script.google.com/macros/s/AKfycbz-BimCOd0hicCGaz8GfKmAlYb9H21JEbs8WYMHlPcY_ctzIBw/exec').constant('CompanySheetURL', 'https://script.google.com/macros/s/AKfycbyCk_a4ln1zY8QWuXz7IzjsidV9_2Ubp8mym9TOaL2i5iBw7ndc/exec');
})(jQuery);
'use strict';

(function () {
  angular.module('MB').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('about', {
      url: '/',
      templateUrl: 'templates/pages/home/index.html'
    }).state('projects', {
      url: '/projects',
      templateUrl: 'templates/pages/projects/index.html'
    }).state('companies', {
      url: '/companies',
      templateUrl: 'templates/pages/companies/index.html',
      controller: 'CompaniesCtrl',
      controllerAs: 'vm'
    }).state('contact', {
      url: '/contact',
      templateUrl: 'templates/pages/contact/index.html',
      controller: 'ContactCtrl',
      controllerAs: 'vm'
    }).state('apply', {
      url: '/apply',
      templateUrl: 'templates/pages/apply/index.html',
      controller: 'ApplyCtrl',
      controllerAs: 'vm'
    });

    // $locationProvider.html5Mode({enabled: true, requireBase: false, rewriteLinks: false});
  });
})();
'use strict';

(function () {
  angular.module('MB').factory('DropboxService', DropboxService);

  DropboxService.$inject = ['Dropbox', '$http', '$log'];

  function DropboxService(Dropbox, $http, $log) {
    var factory = {
      uploadFile: uploadFile
    };

    function uploadFile(filePath, fileContents) {
      Dropbox.filesUpload({ path: filePath, contents: fileContents }).then(function (response) {
        $log.debug('File Uploaded to Dropbox: ' + JSON.stringify(response));
        return true;
      }).catch(function (error) {
        $log.error(error);
        return false;
      });
      return true;
    }

    return factory;
  }
})();
'use strict';

(function () {
  angular.module('MB').factory('FormService', FormService);

  FormService.$inject = ['$http', '$log'];

  function FormService($http, $log) {
    var factory = {
      checkFullSubmit: checkFullSubmit,
      sendMessage: sendMessage,
      sendToSheet: sendToSheet,
      updateTextArea: updateTextArea
    };

    function checkFullSubmit(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (!object[key] && key != 'optional') return false;
        }
      }
      return true;
    }

    function camelCaseToPretty(text) {
      var spaces = text.replace(/([A-Z0-9])/g, " $1");
      var pretty = spaces.charAt(0).toUpperCase() + spaces.slice(1);
      return pretty;
    }

    function renameProperty(object, oldName, newName) {
      if (oldName == newName) {
        return object;
      }
      if (object.hasOwnProperty(oldName)) {
        object[newName] = object[oldName];
        delete object[oldName];
      }
      return object;
    };

    function prettyObjectKeys(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) object = renameProperty(object, key, camelCaseToPretty(key));
      }
      return object;
    }

    function sendMessage(messageObject, errorMessage, gFormURL) {
      var okay = checkFullSubmit(messageObject);
      console.log(postData);

      if (okay) {
        $http({
          url: gFormURL,
          method: "POST",
          data: postData,
          dataType: "json"
        }).then(function successCallback(response) {
          $log.debug(response);
        }, function errorCallback(response) {
          $log.error(response);
        });
        return true;
      }
      if (!errorMessage) {
        Materialize.toast("Please complete all fields.", 2000);
      } else {
        Materialize.toast(errorMessage, 2000);
      }
      return false;
    }

    function sendToSheet(messageObject, sheetURL, errorMessage) {
      var okay = checkFullSubmit(messageObject);
      var message = prettyObjectKeys(messageObject);
      var postData = $.param(messageObject);
      console.log(postData);
      if (okay) {
        $.ajax({
          url: sheetURL,
          type: "post",
          data: postData,
          success: function success(response) {
            $log.debug('Message Sent: ' + JSON.stringify(response));
          },
          error: function error(request, textStatus, errorThrown) {
            $log.error("Status: " + textStatus);
            $log.error("Error: " + errorThrown);
          }
        });
        return true;
      }
      if (!errorMessage) {
        Materialize.toast("Please complete all fields.", 2000);
      } else {
        Materialize.toast(errorMessage, 2000);
      }
      return false;
    }

    isWhitespace = function isWhitespace(char) {
      return char == ' ' || char == '\n';
    };

    function updateTextArea($event, vmObject, textObject, textKey, wordCountVar, wordLimit) {
      if (!isWhitespace(vmObject[textObject][textKey][0])) vmObject[wordCountVar] = 1;

      for (var i = 1; i < vmObject[textObject][textKey].length; i++) {
        if (!isWhitespace(vmObject[textObject][textKey][i]) && isWhitespace(vmObject[textObject][textKey][i - 1])) {
          vmObject[wordCountVar]++;
          if (vmObject[wordCountVar] == wordLimit + 1) {
            vmObject[wordCountVar]--;
            vmObject[textObject][textKey] = vmObject[textObject][textKey].substring(0, i);
            return;
          } else if (!isWhitespace(vmObject[textObject][textKey][i]) && !isWhitespace(vmObject[textObject][textKey][i - 1]) && vmObject[wordCountVar] == 0) {
            vmObject[wordCountVar] = 1;
          }
        }
      }

      if (vmObject[textObject][textKey].length == 0) vmObject[wordCountVar] = 0;
    }

    return factory;
  }
})();
'use strict';

(function () {
  angular.module('MB').controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['FormService', '$http', '$log', 'Dropbox', 'DropboxService', 'ApplicationSheetURL'];

  function ApplyCtrl(FormService, $http, $log, Dropbox, DropboxService, ApplicationSheetURL) {
    var vm = this;
    var WORD_LIMIT = 200;
    vm.years = ["Freshman", "Sophomore", "Junior", "Senior"];

    vm.submitted = false;
    vm.page = 1;
    vm.wordCount1 = 0;
    vm.wordCount2 = 0;
    vm.wordCount3 = 0;

    vm.basic = { firstName: null, lastName: null, year: null, major: null, email: null, phone: null, resume: null };
    vm.responses = { interestingProject: null, teamExperience: null };
    vm.additional = { optional: null, github: null };

    vm.submitForm = function () {
      var fullForm = Object.assign(vm.basic, vm.responses, vm.additional);
      var errMsg = "Error: You must complete all previous fields to continue.";
      var sent = FormService.sendToSheet(fullForm, ApplicationSheetURL, errMsg);
      if (sent) {
        var fileInput = document.getElementById('resume');
        var resume = fileInput.files[0];
        var submitted = DropboxService.uploadFile('/resumes/' + resume.name, resume);
        vm.submitted = true;
        return true;
      }
      $log.warn('Application not sent');
      return false;
    };

    vm.changePage = function (page) {
      if (page <= 3 && page >= 0) {
        vm.page = page;
        return true;
      }
      return false;
    };

    vm.next = function (object) {
      vm.changePage(vm.page + 1, object);
    };
    vm.prev = function () {
      if (vm.page >= 0) vm.page -= 1;
    };

    vm.updateTextArea1 = function ($event) {
      FormService.updateTextArea($event, vm, 'responses', 'interestingProject', 'wordCount1', WORD_LIMIT);
    };
    vm.updateTextArea2 = function ($event) {
      FormService.updateTextArea($event, vm, 'responses', 'teamExperience', 'wordCount2', WORD_LIMIT);
    };
    vm.updateTextArea3 = function ($event) {
      FormService.updateTextArea($event, vm, 'additional', 'optional', 'wordCount3', WORD_LIMIT);
    };
  }
})();
'use strict';

(function () {
  angular.module('MB').controller('CompaniesCtrl', CompaniesCtrl);

  CompaniesCtrl.$inject = ['FormService', 'CompanySheetURL'];

  function CompaniesCtrl(FormService, CompanySheetURL) {
    var vm = this;
    vm.submitted = false;

    vm.company = { organization: null, email: null, firstName: null, lastName: null, subject: null, message: null };

    vm.sendRequest = function () {
      var errMsg = "Error: Please complete all fields so we have enough information to proceed.";
      var sent = FormService.sendToSheet(vm.company, CompanySheetURL, errMsg);
      if (sent) {
        vm.submitted = true;
        return true;
      }
      return false;
    };
  }
})();
'use strict';

(function () {
  angular.module('MB').controller('ContactCtrl', ContactCtrl);
  ContactCtrl.$inject = ['FormService', '$http', '$log', 'ContactSheetURL'];

  function ContactCtrl(FormService, $http, $log, ContactSheetURL) {
    var vm = this;

    vm.submitted = false;
    vm.contact = { firstName: null, lastName: null, email: null, subject: null, message: null };

    vm.sendMessage = function () {
      var sent = FormService.sendToSheet(vm.contact, ContactSheetURL);
      if (sent) {
        vm.submitted = true;
        return true;
      }
      return false;
    };
  }
})();