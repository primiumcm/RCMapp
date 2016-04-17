angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider  

  .state('menu.login', {
    url: '/pageLogin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.perfil', {
    url: '/pagePerfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.noticias', {
    url: '/pageNoticias',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

  .state('menu.actividades', {
    url: '/pageActividades',
    views: {
      'side-menu21': {
        templateUrl: 'templates/actividades.html',
        controller: 'actividadesCtrl'
      }
    }
  })

  .state('menu.tiempo', {
    url: '/pageTiempo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tiempo.html',
        controller: 'tiempoCtrl'
      }
    }
  })

  .state('menu.nosotros', {
    url: '/pageNosotros',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nosotros.html',
        controller: 'nosotrosCtrl'
      }
    }
  })

  .state('menu.socios', {
    url: '/pageSocios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/socios.html',
        controller: 'sociosCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/pageLogin')
  

});