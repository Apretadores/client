(function() {
  'use strict';

  angular.module('apretadores.shared')
    .factory('GenericModel', GenericModel);

  function GenericModel ($http, Config) {

    return function (url) {

      return {
        get: function (query) {
          var qIsArray = angular.isArray(query),
            params = qIsArray ? {} : (angular.isObject(query) ? query : {query: query}),
            baseUrl = [Config.base, url];

          if (qIsArray) {
            angular.forEach(query, function (urlSection) {
              baseUrl.push('/', urlSection);
            });
          }

          return $http.get(baseUrl.join(''), {
            params: params
          }).then(
            function (response) {
              return response.data;
            },
            function (response) {
              return response.data;
            }
          );

        }
      };

    };

  }

})();
