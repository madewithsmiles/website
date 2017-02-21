(function(){
    angular
        .module('MB')
        .controller('BlogCtrl', BlogCtrl)
        .directive('blogPost', PostDir)
        .directive('fbComments', FBComments);

    BlogCtrl.$inject = ['BlogService', '$stateParams', 'ngMeta'];

    function BlogCtrl( BlogService, $stateParams, ngMeta){
        var vm = this;
        vm.currentPost = BlogService.getPostData($stateParams.titlePath);

        if (vm.currentPost) {
          var meta_url = "http://callaunchpad.org/#/" + vm.currentPost.datePath + "/" + vm.currentPost.titlePath;
          var meta_title = vm.currentPost.title + " | Launchpad Blog";
          var meta_preview = vm.currentPost.preview;
          var meta_img = "http://callaunchpad.org/img/og/blog_posts/" + vm.currentPost.titlePath + ".png";
          ngMeta.setTitle(meta_title);
          ngMeta.setTag('url', meta_url);
          ngMeta.setTag('description', meta_preview);
          ngMeta.setTag('image', meta_img);
        }

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

    function FBComments() {
      function createHTML(href) {
        return '<div class="fb-comments" ' +
          'data-href="' + href + '" ' +
          'data-width="100%" data-numposts="5">' +
          '</div>';
      }
      return {
        restrict: 'E',
        scope: {},
        link: function(scope, elem, attrs) {
          attrs.$observe('pageHref', function (newValue) {
            if (newValue) {
              var href = newValue;
              elem.html(createHTML(href));
              FB.XFBML.parse(elem[0]);
            } else {
              element.html("<div></div>");
            }
          })
        }
      }
    }

}());
