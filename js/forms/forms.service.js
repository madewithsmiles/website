(function(){
  angular
    .module('MB')
    .factory('FormService', FormService);

  FormService.$inject = ['$http', '$log'];

  function FormService($http, $log){
    var factory = {
      checkFullSubmit: checkFullSubmit,
      sendMessage: sendMessage
    }

    function checkFullSubmit(object) {
      for(var key in object) {
        if (object.hasOwnProperty(key)) {
          if (!object[key] && key != 'optional') return false;
        }
      }
      return true;
    }

    function camelCaseToPretty(text) {
      var spaces = text.replace( /([A-Z0-9])/g, " $1" );
      var pretty = spaces.charAt(0).toUpperCase() + spaces.slice(1);
      return pretty;
    }

    function renameProperty(object, oldName, newName) {
      if (oldName == newName) {
        return object;
      }
      if (object.hasOwnProperty(oldName)) {
        object[newName] = object[oldName];
        delete object[oldName];
      }
      return object;
    };

    function prettyObjectKeys(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) object = renameProperty(object, key, camelCaseToPretty(key));
      }
      return object;
    }

    function sendMessage(messageObject, errorMessage) {
      var okay = checkFullSubmit(messageObject);
      var postData = prettyObjectKeys(messageObject);
      console.log(postData);
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
        return true;
      }
      if (!errorMessage) {
        Materialize.toast("Please complete all fields.", 2000);
      } else {
        Materialize.toast(errorMessage, 2000);
      }
      return false;
    }

    return factory;
  }
}());
