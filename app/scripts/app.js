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
        controller: 'MainCtrl',
        resolve : {
                eventData : ['$q', 'mainFactory', function($q, mainFactory) {
                    var defer = $q.defer();

                    var dataForCalendar = [];
                    var dataForSideBar = [];
                    var dataToSend = [];
                    var duplicateData = [];

                    // following is to preload data with information from API call
                    mainFactory.events(function(err, result) {

                        if(err)
                        {
                           return $q.reject(err);
                        }
                        
                        // iterate through each event from API call and format to 
                        // information needed for front end
                        for(var i = 0; i < result.events.length; i++)
                        {

                            // this removes duplicate information to prevent to displaying same events on sidebar
                            if(duplicateData.indexOf(result.events[i].name.text) == -1)
                            {
                                duplicateData.push(result.events[i].name.text);

                                dataForSideBar.push({
                                    'title': result.events[i].name.text,
                                    'url': result.events[i].url,
                                    'image': result.events[i].logo_url
                                });
                            }

                            dataForCalendar.push({
                                  'title': result.events[i].name.text,
                                  'start': result.events[i].start.local,
                                  'url': result.events[i].url
                             });

                        }

                        dataToSend.push(dataForCalendar);
                        dataToSend.push(dataForSideBar);
                        
                        // provide the controller with data needed to render html page
                        defer.resolve(dataToSend);
                    });

                    return defer.promise;
                }]
            }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
