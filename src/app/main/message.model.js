(function() {
    'use strict';

    angular.module('apretadores.main').factory('MessageModel', MessageModel);

    function MessageModel (GenericModel) {
        return GenericModel('/run/api');
    }

})();
