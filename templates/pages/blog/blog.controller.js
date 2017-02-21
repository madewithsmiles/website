(function(){
    angular
        .module('MB')
        .controller('BlogCtrl', BlogCtrl)
        .directive('blogPost', PostDir);

    BlogCtrl.$inject = ['BlogService', '$stateParams'];

    function BlogCtrl( BlogService, $stateParams){
        var vm = this;
        vm.currentPost = BlogService.getPostData($stateParams.titlePath);

        vm.posts = BlogService.getPostMetaData();
    }

    function PostDir() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          name: "=",
          author: "=",
          date: "=",
          tags: '=',
          category: '=',
          datePath: '=',
          titlePath: '='
        },
        templateUrl: 'templates/pages/blog/post.html'
      };
    }

}());
