// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter',
    [
        'ionic',
        'ngFacebook',
        'starter.controllers',
        'starter.services'
    ])
.run(function($ionicPlatform, $rootScope, $window) {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    $rootScope.$on('fb.load', function () {
        $window.dispatchEvent(new Event('fb.load'));
    });
    $ionicPlatform.ready(function() {
// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
// for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
// org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
.config(function($stateProvider, $urlRouterProvider, $facebookProvider) {
            console.log($facebookProvider);
    $facebookProvider.setCustomInit({
        appId: 1784650308456321,
        cookie: true
    }).setPermissions(['email', 'user_friends']);

// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
    $stateProvider
        .state('welcome', {
            url: '/welcome',
            cache: false,
            templateUrl: 'templates/welcome.html',
            controller: 'WelcomeCtrl'
        })
        .state('app', {
            url: '/app',
            abstract: true,
            cache: false,
            templateUrl: 'templates/common/menus.html',
            controller: 'MenusCtrl'
        })
        .state('app.home', {
            url: '/app/home',
            cache: false,
            views: {
                'menuContent': {
                    templateUrl: 'templates/home.html',
                    controller: 'HomeCtrl'
                }
            }
        })

;
// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/welcome');

});
angular.module('starter.controllers', []);
angular.module('starter.services', []);