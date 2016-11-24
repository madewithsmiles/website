(function(){
  angular
    .module('MB')
    .controller('CompaniesCtrl', CompaniesCtrl);

  CompaniesCtrl.$inject = ['FormService'];

  function CompaniesCtrl(FormService){
    var vm = this;

    vm.company = {
      organization: null,
      email: null,
      firstName: null,
      lastName: null,
      subject: null,
      message: null
    }

    vm.sendRequest = () => {
      var okay = FormService.checkFullSubmit(vm.company);
      if (okay) {
        // TODO: vm.company object contains all information you want to email.
        console.log(vm.company);
        return true;
      }
      Materialize.toast("Error: Please complete all fields so we have enough information to proceed.", 2000);
      return false;
    }
  }

}());
