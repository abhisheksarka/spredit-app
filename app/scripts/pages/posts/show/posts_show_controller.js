(function() {
  function Controller($scope, Session, post){
    
    function init() {
      $scope.masterCtrl.checkLocation();  
      $scope.masterCtrl.setBodyId('page-posts-show');
      $scope.masterCtrl.setTitle('Post');
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