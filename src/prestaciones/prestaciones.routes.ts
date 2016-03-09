import {IStateProvider} from 'angular-ui-router';
import {HomeController} from './home.controller.ts';
const templateUrl = require('./home.html');

module Places {
    
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('prestaciones', {
                url: '/prestaciones',
                templateUrl: templateUrl,
                controller: HomeController,
                controllerAs: "homeCtrl"
            });
    }
}

export = Places;
