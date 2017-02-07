(function() {
  angular
  .module('MB')
  .controller('HomeCtrl', HomeCtrl);
  HomeCtrl.$inject = ['FormService', 'NotificationSheetURL', 'TeamService'];

  function HomeCtrl(FormService, NotificationSheetURL, TeamService) {
    var vm = this;

    vm.submitted = false;
    vm.notification = { firstName: null, lastName: null, email: null };

    vm.sendMessage = () => {
      var sent = FormService.sendToSheet(vm.notification, NotificationSheetURL);
      if (sent) {
        vm.submitted = true;
        return true;
      }
      return false;
    };

    vm.team = TeamService.getAll();
    vm.executives = TeamService.getExecutives();
    vm.business = TeamService.getBusiness();
    vm.developers = TeamService.getDevelopers();
  }
})();
