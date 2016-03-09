const templateUrl = require('./search.html');

module Prestaciones {

    interface Category { title : string, elements : string[] }

    function category(title : string, elements : string[]) : Category {
      return { title: title, elements: elements };
    }

    export class SearchController {
        categories : Category[];

        constructor() {
          this.categories = [
            category('Arbolado', ['Plazas y parques', 'Plantación' ]),
            category('Limpieza', ['Alcantarilla y/o sumidero', 'Animales' ])
          ];
        }
    }

    export let searchComponent =  {
        bindings: {
        },
        templateUrl: templateUrl,
        controller: SearchController
    };

}
export = Prestaciones;


