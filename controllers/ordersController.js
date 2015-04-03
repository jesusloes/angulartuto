(function(){
  var OrdersController = function($scope, $routeParams, customersFactory){
    $scope.customer = null;
    var customerId = $routeParams.customerId;
        /*Defaults*/
        function init(){
           customersFactory.getCustomer(customerId)
              .success(function(customer){
                $scope.customer = customer;
              })
              .error(function(data,status,headers,config){

              });
          }
          init();
        };
      angular.module('customersApp').controller('OrdersController', OrdersController);
}());
