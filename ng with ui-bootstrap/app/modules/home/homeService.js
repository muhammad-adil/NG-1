(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('ng-app')
		.service('HomeService', HomeService);

		function HomeService() {
			var serviceTitle = "This is a service Title coming from HomeService!";


			return {
				serviceTitle 
			}
		}

})();