(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('ng-app')
		.service('ContactService', ProfileService);

		function ContactService() {
			var CatactServiceTitle = "This is a service Title coming from ContactService!";


			return {
				profileServiceTitle
			}
		}

})();