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
      var okay = FormService.checkFullSubmit(vm.contact);
      var postData = {
        "Subject": vm.contact.subject,
        "Name": vm.contact.firstName + " " + vm.contact.lastName,
        "Email": vm.contact.email,
        "Message": vm.contact.message
      };
      if (okay) {
        $http({
          url: "https://formspree.io/team@callaunchpad.org",
          method: "POST",
          data: postData,
          dataType: "json"
        }).then(function successCallback(response) {
          $log.debug(response);
        }, function errorCallback(response) {
          $log.error(response);
        });
        vm.submitted = true;
        return true;
      }
      Materialize.toast("Please complete all fields.", 2000);
      return false;
    }
  }

}());
