(function() {
  'use strict';

  angular
    .module('ukheating')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1449522045877;
    vm.showToastr = showToastr;
    
    vm.slides = [
    {text:'First Slide', image:'assets/images/banner1.jpg', 'active':true},
    {text:'Second Slide', image:'assets/images/banner2.jpg', 'active': false},
    {text:'Third Slide', image:'assets/images/banner3.jpg', 'active': false}
   ];

    vm.myInterval = 5000;
    vm.noWrapSlides = false;

    activate();

    function activate() {
      getWebDevTec();
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
