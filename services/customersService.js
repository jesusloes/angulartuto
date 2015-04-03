(function(){
	var customersService = function(){
		var len;
		var customers=[{id: 1, joined: '1995-03-28',name:'Dave',City:'Seatle', orderTotal:101.50, orders:[{id:1,product: 'shoes',total:9.9}]},
		{id: 2, joined: '2001-05-15',name:'Zed',City:'San Diego', orderTotal:20.50, orders:[{id:2,product: 'celphone',total:1000}]},
		{id: 3, joined: '1999-03-11',name:'Dell',City:'New York', orderTotal:80.50, orders:[{id:3,product: 'computer',total:120.2}]},
		{id: 4, joined: '2005-12-21',name:'Master',City:'COlima', orderTotal:60.50, orders:[{id:4,product: 'nike',total:403.50}]},
		{id: 5, joined: '2010-11-06',name:'Octor',City:'Peru', orderTotal:99999.50, orders:[{id:5,product: 'lol',total:40.50},{id:6,product: 'wow',total:40.50}]}];
		

		this.getCustomers=function(){
			return customers;
		};
		
		this.getCustomer=function(customerId){
			for (var i=0,len=customers.length; i<len;i++){
				if(customers[i].id === parseInt(customerId)){
					return customers[i];
				}
			}
			return {};
		};


	};
	angular.module('customersApp').service('customersService', customersService);
}());