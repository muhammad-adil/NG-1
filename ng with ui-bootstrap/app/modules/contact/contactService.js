(function(){
	'use strict';
	angular
		.module('a-ng-app')
		.controller('aboutCtrl', aboutCtrl)

	function aboutCtrl() {
		var vm = this;
		vm.title = "em from About ctrl"

	}

})();