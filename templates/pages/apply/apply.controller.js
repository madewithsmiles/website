(function() {
  angular
  .module('MB')
  .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['FormService', '$http', '$log', 'Dropbox', 'DropboxService', 'ApplicationSheetURL'];

  function ApplyCtrl(FormService, $http, $log, Dropbox, DropboxService, ApplicationSheetURL){
    var vm = this;
    const pageLimit = 3;
    vm.submitted = false;

    vm.page = 1;
    vm.years = ["Freshman", "Sophomore", "Junior", "Senior"];

    vm.basic = {
      firstName: null,
      lastName: null,
      year: null,
      major: null,
      email: null,
      phone: null,
      resume: null
    };

    vm.responses = {
      interestingProject: null,
      teamExperience: null,
    };

    vm.additional = {
      optional: null,
      github: null
    };

    vm.submitForm = () => {
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

    vm.changePage = (page) => {
      if (page <= 3 && page >= 0) {
        vm.page = page;
        return true;
      }
      return false;
    };

    vm.next = (object) => {
      vm.changePage(vm.page + 1, object);
    };

    vm.prev = () => {
      if (vm.page >= 0) vm.page -= 1;
    };

    // WORD COUNTING AND LIMITING
    // Sorry Felix, I'm not good at Angular so im gonna copy n' paste...
    vm.WORD_LIMIT = 200;
    vm.wordCount1 = 0;
    vm.updateTextArea1 = ($event) => {
      if (!vm.isWhitespace(vm.responses.interestingProject[0])) {
        vm.wordCount1 = 1;
      }

      for (var i = 1; i < vm.responses.interestingProject.length; i++) {
        if (!vm.isWhitespace(vm.responses.interestingProject[i]) && vm.isWhitespace(vm.responses.interestingProject[i-1])) {
          vm.wordCount1++;
          if (vm.wordCount1 == vm.WORD_LIMIT + 1) {
            vm.wordCount1--;
            vm.responses.interestingProject = vm.responses.interestingProject.substring(0, i);
            return;
          } else if (!vm.isWhitespace(vm.responses.interestingProject[i]) && !vm.isWhitespace(vm.responses.interestingProject[i-1])) {
            if (vm.wordCount1 == 0) {
              vm.wordCount1 = 1;
            }
          }
        }
      }

      if (vm.responses.interestingProject.length == 0) {
        vm.wordCount1 = 0;
      }
    }; 



    vm.wordCount2 = 0;
    vm.updateTextArea2 = ($event) => {
      if (!vm.isWhitespace(vm.responses.teamExperience[0])) {
        vm.wordCount2 = 1;
      }

      for (var i = 1; i < vm.responses.teamExperience.length; i++) {
        if (!vm.isWhitespace(vm.responses.teamExperience[i]) && vm.isWhitespace(vm.responses.teamExperience[i-1])) {
          vm.wordCount2++;
          if (vm.wordCount2 == vm.WORD_LIMIT + 1) {
            vm.wordCount2--;
            vm.responses.teamExperience = vm.responses.teamExperience.substring(0, i);
            return;
          } else if (!vm.isWhitespace(vm.responses.teamExperience[i]) && !vm.isWhitespace(vm.responses.teamExperience[i-1])) {
            if (vm.wordCount2 == 0) {
              vm.wordCount2 = 1;
            }
          }
        }
      }

      if (vm.responses.teamExperience.length == 0) {
        vm.wordCount2 = 0;
      }
    };



    vm.wordCount3 = 0;
    vm.updateTextArea3 = ($event) => {
      if (!vm.isWhitespace(vm.responses.teamExperience[0])) {
        vm.wordCount3 = 1;
      }

      for (var i = 1; i < vm.responses.teamExperience.length; i++) {
        if (!vm.isWhitespace(vm.responses.teamExperience[i]) && vm.isWhitespace(vm.responses.teamExperience[i-1])) {
          vm.wordCount3++;
          if (vm.wordCount3 == vm.WORD_LIMIT + 1) {
            vm.wordCount3--;
            vm.responses.teamExperience = vm.responses.teamExperience.substring(0, i);
            return;
          } else if (!vm.isWhitespace(vm.responses.teamExperience[i]) && !vm.isWhitespace(vm.responses.teamExperience[i-1])) {
            if (vm.wordCount3 == 0) {
              vm.wordCount3 = 1;
            }
          }
        }
      }

      if (vm.responses.teamExperience.length == 0) {
        vm.wordCount3 = 0;
      }
    };



    vm.wordCount3 = 0;
    vm.updateTextArea3 = ($event) => {
      if (!vm.isWhitespace(vm.additional.optional[0])) {
        vm.wordCount3 = 1;
      }

      for (var i = 1; i < vm.additional.optional.length; i++) {
        if (!vm.isWhitespace(vm.additional.optional[i]) && vm.isWhitespace(vm.additional.optional[i-1])) {
          vm.wordCount3++;
          if (vm.wordCount3 == vm.WORD_LIMIT + 1) {
            vm.wordCount3--;
            vm.additional.optional = vm.additional.optional.substring(0, i);
            return;
          } else if (!vm.isWhitespace(vm.additional.optional[i]) && !vm.isWhitespace(vm.additional.optional[i-1])) {
            if (vm.wordCount3 == 0) {
              vm.wordCount3 = 1;
            }
          }
        }
      }

      if (vm.additional.optional.length == 0) {
        vm.wordCount3 = 0;
      }
    };

    vm.isWhitespace= (char) => {
      return char == ' ' || char == '\n';
    };
  }
})();
