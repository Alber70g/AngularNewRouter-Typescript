/// <reference path="../models/Person.ts" />

module TTS.API {
	export interface IPersonResource extends ng.resource.IResourceClass<Person> {

    }

	angular.module('ttsApp.api').factory('PersonResource', ['$resource',
		($resource: ng.resource.IResourceService): IPersonResource => {
			return <IPersonResource> $resource('/api/person/:id', { id: '@id' }, {

			});
		}]);
}