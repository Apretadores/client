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
            templateUrl: 'app/main/views/left.html'
          },
          'main': {
            templateUrl: 'app/main/views/main.html',
            controller: 'MainController',
            controllerAs: 'main'
          },
          'right': {
            templateUrl: 'app/main/views/right.html'
          }
        },
        resolve: {/* @ngInject */
          messagesResolved: function (MessageModel) {
            return MessageModel.get({subject: 'pizarra'});
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
