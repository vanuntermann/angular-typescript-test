import 'usig.mapa.interactivo.js';
import 'usig.punto.js';

module Mapa {

    export function usigMapDirective() {
        return {
            restrict: 'E',
            scope: {
                width: "=",
                height: "="
            },
            template: `<div id="usigMap"></div>`,
            link: (scope, element, attrs) => {
                $('#usigMap').css('width', scope.width).css('height', scope.height);

                const miMapa = new usig.MapaInteractivo('usigMap', {
                    rootUrl: '../',
                    zoomBar: false,
                    onReady: () => {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((position) => {
                                miMapa.goTo(new usig.Punto(position.coords.latitude,position.coords.longitude), true);
                            });
                        }
                  }
                });
            }
        };
    }

}
export = Mapa;