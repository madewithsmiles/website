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
    	if (currentPage == '3d-face') {
    		$window.location.reload();
    		// TODO: Attempt to disable webcam instead of reloading.
    		/*navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
            window.URL = window.URL || window.webkitURL || window.msURL || window.mozURL;

            if (navigator.getUserMedia) {
                var videoSelector = {
                    video: true
                };
                if (window.navigator.appVersion.match(/Chrome\/(.*?) /)) {
                    var chromeVersion = parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10);
                    if (chromeVersion < 20) {
                        videoSelector = "video";
                    }
                };

                navigator.getUserMedia(videoSelector, function(stream) {
                	console.log(stream.getTracks()[0]);
                	stream.getTracks()[0].stop();
                	console.log(stream.getTracks()[0]);
                }, function() {});
            }*/
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
