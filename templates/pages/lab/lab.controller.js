(function() {
  angular
	  .module('MB')
	  .controller('LabCtrl', LabCtrl)
	  .directive('labExperiment', ExperimentDir);

  LabCtrl.$inject = ['LabService', '$stateParams', '$scope', '$window', '$rootScope'];

  function LabCtrl(LabService, $stateParams, $scope, $window, $rootScope) {
    var vm = this;
    vm.currentExperiment = LabService.getExperimentData(
    	$stateParams.titlePath
    );
    vm.experiments = LabService.getExperimentMetaData();

    function getLastWord(str) {
    	var extracted = str.split("/");
    	if (extracted[extracted.length - 1].length > 0)
    		return extracted[extracted.length - 1];
    	else
    		return extracted[extracted.length - 2];
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
    	var currentPage = getLastWord(current);
    	if (currentPage == 'glasses') {
    		$window.location.reload();
    	}
    	var nextPage = getLastWord(next);
    	if (nextPage == 'glasses') {
    		$window.location.reload();
    	}
	});
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
