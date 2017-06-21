(function(){
	'use strict';
	angular
		.module('ng-app')
		.controller('contactCtrl', aboutCtrl)

	function contactCtrl() {
		var vm = this;
		vm.title = "em from Contactt ctrl"

	}

})();