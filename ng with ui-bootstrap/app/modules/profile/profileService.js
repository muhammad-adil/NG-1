(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('ng-app')
		.service('ProfileService', ProfileService);

		function ProfileService() {
			var profileServiceTitle = "This is a service Title coming from ProfileService!";


			return {
				profileServiceTitle
			}
		}

})();