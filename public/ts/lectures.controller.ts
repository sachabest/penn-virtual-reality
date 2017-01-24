namespace cis568.main {

    export interface Assignment {
        name: string;
        link: string;
    }

    export interface Class {
        date: string;
        topic: string;
        recording: string;
        assignments: Assignment[];
    }
    export class LecturesController {

        constructor() {            
        }

        private datePattern = "/(\d{2})\/(\d{2})\/(\d{4})/;";

        private getRowClass = (classObject: Class) => {
            let date = new Date(classObject.date.replace(this.datePattern, "$3/$2/$1"));
            let today = new Date();
            if (date.toDateString() == today.toDateString()) {
                return "success";
            } else if (date < today) {
                return "active"
            }
            return "";
        }

        private classes: Class[] = [
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
                "recording": 'https://youtu.be/dd8OU_3ayrg',
                "assignments": [
                    {
                        "name": 'Graphics Handwritten',
                        "link": 'https://docs.google.com/document/d/1Ij3S_3zrBSl_7sbwDZeJV-Em1Fmkz2-ffyOX8SfLtyI/edit?usp=sharing'
                    }
                ]
            },
            {
                "date": '01/19/17',
                "topic": 'Teh rest of Graphics in another 90 minutes',
                "recording": 'https://youtu.be/MxxumFDt6Ek',
                "assignments": 
                [
                    {
                        "name": 'Go to PennApps',
                        "link": 'https://pennapps.com'
                    }
                ]
            },
            {
                "date": '01/24/17',
                "topic": 'Three.js basics and OpenGL',
                "recording": 'https://youtu.be/Pg8TG4M-V7o',
                "assignments": [
                    {
                        "name": 'Three.js project',
                        "link": 'https://docs.google.com/document/d/1G0a5_OgVqy5dQ9mHTtOPbZU8ibySzAVlTJY0uG3RmDA/edit?usp=sharing'
                    }
                ]
            },
            {
                "date": '01/26/17',
                "topic": 'Advanced Three.js',
                "recording": 'none',
                "assignments": 
                [

                ]
            }
        ];
    }

    getModule().controller("LecturesController", LecturesController);
}