(function() {
  function Controller($scope, Session, post){
    
    function init() {
      $scope.post = post;
    };
    
    init();
  };
  angular.module('ms.pages.posts.show')
  .controller('PostsShowController', [
    '$scope',
    'SessionModel',
    'post',
    Controller
  ]);
}());