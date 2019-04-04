(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  .state('categories', {
    url:'/categories',
    templateUrl: 'src/menuApp/templates/categories.template.html',
    controller: 'categoriesController as kitties',
  })

  .state('items', {
    url:'/items/{itemId}',
    templateUrl: 'src/menuApp/templates/items.template.html',
    controller: 'itemsController',
    controllerAs: 'kits'
    }
  );

  // Premade list page
//   .state('mainList', {
//     url: '/main-list',
//     templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
//     controller: 'MainShoppingListController as mainList',
//     resolve: {
//       items: ['ShoppingListService', function (ShoppingListService) {
//         return ShoppingListService.getItems();
//       }]
//     }
//   })

//   .state('mainList.itemDetail', {
//     url: '/item-detail/{itemId}',
//     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
//     controller: "ItemDetailController as itemDetail"
//   });

}

})();
