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
        titlePath: "glasses",
        title: "Glasses with Face Recognition",
        tags: ["Project Sherlock", "Computer Vision"],
        category: "Computer Vision",
        preview: "Experimenting with Haar Cascades for real-time face detection."
      },
      {
        titlePath: "interactive-physics-engine",
        title: "Interactive Physics Engine",
        tags: ["Javascript", "Computer Vision", "Physics-Engine"],
        category: "Computer Vision",
        preview: "Experimenting with javascript physics engine and hand tracking."
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
