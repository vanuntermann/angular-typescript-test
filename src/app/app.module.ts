import * as angular from 'angular';
import 'angular-ui-router';
import routes from './app.routes.ts';
import {people} from '../people/people.module.ts'
import {solicitudesSimilares} from '../solicitudes/solicitudes.similares.module.ts';


angular.module('app', ['ui.router', people, solicitudesSimilares])
    .config(routes);
