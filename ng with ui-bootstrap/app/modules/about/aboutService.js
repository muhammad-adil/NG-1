(function(){
	'use strict';

	/** @ngInject */
	angular
		.module('ng-app')
		.service('AboutService', ProfileService);

		function AboutService() {
			var aboutServiceTitle = "This is a service Title coming from AboutService!";


			return {
				aboutServiceTitle
			}
		}

})();