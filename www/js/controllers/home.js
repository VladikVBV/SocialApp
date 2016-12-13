angular.module('starter.controllers')
    .controller('HomeCtrl', function ($scope, $state, $ionicLoading, $ionicPopup, User) {
        $scope.user = User.update();
    });

