var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var LecturesController = (function () {
            function LecturesController() {
                var _this = this;
                this.datePattern = "/(\d{2})\/(\d{2})\/(\d{4})/;";
                this.getRowClass = function (classObject) {
                    var date = new Date(classObject.date.replace(_this.datePattern, "$3/$2/$1"));
                    var today = new Date();
                    if (date.toDateString() == today.toDateString()) {
                        return "success";
                    }
                    else if (date < today) {
                        return "active";
                    }
                    return "";
                };
                this.classes = [
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
                        "recording": 'none',
                        "assignments": [
                            {
                                "name": 'Go to PennApps',
                                "link": 'https://pennapps.com'
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
                    },
                    {
                        "date": '01/26/17',
                        "topic": 'Advanced Three.js',
                        "recording": 'none',
                        "assignments": []
                    }
                ];
            }
            return LecturesController;
        }());
        main.LecturesController = LecturesController;
        main.getModule().controller("LecturesController", LecturesController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=lectures.controller.js.map