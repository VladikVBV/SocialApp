angular.module('starter.services')
    .service('User', function($facebook, $rootScope){

            var self = this;

            $rootScope.$on('fb.auth.authResponseChange', function () {
                console.log('fb.auth.authResponseChange', $facebook.isConnected());
                if ($facebook.isConnected()) {
                    self.exports.isLogged = true;
                    $facebook.api('/me/picture', {
                        height: '400'
                    }).then(function (photo) {
                        self.exports.photo = photo.data;
                    });

                    $facebook.api('/me', {fields: 'name,first_name,last_name,birthday,email,gender'}).then(function (user) {
                        self.exports.data = user;
                    });
                } else {
                    self.exports.isLogged = false;
                }
            });

            this.exports = {
                isLogged: null,
                dataLoaded: null,
                data: {},
                photo: {}
            };

            this.update = function() {
                return this.exports;
            }

            this.login = function() {
                return $facebook.login(['user_birthday','user_friends','email']);
            };
            this.logout = function() {
                return $facebook.logout()
                        .then(function(){
                            self.exports.isLogged = false;
                            self.exports.photo = {};
                            self.exports.data = {};
                        });
            }
    });
