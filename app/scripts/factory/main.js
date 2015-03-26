'use strict';

angular.module('eventbriteApp')
    .factory('mainFactory',['$http', function($http){

        // call Eventbrite API for all the events possible
        var events = function(cb){
            $http({
                method : 'GET',
                url : 'https://www.eventbriteapi.com/v3/events/?token=BKKRDKVUVRC5WG4HAVLT'
            })
                .success(function(data){
                    cb(undefined, data);
                })
                .error(function(err){
                    cb(err);
                });
        };

        return {
            events : events
        };

    }]);