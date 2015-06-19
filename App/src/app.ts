
module TTS {
    export class AppController {
    	/*
    	 * $router : any ANY SHOULD NOT BE USED, but I can't find a d.ts for angular-new-router...
    	 */
		constructor($router : any) {
			$router.config([
				{ path: '/', component: 'api' },
				{ path: '/api', component: 'api' }
			]);
		}
	}
	angular.module("templates", []);
	
	angular.module('ttsApp', [
		'ngNewRouter',
		'ttsApp.api'
	]);
	angular.module('ttsApp').controller('AppController', ['$router', TTS.AppController]);

}