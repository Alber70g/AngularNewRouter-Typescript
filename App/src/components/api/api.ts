/// <reference path="services/PersonResource.ts" />

module TTS.API {

    angular
        .module('ttsApp.api', ['ngResource', 'ngNewRouter'])
        .controller('ApiController', ApiController);

    ApiController.$inject = ['PersonResource'];

    function ApiController(PersonResource : IPersonResource) : void {
        var vm = this;
        var people: Array<Person> = PersonResource.query();
        vm.users = people;
    }
}