const templateUrl = require('./solicitudes.similares.html');

module SolicitudesSimilares {

    export function solicitudesSimilaresDirective() {
        return {
            restrict: 'E',
            scope: {
                solicitudesSimilares : '=solicitudes'
            },
            templateUrl: templateUrl
        };
    }

}
export = SolicitudesSimilares;
