(function (){
	'use strict'

		angular.module('pracangular')
				.config('routeConfig');


				function routeConfig($stateProvider, $urlRouteProvider ){
					$stateProvider
						.state('home', {
							url:'/',
							templateUrl: 'app/modules/home/home.html',
							controller: 'HomeController',
							controllerAs: 'vm'
						})
						.state('about' , {
							url:'/about',
							templateUrl: 'app/modules/about/about.html',
							controller: 'AboutController',
							controllerAs: 'vm'
						})
				}



}) ();