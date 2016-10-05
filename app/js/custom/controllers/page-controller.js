var app = angular.module('myApp', []);

app.controller('pageCtrl', function($scope) {


	function init() {
		$scope.message = "Hello from pageCtrl";
	}

	init();
});
