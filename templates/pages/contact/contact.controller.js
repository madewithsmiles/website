(function(){
  angular
    .module('MB')
    .controller('ContactCtrl', ContactCtrl);

  ContactCtrl.$inject = ['FormService', '$http', '$log'];

  function ContactCtrl(FormService, $http, $log) {
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
      var sent = FormService.sendMessage(vm.contact);
      if (sent) {
        vm.submitted = true;
        return true;
      }
      return false;
    };
  }

}());
