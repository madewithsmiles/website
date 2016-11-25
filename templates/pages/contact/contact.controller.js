(function(){
  angular
    .module('MB')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['FormService'];

  function ContactCtrl(FormService) {
    var vm = this;

    vm.submitted = false;
    vm.contact = {
      firstName: null,
      lastName: null,
      email: null,
      subject: null,
      message: null
    }

    vm.sendMessage = () => {
      var okay = FormService.checkFullSubmit(vm.contact);
      if (okay) {
        vm.submitted = true;
        return true;
      }
      Materialize.toast("Please complete all fields.", 2000);
      return false;
    }
  }

}());
