'use strict';

/**
 * @ngdoc function
 * @name eventbriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventbriteApp
 */
angular.module('eventbriteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
