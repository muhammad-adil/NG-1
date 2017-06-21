(function(){
	'use strict';
	
  angular
    .module('ng-app')
    .config(routeConfig);

    function routeConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'app/modules/home/home.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
          })
          .state('about', {
            url: '/about',
            templateUrl: 'app/modules/about/about.html',
            controller: 'aboutCtrl',
            controllerAs: 'vm'
          })
          .state('contact', {
	    url: '/contact',
            templateUrl: 'app/modules/contact/contact.html',
            controller: 'contactCtrl',
            controllerAs: 'vm'
          })
      }
})();
