(function(){
	'use strict';
	
	angular
				.module('ng-app')
				.controller('MainController', MainController);

	function MainController() {
		var vm = this;
		vm.title = "Adil's ng-app";
		
	}

})();