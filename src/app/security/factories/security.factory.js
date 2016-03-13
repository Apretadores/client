(function() {
    'use strict';

    angular.module('apretadores.security')
      .factory('RequestInterceptor', RequestInterceptor);

      function RequestInterceptor ($q) {
          return {
              request: function(config) {
                  config.headers = config.headers || {};
                  config.headers['Content-Type'] = 'application/json';

                  return config || $q.when(config);
              }
          };
      }

})();
