(function(){
    angular
        .module('MB')
        .factory('DateService', DateService);

    DateService.$inject = ['moment'];

    function DateService(moment){
        var factory = {
            blogDate: blogDate
        }

        function blogDate(date) {
            return moment(date).format("MMM D, YYYY");
        }

        return factory;
    }
}());
