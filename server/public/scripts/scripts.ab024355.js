"use strict";angular.module("clientApp",["ngMessages","ui.router","formly","formlyBootstrap"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("login",{url:"/login",templateUrl:"views/login.html",controller:"LoginCtrl"}).state("signup",{url:"/signup",templateUrl:"views/signup.html",controller:"SignupCtrl"}).state("profile",{url:"/profile",params:{user:null},templateUrl:"views/profile.html",controller:"ProfileCtrl"}).state("changepassword",{url:"/changepassword",params:{user:null},templateUrl:"views/changepassword.html",controller:"ChangePasswordCtrl"}),b.otherwise("/login")}]),angular.module("clientApp").controller("LoginCtrl",["$scope","$state","$rootScope","user","$timeout",function(a,b,c,d,e){a.submit=function(){d.login(a.user).then(function(c){if(c.data.user&&"loggedin"==c.data.message){console.log(c.data);var d=c.data.user;d.loggedin=!0,b.go("profile",{user:d})}c.data.user&&!c.data.message&&b.go("changepassword",{user:c.data.user}),a.errors=c.data}).catch(function(a){})},a.userFields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Password"}}]}]),angular.module("clientApp").controller("SignupCtrl",["$scope","$state","$rootScope","user",function(a,b,c,d){a.submit=function(){d.create(a.user.email).then(function(a){b.go("changepassword",{user:a.data.user})})},a.userFields=[{key:"email",type:"input",templateOptions:{type:"email",label:"Email address",placeholder:"Enter email"}}]}]),angular.module("clientApp").controller("ProfileCtrl",["$scope","$rootScope","$stateParams","$state",function(a,b,c,d){c.user||d.go("login"),console.log(c),a.user=c.user}]),angular.module("clientApp").controller("ChangePasswordCtrl",["$scope","$state","$rootScope","user","$stateParams",function(a,b,c,d,e){a.user=e.user,console.log(a.user),a.submit=function(){d.changepassword(a.user).then(function(a){console.log(a),b.go("login")})},a.userFields=[{key:"temppassword",type:"input",templateOptions:{label:"Temp password"}},{key:"password",type:"input",templateOptions:{type:"password",label:"Password",placeholder:"Set new password"}}]}]),angular.module("clientApp").service("user",["$http",function(a){this.testapi=function(){return a.get("api/test")},this.create=function(b){return a.post("api/user",{email:b})},this.changepassword=function(b){return a.post("api/changepassword",{user:b})},this.login=function(b){return a.post("api/login",{email:b.email,password:b.password})}}]),angular.module("clientApp").run(["$templateCache",function(a){a.put("views/changepassword.html",'<div class="container"> <h1>Change password</h1> <div class="alert alert-dismissible alert-danger" ng-show="errors"> <strong>{{errors}}</strong> </div> <formly-form model="user" fields="userFields"> <button type="submit" class="btn btn-default" ng-click="submit(user)">Submit</button> </formly-form> </div>'),a.put("views/login.html",'<div class="container"> <h1>Login</h1> <div class="alert alert-dismissible alert-danger" ng-show="errors"> <strong>{{errors}}</strong> </div> <formly-form model="user" fields="userFields"> <button type="submit" class="btn btn-default" ng-click="submit(user)">Submit</button> </formly-form> </div>'),a.put("views/profile.html","<h1>Hello {{user.email}}</h1>"),a.put("views/signup.html",'<div class="container"> <h1>Sign Up</h1> <div class="alert alert-dismissible alert-danger" ng-show="errors"> <strong>{{errors}}</strong> </div> <formly-form model="user" fields="userFields"> <button type="submit" class="btn btn-default" ng-click="submit(user)">Submit</button> </formly-form> </div>')}]);