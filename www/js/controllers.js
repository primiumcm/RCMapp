angular.module('app.controllers', [])


.controller('loginCtrl', function ($scope, $ionicModal, $state, $firebaseAuth, $ionicLoading, $rootScope) {
console.log('Login Controller Initialized');

// Create a connection to your Firebase database
var ref = new Firebase("https://rcmapp.firebaseio.com");
var auth = $firebaseAuth(ref);

$scope.signIn = function (user) {
	    console.log("signIn User Function called");
    if (user && user.email && user.pwdForLogin) {
        $ionicLoading.show({
            template: 'Signing In...'
        });
        auth.$authWithPassword({
            email: user.email,
            password: user.pwdForLogin
        }).then(function (authData) {
            console.log("Conectado como:" + authData.uid);
            ref.child("users").child(authData.uid).once('value', function (snapshot) {
                var val = snapshot.val();
                // To Update AngularJS $scope either use $apply or $timeout
                $scope.$apply(function () {
                    $rootScope.displayName = val;
                });
            });
            $ionicLoading.hide();
            $state.go('menu.socios');
        }).catch(function (error) {
            alert("Error de autentificación:" + error.message);
            $ionicLoading.hide();
        });
    } else
        alert("Por favor, informe el usuario y la clave");
}

})


.controller('perfilCtrl', function ($scope, $ionicModal, $state, $firebaseAuth, $ionicLoading, $rootScope) {
console.log('Perfil Controller Initialized');

// Create a connection to your Firebase database
var ref = new Firebase("https://rcmapp.firebaseio.com");
var auth = $firebaseAuth(ref);

$scope.logout = function (user) {
        console.log("logout User Function called");

        auth.$unauth()
        alert("Usuario desconectado");
        //$state.go('login');
}

})

   
.controller('noticiasCtrl', function($scope) {

})

   
.controller('actividadesCtrl', function($scope) {

})

   
.controller('tiempoCtrl', function($scope) {

})   

.controller('nosotrosCtrl', function($scope) {

})


.controller('sociosCtrl', function($scope) {

})


