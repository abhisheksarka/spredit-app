(function() {
  function Controller($scope, Session){
    
    function init() {
      
    };
    
    init();
  };
  angular.module('ms.pages.posts.show').controller('PagesShowController', [
    '$scope',
    'SessionModel',
    Controller
  ]);
}());