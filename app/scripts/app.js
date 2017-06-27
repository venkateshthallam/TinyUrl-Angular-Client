'use strict';

/**
 * @ngdoc overview
 * @name tinyUrlApp
 * @description
 * # tinyUrlApp
 *
 * Main module of the application.
 */
angular
  .module('tinyUrlApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular
  .module('tinyUrlApp').config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);