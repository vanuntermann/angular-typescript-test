import {PeopleService} from './people.service.ts'

module People {

    export class PeopleController {

        private people;

        /*@ngInject*/
        constructor(private peopleService: PeopleService) {
            this.getPeople();
        }

        getPeople() {
            return this.peopleService.getPeople().then((data) => {
                this.people = data;
            });
        }

    }
}

export = People;