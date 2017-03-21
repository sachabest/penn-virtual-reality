namespace cis568.main {

    export class ProjectsController {

        constructor(private $http: ng.IHttpService) {            
        }

        public getThreeProjects() {
            return this.$http.get('/api/projects/three').then((projects) => {
                return projects;
            });
        }
    }

    getModule().controller("ProjectsController", HomeController);
}