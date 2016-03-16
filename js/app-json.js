var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/address-list.html',
                controller: 'IndexController'
            }).
            when('/add', {
                templateUrl: 'partials/add-list.html',
                controller: 'AddAddressController'
            }).
            when('/address/:addressId', {
              templateUrl: 'partials/address-detail.html',
              controller: 'AddressController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);

myApp.factory('Addresses', function () {
  return { Addresses: '' };
});

myApp.controller("IndexController", function($scope, $q, $http, Addresses) {
    // JSON storage
    $scope.getAddresses = function() {
         var deferred = $q.defer();
         $http.get('../data/addresses.json').success(function(data) {
            deferred.resolve(data);
         }).error(function(){
            deferred.reject();
         });
         return deferred.promise;
    };

    $scope.getAddresses().then( 
      function(data) {
         $scope.addresses = data;
    }); 

    $scope.deleteAddress = function(id) {
      console.log("Address with ID " + id + " should be deleted!");
    };
});

myApp.controller("AddressController", function($scope, $q, $http, $routeParams, Addresses) {
    //JSON storage 
    $scope.getAddresses = function() {
         var deferred = $q.defer();
         $http.get('../data/addresses.json').success(function(data) {
            deferred.resolve(data);
         }).error(function(){
            deferred.reject();
         });
         return deferred.promise;
    };

    $scope.getAddresses().then( 
      function(data) {
         $scope.Addresses = data;
         $scope.addressId = $routeParams.addressId;

         for (address in $scope.Addresses) {
           if ($scope.addressId === $scope.Addresses[address].id) {
              $scope.detail = $scope.Addresses[address];
           }
         } 
    }); 

    $scope.editAddress = function() {
      console.log("Address with ID " + $scope.addressId + " should be edited!");
    };
});

myApp.controller("AddAddressController", function($scope, $q, $http, $routeParams, Addresses) {
    console.log(Addresses.Addresses);

    // TODO add validation
    $scope.addAddress = function() {
      var newAddress = { 
        'id': counter, 
        'firstname': $scope.firstname, 
        'lastname': $scope.lastname,
        'street': $scope.street,
        'city': $scope.city,
        'zip': $scope.zip,
        'country': $scope.country
      };
      
      var addresses = Addresses.Addresses;
      addresses[counter] = newAddress;

      //TODO add the new address and the counter to Addresses

      $scope.firstname = ''; 
      $scope.lastname = ''; 
      $scope.street = ''; 
      $scope.zip = ''; 
      $scope.city = ''; 
      $scope.country = ''; 
    };

    $scope.clear = function() {
      $scope.firstname = ''; 
      $scope.lastname = ''; 
      $scope.street = ''; 
      $scope.zip = ''; 
      $scope.city = ''; 
      $scope.country = ''; 
    };
});
