(function() {
  'use strict';

  angular
      .module('ukheating')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'Free Boilers',
        'url': '/#/freeboilers',
        'description': 'If you qualify, we can arrange for a local, approved company to contact you to complete the installation. This service is free to use',
        'logo': 'angular.png'
      },
      {
        'title': 'Infrared Mesh',
        'url': '/#/infraredmesh',
        'description': 'The fiberglass mesh allows to install the product in situation when you need to embed it into screed, thin-set or self-leveling compound',
        'logo': 'browsersync.png'
      },
      {
        'title': 'Infrared Panels',
        'url': '/#/infraredpanels',
        'description': 'Low cost and efficient electric heaters with infrared technology for your home, bathroom, your office or any room',
        'logo': 'gulp.png'
      },
      {
        'title': 'Tadpole',
        'url': '/#/tadpole',
        'description': 'Heating systems deteriorate because of  oxygen in solution. Tadpole is the cure, removing the oxygen.',
        'logo': 'jasmine.png'
      },
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
