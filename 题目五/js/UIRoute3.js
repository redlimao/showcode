var routerApp = angular.module('routerApp',['ui.router']);
routerApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/index');
	$stateProvider	
		.state('index',{
			url : '/index',
			views : {
				'' : {
					templateUrl : 'tpls3/index.html'
				},
				'topbar@index' : {
					templateUrl : 'tpls3/'
				}
			}
		})
})