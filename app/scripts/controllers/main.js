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

    $scope.eventSources = {
	    events: [
	        {
	            title: 'Event1',
	            start: '2015-03-04',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-04-04',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-03-19',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-03-11',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-03-14',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-03-16',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-03-04',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-04-05',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event1',
	            start: '2015-05-04',
	            url: 'https://google.com',
	            rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        },
	        {
	            title: 'Event2',
	            start: '2015-04-05',
	           	url: 'https://google.com',
				rendering: 'http://cdn.evbuc.com/images/12757874/22612420638/1/logo.png'
	        }
	    ],
	    color: '#FF8025', 
	    textColor: '#FFFFFF', 
	    editable: false
	};

    $scope.uiConfig = {
		calendar: {
		    height: 500,
		    editable: true
		}
    };

  });
