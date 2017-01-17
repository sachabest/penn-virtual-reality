namespace cis568.main {

    export class LecturesController {

        constructor() {            
        }

        private classes = [
            {
                "date": '01/12/17',
                "topic": 'Introduction and Demos',
                "recording": 'https://youtu.be/dcMHIaO-K-4',
                "assignments": [
                    {
                        "name": 'Survey',
                        "link": 'https://docs.google.com/document/d/10VW1gqpBvRblBfY7fMgbAzmb7kFKb82e3Izhps_t7KI/edit?usp=sharing'
                    }
                ]
            },
            {
                "date": '01/17/17',
                "topic": 'Graphics in 90 Minutes',
                "recording": 'https://www.youtube.com/watch?v=MNQFxZWHWVA',
                "assignments": [
                    {
                        "name": 'Graphics Handwritten',
                        "link": 'https://docs.google.com/document/d/1Ij3S_3zrBSl_7sbwDZeJV-Em1Fmkz2-ffyOX8SfLtyI/edit?usp=sharing'
                    }
                ]
            },
            {
                "date": '01/24/17',
                "topic": 'Three.js basics and OpenGL',
                "recording": 'none',
                "assignments": [
                    {
                        "name": 'Three.js project',
                        "link": ''
                    }
                ]
            }
        ];
    }

    getModule().controller("LecturesController", LecturesController);
}