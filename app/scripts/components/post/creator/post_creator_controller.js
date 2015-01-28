(function(){
  function Controller($scope, Session, Post, PostPhoto, StateHandler){
    
    function init() {
      pristinePost();
    };

    function pristinePost() {
      $scope.post = new Post();
    };

    function setPostable(id, type) {
      $scope.post.postable_id = id;
      $scope.post.postable_type = type;
    };

    // end of image upload and previews
    
    init();
  };

  angular.module('ms.components.post.creator')
  .controller('PostCreatorController', [
    '$scope',  
    'SessionModel',
    'PostModel',
    'PostPhotoModel',
    'StateHandlerService',
    Controller 
  ]);
}());
