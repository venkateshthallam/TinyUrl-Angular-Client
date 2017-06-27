'use strict';

/**
 * @ngdoc function
 * @name tinyUrlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinyUrlApp
 */
angular.module('tinyUrlApp')
  .controller('MainCtrl',['$scope','$http','$window', function ($scope,$http,$window) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.enableSubmit = true;
     $scope.enableSubmitButton = function(){
     	$scope.enableSubmit = false;
       document.getElementById("tinybutton").removeAttribute("disabled");
    	console.log("call back received successfully");
	};

	$window.enableSubmitButton = $scope.enableSubmitButton;

    $scope.inputUrl = "";
    $scope.isUrlShortened = false;
    $scope.tinyUrlValue = "http://localhost:8080/";

    $scope.shortenUrl = function(){

    	console.log("URL entered is "+$scope.inputUrl);
    	var input = {};
    	input.urlValue = $scope.inputUrl;

    	$http({
			 method: 'POST',
			 url: 'http://localhost:8080/addURLEntry',
			 data : input,
			}).then(function successCallback(response) {
			    console.log("URL shortner call is successful");
			    $scope.tinyUrlValue += response.data.urlShortValue+"";
			    $scope.isUrlShortened = true;
			  }, function errorCallback(response) {
			     console.log("Bummer, something's wrong!"+response);
			  });

			};

  }]);
