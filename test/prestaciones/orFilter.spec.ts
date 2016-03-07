let jsc = require('jsverify');
import {Prestacion} from '../../src/prestaciones/prestacion.ts';
import {orFilter} from '../../src/prestaciones/orFilter.ts';
import * as _ from 'lodash';

describe("orFilter", function () {

    let prestacionArb = jsc.record({ codigo: jsc.nestring , concepto: jsc.nestring, rubro: jsc.nestring,
        palabrasClaves: jsc.nestring });
    let prestacionesArb = jsc.array(prestacionArb);

    jsc.property("filter", prestacionesArb, jsc.string, jsc.nestring,
        function (prestaciones: Prestacion[], palabra: string, anyString: string) {
            let prestacionNueva = crearPrestacion("concepto", "concepto-value ".concat(palabra), anyString);
            let prestacion1 = {codigo: anyString , concepto: "concepto".concat(palabra), rubro: anyString,
                palabrasClaves: anyString};
            let prestacion2 = {codigo: anyString , concepto: anyString, rubro: "rubro ".concat(palabra),
                palabrasClaves: anyString};
            let prestacion3 = {codigo: anyString , concepto: anyString, rubro: anyString,
                palabrasClaves: "palabra".concat(palabra)};
            let plist = prestaciones.concat([prestacion1, prestacion2, prestacion3, prestacionNueva]);

            return contains(orFilter()(plist, palabra), [prestacion1, prestacion2, prestacion3, prestacionNueva]);
        });


    function crearPrestacion(key: string, valueOfKey: string, valueOfRestOfKeys: string ) : Prestacion {
        let prestacion: Prestacion = {codigo: "" , concepto: "", rubro: "", palabrasClaves: ""};
        Object.keys(prestacion).forEach(key => prestacion[key] = valueOfRestOfKeys);
        prestacion[key] = valueOfKey;
        return prestacion;
    }

    function contains(xs, ys) {
        return ys.every(function (y) {
            return xs.some(function (x) {
                return _.isEqual(x,y);
            })
        })
    }

});
