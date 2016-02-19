import {SolicitudSimilar} from "../solicitudes/solicitud.similar.ts";

const templateUrl = require('./reclamos.html');


module Reclamos {

    export class Controller {
        solicitudesSimilares:SolicitudSimilar[];
        title: string="hello";

        getTitle():string {
            return `${this.title} -- ${this.solicitudesSimilares[0].nombrePrestacion}`;
        }
    }


    export let reclamosComponent =  {
            bindings: {
                solicitudesSimilares : '=solicitudes'
            },
            templateUrl: templateUrl,
            controller: Controller
    };

}
export = Reclamos;
