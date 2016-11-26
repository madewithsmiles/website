(function(){
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
    }

    vm.responses = {
      interestingProject: null,
      teamExperience: null,
    }

    vm.additional = {
      optional: null,
      github: null
    }

    vm.submitForm = () => {
      var fullForm = Object.assign(vm.basic, vm.responses, vm.additional);
      var errMsg = "Error: You must complete all previous fields to continue.";
      // var sent = FormService.sendMessage(fullForm, errMsg);
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
    }

    vm.next = (object) => {
      vm.changePage(vm.page + 1, object);
    }

    vm.prev = () => {
      if (vm.page >= 0) vm.page -= 1;
    }
  }

}());
