import * as angular from 'angular';
import 'angular-ui-router';
import 'satellizer';
import routes from './app.routes.ts';
import {people} from '../people/people.module.ts'
import {login} from '../login/login.module.ts'
import {solicitudesSimilares} from '../solicitudes/solicitudes.similares.module.ts';
import {places} from '../places/places.module.ts';
import {prestaciones} from '../prestaciones/prestaciones.module.ts';
import {versionComponent} from './version.component.ts';

angular.module('app', ['ui.router', 'satellizer', login, people, solicitudesSimilares, places, prestaciones])
    .component('attVersion', versionComponent)
    .config(routes);
