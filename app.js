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
		
		var placeholderImg = 'http://fakeimg.pl/250x100/';
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

		var _getProdutcs = function(){
			return _itensProducts;			
		};

		return{
			getProducts: _getProdutcs
		}
	}]);
})();