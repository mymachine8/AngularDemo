'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  	$scope.displayText = "Default Shit";
  	$scope.addBook = function (){ $scope.displayText = "This shit is working"};
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
