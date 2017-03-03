import {
    bluetechUI
} from './../../../../dist/js/bluetechUI.min.js';
// import angular from 'angular/angular.min.js';
import {
    uiRouter
} from 'angular-ui-router/release/angular-ui-router.min.js';
import {
    yvvone
} from './config/RouteConfig';
import {
    ActivityGroup
} from './../yvonne/components/ActivityGroup.js';



export const bluetechUIYvonne = angular.module('bluetechUI.yvonne', ['bluetechUI', 'ui.router'])
    .config(($stateProvider, $urlServiceProvider) => new yvvone($stateProvider, $urlServiceProvider))
    .component('activityGroup', ActivityGroup)
    // .controller('demoCtrl', () => new DemoCtrl())
    .name;