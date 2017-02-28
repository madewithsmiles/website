(function(){
  angular
    .module('MB')
    .factory('LabService', LabService);

  function LabService() {
    var factory = {
      getExperimentMetaData: getExperimentMetaData,
      getExperimentData: getExperimentData
    };

    var experimentMetaData = [
      {
        titlePath: "3d-face",
        title: "3D Face Pose Estimation",
        authors: "Peter Lee",
        tags: ["Project Sherlock", "Computer Vision"],
        category: "Computer Vision",
        preview: "Experimenting with face model fitting."
      }
    ];

    function parseText(text) {
      // Trim whitespace
      return text.replace(/^ +| +$/gm, ""); 
    }

    function cleanExperimentData(experiment) {
      experiment.preview = parseText(experiment.preview);
      return experiment;
    }

    function getExperimentMetaData() {
      var cleanData = experimentMetaData;
      for (var i = 0; i < cleanData.length; i++) {
        cleanData[i].preview = parseText(cleanData[i].preview);
      }
      return cleanData;
    }

    function getExperimentData(titlePath) {
      for (var i = 0; i < experimentMetaData.length; i++) {
        if (titlePath == experimentMetaData[i].titlePath)
          return cleanExperimentData(experimentMetaData[i]);
      }
      return null;
    }

    return factory;
  }
}());
