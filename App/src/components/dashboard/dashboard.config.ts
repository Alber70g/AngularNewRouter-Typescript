module app.dashboard {
	'use strict';
	
	angular
		.module('app.dashboard')
		.config(config);
		
	config.$inject = ['$router'];
	function config($router: any): void {
		$router.config([
			{ path: '/dashboard', component: 'app.dashboard' }
		]);
	}
}