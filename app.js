(function(){
	var app = angular.module('customersApp',['ngRoute','ngAnimate']);

	app.config(function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'views/customers.html',
			controller:'CustomersController'
		}).when('/orders/:customerId',{
			templateUrl:'views/orders.html',
			controller:'OrdersController'
		}).when('/orders',{
			templateUrl:'views/allorders.html',
			controller:'AllOrdersController'
		}).otherwise({ redirectTo: '/'});
	});
})();
