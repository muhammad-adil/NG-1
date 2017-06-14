(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('a-ng-app')
		.service('HomeService', HomeService);

		function HomeService() {
			var serviceTitle = "This is a service Title coming from HomeService!";


			return {
				serviceTitle 
			}
		}

})();