(function() {
  'use strict';

  angular
    .module('ukheating')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
