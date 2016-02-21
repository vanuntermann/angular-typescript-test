import {Ciudadano} from "./ciudadano.ts"

module People {

    export class PeopleService {

        private url = 'api/ciudadanos';

        /*@ngInject*/
        constructor(private $http:ng.IHttpService) {

        }

        getPeople() {
            return this.$http.get<Ciudadano>(this.url)
                .then((response) => response.data)
                .catch((response)=> {
                    return console.log(response);
                });
        }

        create(c: Ciudadano) {
            return this.$http.post<Ciudadano>(this.url, c).then((response) => response.data)
        }
    }
}

export = People;