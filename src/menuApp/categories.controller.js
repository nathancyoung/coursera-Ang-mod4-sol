(function () {
'use strict';

angular.module('MenuApp')
.controller('categoriesController', categoriesController);


categoriesController.$inject = ['MenuDataService','$rootScope'];
function categoriesController(MenuDataService, $rootScope) {
  var cats = this;
  cats.catitems = [];
  console.log(this);
  console.log("Here Kitty");
  console.log($rootScope);
  cats.stupid = "Hello Izzy";

  // cats.getAllCategories = function() {
  // 	MenuDataService.getItemsforCategories('L')
  // 	.then(function(result) {
  // 		cats.items = result.data;
  // 		console.log('****cats.items');
  //       console.log(cats.catitems);

  // 	})
  // }

  cats.$onInit = function () {
  	console.log(this);
    MenuDataService.getAllCategories()
    .then(function (result) {
      cats.catitems = result.data;
      console.log('****cats.catitems');
      console.log(cats.catitems)
    });
  };
}

})();