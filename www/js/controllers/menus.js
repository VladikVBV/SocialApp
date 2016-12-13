angular
    .module('starter.controllers')
    .controller('MenusCtrl',
        function ($scope, $state, $ionicPopup, User) {

        $scope.user = User.update();
        $scope.$watch('user.isLogged', function(newValue, oldValue){
            if($scope.user.isLogged === null) {
                return true;
            }
            if($scope.user.isLogged === true) {
                return true;
            }
            if($scope.user.isLogged === false) {
                $state.go('welcome');
            }
        });
        $scope.doLogout = function () {
            return $ionicPopup.confirm({
                title: '<h2>Log Out</h2>',
                template: '<h3 class="text-center">Really leave?</h3>',
                cancelType: 'button button-light',
                okType: 'button button-positive button-logout'
            }).then(function (result) {
                if (result) {
                    User.logout();
                    $state.go('welcome');
                }
            });
        };

    });
