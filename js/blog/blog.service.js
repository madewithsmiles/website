(function(){
  angular
    .module('MB')
    .factory('BlogService', BlogService);

  BlogService.$inject = ['DateService', 'URIService'];

  function BlogService(DateService, URIService){
    var factory = {
      getPostMetaData: getPostMetaData,
      getPostData: getPostData
    };

    var postMetaData = [
      {
        path: "2-22-2017/nlp-with-stella",
        title: "Natural Language Processing with Stella",
        author: "Felix Su",
        date: DateService.blogDate(2,22,2017),
        tags: ["Project Luna", "NLP", "Speech Recognition", "Hack Night"],
        category: "Hack Night 2",
        preview: "At Google Cloud, we’re working closely with the healthcare industry to provide the technology and tools that help create better patient experiences, empower care teams to work together and accelerate research. We're focused on supporting the digital transformation of our healthcare customers through data management at scale and advancements in machine learning for timely and actionable insights."
      },
      {
        path: "2-26-2017/sherlock-facial-recognition",
        title: "Sherlock Facial Recognition",
        author: "Peter Lee",
        date: DateService.blogDate(2,26,2017),
        tags: ["Project Sherlock", "Face Recognition", "Hand Tracking", "Hack Night"],
        category: "Tech Tutorial 3",
        preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor urna in facilisis dictum. Aliquam fermentum quam magna, vitae lacinia risus bibendum ac. Integer eget scelerisque purus. Donec non elementum justo. Suspendisse id est vel odio porta sollicitudin a eget odio. Quisque ultricies euismod purus eu sodales. Pellentesque sed accumsan augue. Vestibulum id ullamcorper turpis, tristique mollis elit. Mauris quis venenatis dui, non euismod nibh. Integer efficitur nulla vitae venenatis tincidunt. Integer blandit consectetur metus quis mattis. Sed tellus neque, vestibulum eu velit ut, consequat semper sapien."
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

    function getPostData(id) {
      for (var i = 0; i < postMetaData.length; i++) {
        if (id == URIService.encode(postMetaData[i].path)) return cleanPostData(postMetaData[i]);
      }
      return null;
    }

    return factory;
  }
}());
