'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientAppl
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, $state, $rootScope, user, $timeout) {
    //$rootScope.currentUser = {}

    $scope.submit = function() {
      user.login($scope.user)
        .then(function(resp) {

          if (resp.data.user && resp.data.message == 'loggedin') {
            console.log(resp.data)
            var user = resp.data.user
            user.loggedin = true
            //$rootscope.currentUser = user
            $state.go('profile', {user: user})
          }

          if (resp.data.user && !resp.data.message) {
            //console.log('changepassword')
            //$rootscope.currentUser = resp.data.user

            $state.go('changepassword', {user: resp.data.user});
          }

          $scope.errors = resp.data;
        })
        .catch(function(resp) {

        });
    };

    $scope.userFields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }
    }
    ];
  });
