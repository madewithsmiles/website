(function(){
  angular
    .module('MB')
    .factory('BlogService', BlogService);

  BlogService.$inject = ['DateService'];

  function BlogService(DateService){
    var factory = {
      getPostMetaData: getPostMetaData,
      getPostData: getPostData
    };

    var postMetaData = [
      {
        datePath: "2-22-2017",
        titlePath: "nlp-with-stella",
        title: "Natural Language Processing with Stella",
        author: "Felix Su",
        date: DateService.blogDate(2,22,2017),
        tags: ["Project Luna", "NLP", "Speech Recognition", "Hack Night"],
        category: "Hack Night 2",
        preview: "Last Saturday, our Luna developers dove into the Stella Demo to implement Natural Language Processing. If you checked our original source code, you would have seen an ugly jumble of if statements that hard coded mappings between commands and our API functions. To tackle this problem, we split into 2 teams to test which combinations of the NLP techniques we learned at Wednesday's Tech Tutorial could best allow Stella to understand and support commands that our engineers might not anticipate."
      },
      {
        datePath: "2-26-2017",
        titlePath: "sherlock-facial-recognition",
        title: "Launchpad + Computer Vision: Face Detection in 20 Lines of Code",
        author: "Peter Lee",
        date: DateService.blogDate(2,26,2017),
        tags: ["Project Sherlock", "Face Detection"],
        category: "Computer Vision Tutorial",
        preview: "In this tutorial, we'll showcase the power of OpenCV by writing a short python script that recognizes your face through a live webcam in real-time. This was a warmup exercise for our newest members of the Launchpad Team for Project Sherlock, a cloud API that provides optimized algorithms for human-centric computer vision."
      }
    ];

    function parseText(text) {
      return text.replace(/^ +| +$/gm, "");
    }

    function cleanPostData(post) {
      post.preview = parseText(post.preview);
      return post;
    }

    function getPostMetaData() {
      var cleanData = postMetaData;
      for (var i = 0; i < cleanData.length; i++) {
        cleanData[i].preview = parseText(cleanData[i].preview);
      }
      return cleanData;
    }

    function getPostData(titlePath) {
      for (var i = 0; i < postMetaData.length; i++) {
        if (titlePath == postMetaData[i].titlePath) return cleanPostData(postMetaData[i]);
      }
      return null;
    }

    return factory;
  }
}());
