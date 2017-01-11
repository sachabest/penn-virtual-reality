var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var LecturesController = (function () {
            function LecturesController() {
                this.classes = [
                    {
                        "date": '01/12/17',
                        "topic": 'Introduction and Demos',
                        "recording": 'none',
                        "assignments": ''
                    },
                    {
                        "date": '01/17/17',
                        "topic": 'Graphics in 90 Minutes',
                        "recording": 'none',
                        "assignments": ''
                    },
                    {
                        "date": '01/24/17',
                        "topic": 'Three.js basics and OpenGL',
                        "recording": 'none',
                        "assignments": ''
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