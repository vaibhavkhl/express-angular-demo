'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngMessages',
    'ui.router',
    'formly',
    'formlyBootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .state('profile', {
        url: '/profile',
        params: {
           user: null
         },
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .state('changepassword', {
        url: '/changepassword',
        params: {
           user: null
         },
        templateUrl: 'views/changepassword.html',
        controller: 'ChangePasswordCtrl'
      })

      $urlRouterProvider.otherwise('/login');
  })
  // .run(function ($rootScope, $state) {
  //   $rootScope.$on('$stateChangeStart',
  //     function (event, toState, toParams) {
  //         console.log(toState, toParams)
  //     });
  // });
