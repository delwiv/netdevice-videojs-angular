angular.module('App').config([ 
	'$stateProvider', '$urlRouterProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider){
		$urlRouterProvider.otherwise('/');
		// $locationProvider.html5Mode(true);

		$stateProvider  
		.state('index', {
			url: '/',
			views: { 
				'@': {
					templateUrl:'partials/layout.html',
				},
				// 'navbar@index': { templateUrl: 'partials/navbar.html'},
				'video-player@index': { templateUrl: 'partials/video.html'},
				'footer@index': { templateUrl: 'partials/footer.html'}			}
		});
	}]);