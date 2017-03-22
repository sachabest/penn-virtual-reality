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
                        "topic": 'CLASS CANCELLED',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/14/17',
                        "topic": 'Unreal Engine 4: BSPs and Materials',
                        "recording": 'https://youtu.be/RADrikOKorg',
                        "assignments": []
                    },
                    {
                        "date": '02/16/17',
                        "topic": 'Alpha Game Demos, Unreal Engine 4: Networking/Multiplayer',
                        "recording": 'https://youtu.be/P4v4UYGc4nE',
                        "assignments": []
                    },
                    {
                        "date": '02/21/17',
                        "topic": 'Unreal Engine 4: C++',
                        "recording": 'https://youtu.be/1S5IBjzD8Ck',
                        "assignments": []
                    },
                    {
                        "date": '02/23/17',
                        "topic": 'Beta Game Demos, Feedback, and Work Session',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '02/28/17',
                        "topic": 'VR Design Optimizations',
                        "recording": 'https://youtu.be/kNZvs0-LgRU',
                        "assignments": []
                    },
                    {
                        "date": '03/02/17',
                        "topic": 'Semi-Final Game Demos',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '03/16/17',
                        "topic": 'Game Design Theory: Modeling the Madness',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '03/21/17',
                        "topic": 'Final Project: Team Formation and Ideation',
                        "recording": 'none',
                        "assignments": [{
                                "name": "Final Project Plan",
                                "link": "https://docs.google.com/document/d/1z50gB10XYd0YN1UyjzmjZWBmVq7rNci6hdiS4lmDvN0/edit?usp=sharing"
                            },
                            {
                                "name": "Final Project Requirements",
                                "link": "https://docs.google.com/document/d/1dMY0CteYuMdjSTpXzI_48hEdw9d6tET6sWH5YJYTi1s/edit?usp=sharing"
                            }]
                    },
                    {
                        "date": '03/23/17',
                        "topic": 'Unreal Project Demos',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '03/28/17',
                        "topic": 'Guest Lecture: Interaction Design in VR',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '03/30/17',
                        "topic": 'Project Plan Feedback Review',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/04/17',
                        "topic": 'Modding Robo Recall',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/06/17',
                        "topic": 'Final Project: First Playtest',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/11/17',
                        "topic": 'Unreal Engine 4: Particle Systems and Rendering',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/13/17',
                        "topic": 'Final Project: Beta Playtest',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/18/17',
                        "topic": 'TBD',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/20/17',
                        "topic": 'Final Project: Last Playtest',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '04/25/17',
                        "topic": 'Surprise!',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '05/02/17',
                        "topic": 'Final Project: Final Demos',
                        "recording": 'none',
                        "assignments": []
                    },
                ];
            }
            return LecturesController;
        }());
        main.LecturesController = LecturesController;
        main.getModule().controller("LecturesController", LecturesController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=lectures.controller.js.map