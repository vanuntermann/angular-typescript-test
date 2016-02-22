import {IStateProvider} from 'angular-ui-router';
import {PlacesController} from './places.controller.ts';
const templateUrl = require('./places.html');

module Places {
    
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('places', {
                url: '/places',
                templateUrl: templateUrl,
                controller: PlacesController,
                controllerAs: "placesController"
            });
    }
}

export = Places;