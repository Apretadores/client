(function() {
  'use strict';

  angular.module('apretadores.security', [])
    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('RequestInterceptor');
    });

})();
