'use strict';

/**
 * @ngdoc function
 * @name eventbriteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eventbriteApp
 */
angular.module('eventbriteApp')
  .controller('MainCtrl', ['$scope','mainFactory', 'eventData', function ($scope, mainFactory, eventData) {

  	// preloaded data from API call for sidebar information
  	$scope.sidebarData = eventData[1];

  	// data for the calendar
  	// it includes preloaded data from API call
    $scope.eventSources = {
	    events: eventData[0],
	    color: '#FF8025', 
	    textColor: '#FFFFFF', 
	    editable: false
	};

	// configuration for calendar
    $scope.uiConfig = {
		calendar: {
		    height: 500,
		    editable: true
		}
    };

  }]);
