(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope, ServerRequest) {
    var vm = this;
    vm.alphaOnImages  = alphaOnImages;
    vm.alphaOffImages  = alphaOffImages;

    init()
    function init() {
      //get news
      // ServerRequest.getAPNews(req, res) {
      //
      // }
    }


    //this function puts white alpha on images so you can see text
    function alphaOnImages(el) {
      console.log(el);
      el.srcElement.style.opacity = '0.5';
    }

    function alphaOffImages(el) {
      el.srcElement.style.opacity = '1';
    }

  }
}());
