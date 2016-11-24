(function(){
  angular
    .module('MB')
    .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['$scope'];

  function ApplyCtrl($scope){
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

    var checkFullSubmit = (object) => {
      console.log(object);
      for(var key in object) {
         if (object.hasOwnProperty(key)) {
             if (!object[key]) return false;
         }
      }
      return true;
    }

    vm.submitForm = () => {
      var okay = checkFullSubmit(vm.basic) && checkFullSubmit(vm.responses) && checkFullSubmit(vm.additional);
      if (okay) {
        var fullForm = {
          basic: vm.basic,
          responses: vm.responses,
          additional: vm.additional
        }
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
