'use strict';

/**
 * @ngdoc overview
 * @name eventbriteApp
 * @description
 * # eventbriteApp
 *
 * Main module of the application.
 */
angular
  .module('eventbriteApp', [
    'ngResource',
    'ngRoute',
    'ui.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
