(function(){
  angular
    .module('MB')
    .controller('ApplyCtrl', ApplyCtrl);

  ApplyCtrl.$inject = ['$scope'];

  function ApplyCtrl($scope){
    var vm = this;

    vm.page = 1;
    console.log(vm.page);
  }

}());
