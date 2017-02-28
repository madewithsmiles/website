(function() {
  angular
	  .module('MB')
	  .controller('LabCtrl', LabCtrl)
	  .directive('labExperiment', ExperimentDir);

  LabCtrl.$inject = ['LabService', '$stateParams'];

  function LabCtrl(LabService, $stateParams) {
    var vm = this;
    vm.currentExperiment = LabService.getExperimentData(
    	$stateParams.titlePath
    );
    vm.experiments = LabService.getExperimentMetaData();
  }

  function ExperimentDir() {
		return {
			restrict: 'E',
			transclude: true,
			scope: {
        name: "=",
			  titlePath: "=",
			  authors: "=",
			  tags: '=',
			  category: '='
			},
			templateUrl: 'templates/pages/lab/experiment.html'
		};
  }
})();
