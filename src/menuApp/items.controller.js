(function () {
'use strict';

angular.module('MenuApp')
.controller('itemsController', itemsController);


itemsController.$inject = ['MenuDataService','$rootScope','$stateParams'];
function itemsController(MenuDataService, $rootScope,$stateParams) {
  var kits = this;
  kits.items = [];
  kits.itemId = $stateParams.itemId;

  kits.getItemsForCategory = function(itemId) {
    MenuDataService.getItemsForCategory(itemId)
    .then(function (result) {
       kits.items=result.data;
    }) ;
  }

  kits.$onInit = function () {
    MenuDataService.getItemsForCategory(kits.itemId)
    .then(function (result) {
      kits.items = result.data;
    });
  };
}

})();