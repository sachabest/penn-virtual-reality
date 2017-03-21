var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var ProjectsController = (function () {
            function ProjectsController($http) {
                this.$http = $http;
            }
            ProjectsController.prototype.getThreeProjects = function () {
                return this.$http.get('/api/projects/three').then(function (projects) {
                    return projects;
                });
            };
            return ProjectsController;
        }());
        main.ProjectsController = ProjectsController;
        main.getModule().controller("ProjectsController", main.HomeController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=projects.controller.js.map