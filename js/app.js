var myApp = angular.module("myApp", ['ngRoute', 'ngStorage']);

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

myApp.controller("IndexController", function($scope, $localStorage, $sessionStorage) {
    // Local storage with ng-storage
    console.log($localStorage);
    $scope.addresses = $localStorage.addr;
    // console.log($scope.addresses, $scope.$storage);

    $scope.deleteAddress = function(id) {
      console.log("Address with ID " + id + " should be deleted!");
      delete $localStorage.addr[id-1];
    };

    // localStorage.clear();
});

myApp.controller("AddressController", function($scope, $routeParams, $localStorage, $sessionStorage) {
    // Local storage
    console.log($localStorage);
    $scope.addr = $localStorage.addr;
    $scope.addressId = $routeParams.addressId;

    for (address in $localStorage.addr) {
      if($localStorage.addr[address] != null) {
        console.log("ID ", $localStorage.addr[address].id);
        if ($scope.addressId == $localStorage.addr[address].id) {
          $scope.detail = $scope.addr[address];
          console.log($scope.detail);
        }
      }
    } 

    $scope.editAddress = function() {
      console.log("Address with ID " + $scope.addressId + " should be edited!");
      console.log($localStorage.addr[$scope.addressId - 1]);
      $localStorage.addr[$scope.addressId - 1].firstname = document.getElementById("firstname").value || " ";
      $localStorage.addr[$scope.addressId - 1].lastname = document.getElementById("lastname").value || " ";
      $localStorage.addr[$scope.addressId - 1].street = document.getElementById("address").value || " ";
      $localStorage.addr[$scope.addressId - 1].zip = document.getElementById("zip").value || " ";
      $localStorage.addr[$scope.addressId - 1].city = document.getElementById("city").value || " ";
      $localStorage.addr[$scope.addressId - 1].country = document.getElementById("country").value || " ";
    };
});

myApp.controller("AddAddressController", function($scope, $routeParams, $localStorage, $sessionStorage) {
    console.log($localStorage);

    // TODO add validation
    $scope.addAddress = function() {
      var counter = $localStorage.counter || 0;
      counter++;

      var newAddress = { 
        'id': counter, 
        'firstname': $scope.firstname, 
        'lastname': $scope.lastname,
        'street': $scope.street,
        'city': $scope.city,
        'zip': $scope.zip,
        'country': $scope.country
      };

      $localStorage.addr = $localStorage.addr || [];
      var arr = $localStorage.addr;
      arr.push(newAddress);
      $localStorage.addr = arr;
      $localStorage.counter = counter;

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
