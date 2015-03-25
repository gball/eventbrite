'use strict';

/**
 * @ngdoc function
 * @name eventbriteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eventbriteApp
 */
angular.module('eventbriteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
