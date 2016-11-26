(function($) {
  angular.module('MB', ['ngRoute', 'ui.materialize'])
  .constant('Dropbox', new Dropbox({ accessToken: 'jxFO4XmR3oAAAAAAAAAADo6UZ3wEVJac19ppbs7teOK0kOuzfHIa1xvBID-FxSkG' }))
  .constant('gFormContactURL', 'https://docs.google.com/forms/d/e/1FAIpQLSd_t6x3aaNc8nIesK8jSKm4B7XE5hoSxrbJWULY39qFRWf9VA/formResponse');
})(jQuery);
