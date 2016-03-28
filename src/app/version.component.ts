module Version {

    declare var __VERSION__ : string;
    
    export let versionComponent =  {
        bindings: {
            places : '='
        },
        template: '<div>{{ $ctrl.version }}</div>',
        controller: function () {
          this.version = __VERSION__;
          console.log('versionComponent wahoo!!!', this.version);
        }
    };
}

export = Version;

