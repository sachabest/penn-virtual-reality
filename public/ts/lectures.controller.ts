namespace cis568.main {

    export class LecturesController {

        constructor() {            
        }

        private classes = [
            {
                "date": '01/12/17',
                "topic": 'Introduction and Demos',
                "recording": 'https://www.youtube.com/watch?v=bY4wAlCicf8',
                "assignments": [
                    {
                        "name": 'Survey',
                        "link": 'foo'
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
                        "link": 'foo'
                    }
                ]
            },
            {
                "date": '01/24/17',
                "topic": 'Three.js basics and OpenGL',
                "recording": 'none',
                "assignments": []
            }
        ];
    }

    getModule().controller("LecturesController", LecturesController);
}