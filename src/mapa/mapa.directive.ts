import 'usig.mapa.interactivo.js';
import 'usig.punto.js';
import {Place} from "../places/place.ts";

module Mapa {

    interface Scope {
        width: number;
        height: number;
        places: Place[];
    }


    function goToCurrentPosition(miMapa:MapaInteractivo) {
        navigator.geolocation.getCurrentPosition((position) => {
            miMapa.goTo(new usig.Punto(position.coords.latitude, position.coords.longitude), true);
        });
    }

    function loadPlaces(mapa: MapaInteractivo, places: Place[]) {
        if(places) {
            places.forEach(place => mapa.addMarker(place.point));
        }
    }

    function initializeMap(map: MapaInteractivo, scope: Scope) {
        if (!navigator.geolocation) {
            console.info("navigator.geolocation not supported");
            return;
        }
        goToCurrentPosition(map);
        loadPlaces(map, scope.places);
    }

    export function usigMapDirective() {
        return {
            restrict: 'E',
            scope: {
                width: "=",
                height: "=",
                places: "="
            },
            template: `<div id="usigMap"></div>`,
            link: (scope:Scope, element, attrs) => {
                $('#usigMap').css('width', scope.width).css('height', scope.height);

                const miMapa = new usig.MapaInteractivo('usigMap', {
                    rootUrl: '../',
                    zoomBar: false,
                    onReady: () => {
                        initializeMap(miMapa, scope);
                  }
                });
            }
        };
    }

}
export = Mapa;