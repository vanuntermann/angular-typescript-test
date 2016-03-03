import {Place} from './place.ts';
import {PlacesService} from './places.service.ts';

module Places {

    interface Scope {
        places: Place[];
    }

    export class PlacesController {
        private places: Place[] = [];

        /*@ngInject*/
        constructor(private $scope, private placesService:PlacesService) {
            $scope.places = [];
            $scope.selected;
            this.loadPlaces(placesService, $scope);
        }

        private loadPlaces(placesService: PlacesService, $scope) {
            placesService.all().then(data => {
                this.places = data;
                $scope.places = data;
            });
        };
    }
}

export = Places;