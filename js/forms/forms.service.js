(function(){
  angular
    .module('MB')
    .factory('FormService', FormService);

  FormService.$inject = [];

  function FormService(){
    var factory = {
      checkFullSubmit: checkFullSubmit
    }

    function checkFullSubmit(object) {
      console.log(object);
      for(var key in object) {
         if (object.hasOwnProperty(key)) {
             if (!object[key]) return false;
         }
      }
      return true;
    }

    return factory;
  }
}());
