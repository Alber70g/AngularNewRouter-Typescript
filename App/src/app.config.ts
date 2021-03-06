(():void => {
	'use strict';

	angular
		.module('app')
		.config(config);

	config.$inject = ['$router'];

	function config($router: any): void {
		$router.config([
			{ path: '/', component: 'home' }
		]);
	}
})();