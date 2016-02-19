import {SolicitudSimilar} from './solicitud.similar.ts'

module SolicitudesSimilares {

    export class SolicitudesSimilaresService {

        private url = 'api/solicitudes';

        /*@ngInject*/
        constructor(private $http:ng.IHttpService) {

        }

        all() {
            return this.$http.get<SolicitudSimilar>(this.url)
                .then((response) => response.data)
                .catch((response)=> { return console.log(response); });
        }

    }
}

export = SolicitudesSimilares;