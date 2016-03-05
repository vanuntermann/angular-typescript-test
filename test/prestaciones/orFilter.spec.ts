let jsc = require('jsverify');
import {Prestacion} from '../../src/prestaciones/prestacion.ts';
import {orFilter} from '../../src/prestaciones/orFilter.ts';
import * as _ from 'lodash';

describe("orFilter", function () {

    let prestacionArb = jsc.record({ codigo: jsc.nestring , concepto: jsc.nestring, rubro: jsc.nestring,
        palabrasClaves: jsc.nestring });
    let prestacionesArb = jsc.array(prestacionArb);

    jsc.property("filter", prestacionesArb, jsc.string, jsc.string,
        function (prestaciones: Prestacion[], word: string, word2: string) {
            let prestacion1 = {codigo: "codigo" , concepto: "concepto".concat(word), rubro: "rubro",
                palabrasClaves: "palabra"};
            let prestacion2 = {codigo: "codigo" , concepto: "concepto", rubro: "rubro ".concat(word),
                palabrasClaves: "palabra"};
            let prestacion3 = {codigo: "codigo" , concepto: "concepto", rubro: "rubro",
                palabrasClaves: "palabra".concat(word)};
            let plist = prestaciones.concat([prestacion1, prestacion2, prestacion3]);

            return contains(orFilter()(plist, word), [prestacion1, prestacion2, prestacion3]);

            function contains(xs, ys) {
                return ys.every(function (y) {
                    return xs.some(function (x) {
                        return _.isEqual(x,y);
                    })
                })
            }
        });
});