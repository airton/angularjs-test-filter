(function(){
	'use strict';

	// App
	var app = angular.module("app",[]);

	// Ctrl
	app.controller("appCtrl", ['getProducts', function(getProducts){
		var self = this;

		self.name = "airton";

		// Products
		self.products = getProducts.getProducts();

		// Cart
		self.cart = getProducts.getCart();

		// Add item Cart
		//self.addItem = getProducts.addItem();

		// Filter
		self.filter = {};
		self.filterByCategory = filterByCategory;
		function filterByCategory(field) {
			return self.filter[field.type] || noFilter(self.filter);
		}

		function noFilter(filterObj) {
			return Object.
			keys(filterObj).
			every(function (key) { return !filterObj[key]; });
		}

	}]);

	// Factory
	app.factory("getProducts", [function(){
		
		// Placeholder
		var placeholderImg = 'http://fakeimg.pl/250x100/';
		
		// itens Product
		var _itensProducts = [
			{
				id: 1,
				name: "Nexus 6",
				price: 1450.00,
				photo: placeholderImg,
				type: "wood"
			},
			{
				id: 2,
				name: "Moto 360",
				price: 550.00,
				photo: placeholderImg,
				type: "iron"
			},
			{
				id: 3,
				name: "Sansumg",
				price: 800.00,
				photo: placeholderImg,
				type: "wood"
			},
			{
				id: 4,
				name: "Asus Zenfone",
				price: 1500.00,
				photo: placeholderImg,
				type: "wood"
			}
	    ];

	    // itens cart
	    var _itensCart = [
	    	{
				id: 1,
				name: "Nexus 6",
				price: 1450.00,
				photo: placeholderImg,
				type: "wood"
			}
	    ];


		var _getProdutcs = function(){
			return _itensProducts;			
		};

		var _getCart = function(){
			return _itensCart;			
		};

		var lastId = 4;

		var _addItem = function(newItem){
			console.log(newItem);
			newItem = angular.extend(newItem, {
				id: lastId + 1,
				photo: placeholderImg
			});

			_itensCart.push(newItem);
			lastId += 1;
		};

		function addItem(newItem) {
			
		}

		return{
			getProducts: _getProdutcs,
			getCart: _getCart,
			addItem: _addItem,
		}
	}]);
})();