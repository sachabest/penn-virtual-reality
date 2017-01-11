namespace cis568.main {

    export class AppController {

        public constructor(private $state: ng.ui.IStateService) {}

    }

    getModule().controller("AppController", AppController);
}