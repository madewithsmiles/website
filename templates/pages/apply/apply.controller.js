(function(){
  angular
    .module('MB')
    .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['FormService'];

  function ApplyCtrl(FormService){
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
      var sent = FormService.sendMessage(fullForm, errMsg);
      if (sent) {
        vm.submitted = true;
        return true;
      }
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
