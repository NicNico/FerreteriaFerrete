angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('conroladorEjercico2', function($scope){


})

.controller('conroladorBrowse', function($scope) {
$scope.v_PrecioMart=0;
$scope.v_PrecioPint=0;
$scope.v_PrecioAero=0;
$scope.mensajeRespuesta="sin rta";
$scope.v_promedio

$scope.SumarPrecios=function(dato1,dato2,dato3){
//solo para testear que ande
//solo para desarrolladores

//console.log("Estoy en el SumarPrecios"+$scope.v_PrecioMart+" "+$scope.v_PrecioPint);
//$scope.v_PrecioMart=666666

$scope.mensajeRespuesta=parseInt(dato1)+parseInt(dato2)+parseInt(dato3);
//$scope.mensajeRespuesta=777;
};


$scope.Promedio=function(dato1,dato2,dato3){
//solo para testear que ande
//solo para desarrolladores
//console.log("Estoy en el Promedio");
//$scope.v_promedio = (parseInt(dato1)+parseInt(dato2)+parseInt(dato3))  / parseInt(3);
//$scope.v_promedio = parseInt(3)  / parseInt(3);
$scope.mensajeRespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3))  / 3;
};

$scope.CalcularIva=function(dato1,dato2,dato3){
//solo para testear que ande
//solo para desarrolladores
//console.log("Estoy en el CalcularIva");
$scope.mensajeRespuesta=(parseInt(dato1)+parseInt(dato2)+parseInt(dato3)) * 1.21;
};



})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
