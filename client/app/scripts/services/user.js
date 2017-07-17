'use strict';

/**
 * @ngdoc service
 * @name clientApp.user
 * @description
 * # user
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('user', function ($http) {
  	// AngularJS will instantiate a singleton by calling "new" on this function

    this.testapi = function() {
      return $http.get('api/test');
    }

    this.create = function(email) {
      return $http.post('api/user', {email: email});
    }

    this.changepassword = function(user) {
      return $http.post('api/changepassword', {user: user});
    }

    this.login = function(user) {
      return $http.post('api/login', {email: user.email, password: user.password })
    }

  });
