var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var LecturesController = (function () {
            function LecturesController() {
                var _this = this;
                this.datePattern = "/(\d{2})\/(\d{2})\/(\d{4})/;";
                this.getRowClass = function (classObject) {
                    var date = new Date(classObject.date.replace(_this.datePattern, "$3/$02/$1"));
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
                            },
                            {
                                "name": 'Proposal Feedback',
                                "link": 'https://docs.google.com/document/d/1we4VxLXi1Ywfcaere2z1zyuP3zEk5zWRLU_MIxh_SGE/edit?usp=sharing'
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
                        "topic": 'The rest of Graphics in another 90 minutes',
                        "recording": 'https://youtu.be/MxxumFDt6Ek',
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
                        "topic": 'Three.js Demos and Getting Started',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '01/31/17',
                        "topic": 'Noise and Three.js Gaze Input',
                        "recording": 'https://youtu.be/ejTNjYWsIwU',
                        "assignments": []
                    },
                    {
                        "date": '02/02/17',
                        "topic": 'Git Review and Unreal Engine 4',
                        "recording": 'https://youtu.be/6AZ38Nw1ipk',
                        "assignments": []
                    },
                    {
                        "date": '02/07/17',
                        "topic": 'Unreal Engine 4: Game Logic',
                        "recording": 'https://youtu.be/t3lYjhQAxsg',
                        "assignments": [
                            {
                                "name": 'Unreal Project',
                                "link": 'https://drive.google.com/open?id=1I17tjsy-qVVMze_oYj_T5sR8Ngh3juRNgI0b-ZbnZ1U'
                            }
                        ]
                    },
                    {
                        "date": '02/09/17',
                        "topic": 'Unreal Engine 4: Hands on C++',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/14/17',
                        "topic": 'Unreal Engine 4: Rendering, Particles, and Collisions',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/16/17',
                        "topic": 'Alpha Game Demos, Unreal Engine 4: Networking/Multiplayer',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/21/17',
                        "topic": 'Beta Game Demos, Feedback, and Work Session',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/23/17',
                        "topic": 'Unreal Engine 4: VR Design Optimizations',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/28/17',
                        "topic": 'Final Game Demos',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '03/02/17',
                        "topic": 'CLASS CANCELLED - Staff at GDC',
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