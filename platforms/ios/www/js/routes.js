angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.rCM', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rCM.html',
        controller: 'rCMCtrl'
      }
    }
  })

  .state('menu.noticias', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('menu.actividades', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actividades.html',
        controller: 'actividadesCtrl'
      }
    }
  })

  .state('menu.tiempo', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tiempo.html',
        controller: 'tiempoCtrl'
      }
    }
  })

  .state('menu.registroDeUsuarios', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registroDeUsuarios.html',
        controller: 'registroDeUsuariosCtrl'
      }
    }
  })

  .state('menu.nosotros', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nosotros.html',
        controller: 'nosotrosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});