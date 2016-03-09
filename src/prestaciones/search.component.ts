import {SearchCategory} from './search.category.ts';
const templateUrl = require('./search.html');

module Prestaciones {

    function category(title : string, elements : string[]) : SearchCategory {
      return { title: title, elements: elements };
    }

    export class SearchController {
        categories : SearchCategory[][];

        constructor() {
          this.categories = [
            [ category('Iluminación', ['Artefactos rotos', 'Cajas y cables de luz' ]),
              category('Limpieza', ['Alcantarilla y/o sumidero', 'Animales' ]) ] ,

            [ category('Calles y veredas', ['Anomalías en puesto de diarios', 'Baches' ]),
              category('Contenedores', ['Instalación', 'Limpieza' ]) ],

            [ category('Arbolado', ['Plazas y parques', 'Plantación' ]),
              category('Otras denuncias', ['Alimentos', 'BA WiFi' ]) ]
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


