module TTS.API {

	export interface Person extends ng.resource.IResource<Person> {
        Id: Int32Array;
    	Naam: String;
    	Woonplaats: String;
    }
}