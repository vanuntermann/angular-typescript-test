import {routes} from "./login.routes.ts";
import * as angular from "angular";

module Login {

    export const login = angular.module('app.login', ['ui.router', 'satellizer'])
        .config(routes)
        .controller('LoginCtrl', function($scope, $auth, $window) {

            $scope.authenticate = function(provider) {
                $auth.authenticate(provider).then(function (successfulRequest) {
                  // we have to do this (or something similar) ourselves:
                  $window.location.href = successfulRequest.config.data.redirectUri;
                  // satellizer is not meant to redirect the main window for us.
                });
            };

        })
        .name;
}

export = Login;
