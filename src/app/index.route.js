(function() {
  'use strict';

  angular
    .module('ukheating')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('freeboiler', {
        url: '/freeboiler',
        templateUrl: 'app/components/freeboiler/index.html',
      })
      .state('infraredpanels', {
        url: '/infraredpanels',
        templateUrl: 'app/components/infraredpanels/index.html',
      })
      .state('infraredmesh', {
        url: '/infraredmesh',
        templateUrl: 'app/components/infraredmesh/index.html',
      })
      .state('tadpole', {
        url: '/tadpole',
        templateUrl: 'app/components/tadpole/index.html',
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/components/contact/index.html',
      });

    $urlRouterProvider.otherwise('/');
  }

})();
