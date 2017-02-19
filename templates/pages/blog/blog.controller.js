(function(){
    angular
        .module('MB')
        .controller('BlogCtrl', BlogCtrl)
        .directive('blogPost', blogPostDirective);

    BlogCtrl.$inject = [];

    function BlogCtrl(){
        var vm = this;
        vm.parseText = parseText;

        vm.posts = [
            {
                title: "Google Cloud at HIMSS: engaging with the healthcare and health IT community",
                author: "Felix Su",
                date: new Date(),
                tags: ["Cloud", "ML"],
                category: "Project Luna",
                text: "At Google Cloud, we’re working closely with the healthcare industry to provide the technology and tools that help create better patient experiences, empower care teams to work together and accelerate research. We're focused on supporting the digital transformation of our healthcare customers through data management at scale and advancements in machine learning for timely and actionable insights.\n\n \
                    Next week at the HIMSS Health IT Conference, we're demonstrating the latest innovations in smart data, digital health, APIs, machine learning and real-time communications from Google Cloud, Research, Search, DeepMind and Verily. Together, we offer solutions that help enable hospital and health IT customers to tackle the rapidly evolving and long standing challenges facing the healthcare industry. Here’s a preview of the Google Cloud customers and partners who are joining us at HIMSS.\n\n \
                    For customers like the Colorado Center for Personalized Medicine (CCPM) at the University of Colorado Denver, trust and security are paramount. CCPM has worked closely with the Google Cloud Platform (GCP) team to securely manage and analyze a complicated data set to identify  genetic patterns across a wide range of diseases and reveal new treatment options based on a patient’s unique DNA.\n\n \
                    And the Broad Institute of MIT and Harvard has used Google Genomics for years to combine the power, security features and scale of GCP with the Broad Institute’s expertise in scientific analysis.\n\n \
                    'At the Broad Institute we are committed to driving the pace of innovation through sharing and collaboration. Google Cloud Platform has profoundly transformed the way we build teams and conduct science and has accelerated our research,'  William Mayo, Chief Information Officer at Broad Institute told us.\n\n \
                    To continue to offer these and other healthcare customers the tools they need, today we’re announcing support for the HL7 FHIR Foundation to help the developer community advance data interoperability efforts. The FHIR open standard defines a modern, web API-based approach to communicating healthcare data, making it easier to securely communicate across the healthcare ecosystem including hospitals, labs, applications and research studies.\n\n \
                    'Google Cloud Platform’s commitment to support the ongoing activities of the FHIR community will help advance our goal of global health data interoperability. The future of health computing is clearly in the cloud, and our joint effort will serve to accelerate this transition,' said Grahame Grieve, Principal at Health Intersections, FHIR Product Lead\n\n \
                    Beyond open source, we're committed to supporting a thriving ecosystem of partners whose solutions enable customers to improve patient care across the industry.\n\n \
                    We’ve seen great success for our customers in collaboration with Kinvey, which launched its HIPAA-compliant digital health platform on GCP to leverage our cloud infrastructure and integrate its capabilities with our machine learning and analytics services.\n\n \
                    'In the past year, we’ve seen numerous organizations in healthcare, from institutions like Thomas Jefferson University and Jefferson Health that are building apps to transform care, education and research, and startups like iTether and TempTraq that are driving innovative new solutions, turn to GCP to accelerate their journey to a new patient-centric world,” said Sravish Sridhar, CEO of Kinvey.\n\n \
                    We’ve also published a new guide for HIPAA compliance on GCP, which describes our approach to data security on GCP and provides best-practice guidance on how to securely bring healthcare workloads to the cloud.\n\n \
                    Stop by our booth at HIMSS to hear more about how we’re working with the healthcare industry across Google. We would love to learn how we can engage with you on your next big idea to positively transform healthcare."
            }
        ]

        function parseText(text) {
            console.log(text.replace(/^ +| +$/gm, ""));
            return text.replace(/^ +| +$/gm, "");
        }
    }

    function blogPostDirective() {
        return {
            scope: {
                post: '=post'
            },
            templateUrl: './post.html'
        };
    }

}());
