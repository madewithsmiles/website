(function(){
  angular
    .module('MB')
    .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['FormService'];

  function ApplyCtrl(FormService){
    var vm = this;
    const pageLimit = 3;

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
      prompt1: null,
      prompt2: null,
    }

    vm.additional = {
      comments: null,
      github: null
    }

    var formSections = [vm.basic, vm.responses, vm.additional];

    vm.submitForm = () => {
      var okay = FormService.checkFullSubmit(vm.basic) && FormService.checkFullSubmit(vm.responses) && FormService.checkFullSubmit(vm.additional);
      if (okay) {
        var fullForm = {
          basic: vm.basic,
          responses: vm.responses,
          additional: vm.additional
        }
        // TODO: 'fullForm' object contains all information you want to email.
        console.log(fullForm);
        return true;
      }
      Materialize.toast("Error: You must complete all previous fields to continue.", 2000);
      return false;
    }

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
