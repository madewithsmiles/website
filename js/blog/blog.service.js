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
      }
      // {
      //   datePath: "2-26-2017",
      //   titlePath: "sherlock-facial-recognition",
      //   title: "Sherlock Facial Recognition",
      //   author: "Peter Lee",
      //   date: DateService.blogDate(2,26,2017),
      //   tags: ["Project Sherlock", "Face Recognition", "Hand Tracking", "Hack Night"],
      //   category: "Tech Tutorial 3",
      //   preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor urna in facilisis dictum. Aliquam fermentum quam magna, vitae lacinia risus bibendum ac. Integer eget scelerisque purus. Donec non elementum justo. Suspendisse id est vel odio porta sollicitudin a eget odio. Quisque ultricies euismod purus eu sodales. Pellentesque sed accumsan augue. Vestibulum id ullamcorper turpis, tristique mollis elit. Mauris quis venenatis dui, non euismod nibh. Integer efficitur nulla vitae venenatis tincidunt. Integer blandit consectetur metus quis mattis. Sed tellus neque, vestibulum eu velit ut, consequat semper sapien."
      // }
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
