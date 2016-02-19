import {SolicitudSimilar} from './solicitud.similar.ts'

module SolicitudesSimilares {

    export class SolicitudesSimilaresController {


        /*@ngInject*/
        constructor(private solicitudesSimilares: SolicitudSimilar[]) {

        }

        getSolicitudesSimilares() {
            return this.solicitudesSimilares;
        }

    }
}

export = SolicitudesSimilares;