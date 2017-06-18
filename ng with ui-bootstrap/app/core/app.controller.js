(function(){
	'use strict';
	
	angular
				.module('a-ng-app')
				.controller('MainController', MainController);

	function MainController() {
		var vm = this;
		vm.title = "Adil's ng-app";
		
	}

})();