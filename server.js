var express = require('express');
var app = express();
port = process.argv[2] || 8000;

app.configure(function () {
	app.use(
        "/", //the URL throught which you want to access to you static content
        express.static(__dirname) //where your static content is located in your filesystem
        );
});


app.get('/customers/:id', function(req,res){
	var customerId = parseInt(req.params.id);
	var data = {};
	for(var i=0,len=customers.length;i<len;i++){
		if(customers[i].id === customerId){
			data = customers[i];
			break;
		}
	}
	res.json(data);
});

app.get('/customers', function(req,res){
	res.json(customers);
});

app.get('/orders', function(req, res){
	var orders=[];
	for(var i=0, len=customers.length;i<len;i++){
		if(customers[i].orders){
			for(var j=0,orderslen=customers[i].orders.length;j<orderslen;j++){
				orders.push(customers[i].orders[j]);
			}
		}
	}
	res.json(orders);
});

app.delete('/customers/:id', function(req, res){
	var customerId=parseInt(req.params.id);
	var data={status: true};
	for(var i=0,len=customers.length;i<len;i++){
		if(customers[i].id ===customerId){
			customers.splice(i,1);
			data = { status: true };
			break;
		}
	}
	res.json(data);
});


app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");

var customers=[{id: 1, joined: '1995-03-28',name:'Dave',City:'Seatle', orderTotal:101.50, orders:[{id:1,product: 'shoes',total:9.9}]},
{id: 2, joined: '2001-05-15',name:'Zed',City:'San Diego', orderTotal:20.50, orders:[{id:2,product: 'celphone',total:1000}]},
{id: 3, joined: '1999-03-11',name:'Dell',City:'New York', orderTotal:80.50, orders:[{id:3,product: 'computer',total:120.2}]},
{id: 4, joined: '2005-12-21',name:'Master',City:'COlima', orderTotal:60.50, orders:[{id:4,product: 'nike',total:403.50}]},
{id: 5, joined: '2010-11-06',name:'Octor',City:'Peru', orderTotal:99999.50, orders:[{id:5,product: 'lol',total:40.50},{id:6,product: 'wow',total:40.50}]}];
