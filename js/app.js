(function($) {
  angular.module('MB', ['ngRoute', 'ui.materialize'])
  .constant('Dropbox', new Dropbox({ accessToken: 'jxFO4XmR3oAAAAAAAAAADo6UZ3wEVJac19ppbs7teOK0kOuzfHIa1xvBID-FxSkG' }))
  .constant('ContactSheetURL', 'https://script.google.com/macros/s/AKfycbxr8GYXt7yPoqAYZJIwyZcYYyOAW-7gPiFCPOBr2J0ccMQcpGU/exec')
  .constant('ApplicationSheetURL', 'https://script.google.com/macros/s/AKfycbz-BimCOd0hicCGaz8GfKmAlYb9H21JEbs8WYMHlPcY_ctzIBw/exec')
  .constant('CompanySheetURL', 'https://script.google.com/macros/s/AKfycbyCk_a4ln1zY8QWuXz7IzjsidV9_2Ubp8mym9TOaL2i5iBw7ndc/exec');
})(jQuery);
