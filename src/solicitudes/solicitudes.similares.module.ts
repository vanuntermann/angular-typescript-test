import {routes} from './solicitudes.routes.ts';
import {SolicitudesSimilaresController} from './solicitudes.similares.controller.ts';
import {SolicitudesSimilaresService} from './solicitudes.similares.service.ts';
import {solicitudesSimilaresDirective} from './solicitudes.similares.directive.ts';
import {reclamosComponent} from '../component/reclamos.component.ts';
import {usigMapDirective} from '../mapa/mapa.directive.ts';

module SolicitudesSimilares {

    export const solicitudesSimilares = angular.module('app.solicitudes.similares', ['ui.router', 'ui.bootstrap'])
        .config(routes)
        .controller("SolicitudesSimilaresController", SolicitudesSimilaresController)
        .service("solicitudesSimilaresService", SolicitudesSimilaresService)
        .directive("solicitudesSimilares", solicitudesSimilaresDirective)
        .component("reclamos", reclamosComponent)
        .directive("usigMapa", usigMapDirective)
        .name;
}

export = SolicitudesSimilares;