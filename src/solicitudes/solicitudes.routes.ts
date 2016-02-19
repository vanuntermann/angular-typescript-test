import {IStateProvider} from 'angular-ui-router';
import {SolicitudesSimilaresController} from './solicitudes.similares.controller.ts';
import {SolicitudesSimilaresService} from './solicitudes.similares.service.ts';
const templateUrl = require('./solicitudes.html');


module SolicitudesSimilares {
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('solicitudes', {
                url: '/solicitudes',
                templateUrl: templateUrl,
                controller: SolicitudesSimilaresController,
                controllerAs: 'solicitudesSimilaresCtrl',
                resolve: {
                    solicitudesSimilares: (solicitudesSimilaresService : SolicitudesSimilaresService) => {
                        return solicitudesSimilaresService.all();
                    }
                }
            });
    }
}

export = SolicitudesSimilares;