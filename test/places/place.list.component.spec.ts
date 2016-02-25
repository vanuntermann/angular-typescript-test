import 'angular-mocks';
import {expect} from 'chai';
import '../../src/app/app.module.ts';
import {places} from '../../src/places/places.module.ts';

describe("placeList directive", () => {

    var $compile; 
    var $rootScope; 

    beforeEach(function () {
      angular.mock.module('app.places')
    });

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
    }));

    it("shows all places", () => {
      $rootScope.places = [{name: 'A'}, {name: 'B'}];
      var element = $compile(angular.element('<place-list places="places"></place-list>'))($rootScope);
      $rootScope.$digest();
      expect(element.text().trim()).to.equal('Place: A\n    \n        Place: B');
    });
});

