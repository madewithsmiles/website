(function(){
  angular
    .module('MB')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['FormService'];

  function ContactCtrl(FormService){
    var vm = this;

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
        // TODO: vm.contact object contains all information you want to email.
        console.log(vm.contact);
        return true;
      }
      Materialize.toast("Error: Please complete all fields so we have enough information to respond.", 2000);
      return false;
    }
  }

}());
