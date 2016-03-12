(function() {
  'use strict';

  angular
    .module('apretadores')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          'left': {
            templateUrl: 'app/main/left.html'
          },
          'main': {
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'right': {
            templateUrl: 'app/main/right.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
