// var logo = 0;
// var values = 500;
// var description = 1000;
var offset = 200;
var fixedLogo = $('#fixed-logo');
var divs = [$('#logo'), $('#description'), $('#values')];
var limits = [0, 600, 1400];

fixedLogo.hide();
divs.forEach(function(div, index) {
  if (index > 0) {
    div.hide();
  }
})

// $('#description').hide();


$('.parallax').on('scroll', function() {
   var st = $(this).scrollTop();

   for (var i = 0; i < divs.length; i++) {
     if (i + 1 < divs.length) {
        if (st >= limits[i] && st < limits[i + 1] - offset) {
          divs[i].fadeIn();
          if (i == 0) {
            fixedLogo.fadeOut();
          }
        }
        if (st > limits[i + 1] - offset || st < limits[i]) {
          divs[i].fadeOut();
          if (i == 0) {
            fixedLogo.fadeIn();
          }
        }
     } else {
       if (st > limits[i]) {
         divs[i].fadeIn();
       } else {
         divs[i].fadeOut();
       }
     }
   }
});
