(function(){
  angular
    .module('MB')
    .factory('URIService', URIService);

  URIService.$inject = [];

  function URIService(){
    var factory = {
      encode: encode,
      decode: decode
    };

    function encode(str) {
      return btoa(str);
    }

    function decode(code) {
      return atob(code);
    }

    return factory;
  }
}());
