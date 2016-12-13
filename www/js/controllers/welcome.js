angular.module('starter.controllers')
    .controller('WelcomeCtrl', function ($scope, $state, $ionicLoading, $ionicHistory, $ionicPopup, User) {
        $ionicLoading.show();
        $scope.user = User.update();
        $scope.$on('fb.auth.authResponseChange', function () {
            $ionicLoading.hide();
            if($scope.user.isLogged === true) {
                $ionicHistory.clearHistory();
                $state.go('app.home');
            }
        });
        $scope.login = function() {
            $ionicLoading.show();
            User.login()
                .then(function(resp){
                        console.log(resp);
                    $ionicLoading.hide();
                    if (resp.status !== 'connected') {
                        $ionicPopup.alert({
                            title: 'Fb login error',
                            template: 'Cancelled'
                        })
                    } else {
                        $ionicHistory.clearHistory();
                        $state.go('app.home');
                    }
            });
        }
    });

