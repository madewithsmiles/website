(function(){
    angular
        .module('MB')
        .controller('BlogCtrl', BlogCtrl)
        .directive('blogPost', PostDir);

    BlogCtrl.$inject = ['URIService', 'BlogService', '$stateParams'];

    function BlogCtrl(URIService, BlogService, $stateParams){
        var vm = this;
        console.log($stateParams);
        vm.currentPost = BlogService.getPostData($stateParams.postId);
        console.log(vm.currentPost);
        console.log(!vm.currentPost);
        vm.encode = URIService.encode;
        vm.decode = URIService.decode;

        vm.posts = BlogService.getPostMetaData();
    }

    function PostDir() {
      return {
        restrict: 'E',
        transclude: true,
        scope: {
          title: "=",
          author: "=",
          date: "=",
          tags: '=',
          category: '='
        },
        templateUrl: 'templates/pages/blog/post.html'
      };
    }

}());
