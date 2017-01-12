(function() {
  angular
  .module('MB')
  .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['FormService', '$http', '$log', 'Dropbox', 'DropboxService', 'ApplicationSheetURL'];

  function ApplyCtrl(FormService, $http, $log, Dropbox, DropboxService, ApplicationSheetURL){
    var vm = this;
    const WORD_LIMIT = 200;
    vm.years = ["Freshman", "Sophomore", "Junior", "Senior"];
    vm.positions = ["Project Developer", "Project Leader", "Designer", "Business Developer"];

    vm.submitted = false;
    vm.page = 1;
    vm.wordCount1 = 0;
    vm.wordCount2 = 0;
    vm.wordCount3 = 0;

    vm.basic = { firstName: null, lastName: null, year: null, major: null, email: null, phone: null, position: null, resume: null };
    vm.responses = { interestingProject: null, teamExperience: null, };
    vm.additional = { optional: null, github: null };

    vm.submitForm = () => {
      var fullForm = $.extend({}, Object.assign(vm.basic, vm.responses, vm.additional));
      console.log(fullForm);
      var errMsg = "Error: You must complete all previous fields to continue.";
      var sent = FormService.sendToSheet(fullForm, ApplicationSheetURL, errMsg);
      if (sent) {
        var fileInput = document.getElementById('resume');
        var resume = fileInput.files[0];
        var submitted = DropboxService.uploadFile('/resumes/' + resume.name, resume);
        vm.submitted = true;
        return true;
      }
      $log.warn('Application not sent!');
      return false;
    };

    vm.changePage = (page) => {
      if (page <= 3 && page >= 0) {
        vm.page = page;
        return true;
      }
      return false;
    };

    vm.next = (object) => { vm.changePage(vm.page + 1, object); };
    vm.prev = () => { if (vm.page >= 0) vm.page -= 1; };

    vm.updateTextArea1 = ($event) => { FormService.updateTextArea($event, vm, 'responses', 'interestingProject', 'wordCount1', WORD_LIMIT); };
    vm.updateTextArea2 = ($event) => { FormService.updateTextArea($event, vm, 'responses', 'teamExperience', 'wordCount2', WORD_LIMIT); };
    vm.updateTextArea3 = ($event) => { FormService.updateTextArea($event, vm, 'additional', 'optional', 'wordCount3', WORD_LIMIT); };

  }
})();
