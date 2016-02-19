import {Ciudadano} from "./ciudadano.ts";
import {IStateService} from 'angular-ui-router';
import {PeopleService} from './people.service';

module People {

    export class CreateController {

        private person : Ciudadano;

        /*@ngInject*/
        constructor(private peopleService: PeopleService, private $state : IStateService) {

        }

        create(c : Ciudadano) {
            return this.peopleService.create(this.person).then((data) => {
                this.person = data;
                this.$state.go("people");
            });
        }

    }
}

export = People;