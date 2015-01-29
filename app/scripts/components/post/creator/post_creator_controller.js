(function(){
  function Controller($scope, Session, Post, PostPhoto, StateHandler){
    
    function init() {
      pristinePost();
    };

    function pristinePost() {
      $scope.post = new Post();
      $scope.postable = { };
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
