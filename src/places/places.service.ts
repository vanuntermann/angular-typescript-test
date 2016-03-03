import {Place} from './place.ts';

module Places {

    export class PlacesService {

        private url = 'api/places';

        /*@ngInject*/
        constructor(private $http:ng.IHttpService) {

        }

        all() {
            return this.$http.get<Place[]>(this.url)
                .then((response) => response.data)
        }

    }
}

export = Places;