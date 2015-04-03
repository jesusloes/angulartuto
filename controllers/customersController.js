(function(){
  var CustomersController = function($scope , customersFactory){
    /*Defaults*/
    $scope.sortBy = 'name';
    $scope.reverse = false;
    $scope.customers=[];
    function init(){
      customersFactory.getCustomers()
      .success(function(customers){
        $scope.customers = customers;
      })
      .error(function(data,status,headers,config){

      });
    }
    init();

    $scope.doSort = function(propName){
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;

    };

    $scope.deleteCustomer=function(customerId){
      customersFactory.deleteCustomer(customerId)
      .success(function(status){
        if(status){
          for(var i=0, len=$scope.customers.length;i<len;i++){
            if($scope.customers[i].id===customerId){
              $scope.customers.splice(i,1);
            }
          }
        }else{
          $window.alert('cant delete customer');
        }
      })
      .error(function(data,status,headers,config){

      });
    };
    
  };
  angular.module('customersApp').controller('CustomersController', CustomersController);
}());
