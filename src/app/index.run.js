(function() {
  'use strict';

  angular
    .module('apretadores')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
