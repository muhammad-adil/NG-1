(function(){
	'use strict';
	angular
		.module('a-ng-app')
		.controller('contactCtrl', aboutCtrl)

	function contactCtrl() {
		var vm = this;
		vm.title = "em from Contactt ctrl"

	}

})();