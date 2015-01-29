(function(){
  function Controller($scope, Session, Post, PostPhoto, StateHandler){
    
    function init() {
      pristinePost();
      $scope.createPost = createPost;
    };

    function pristinePost() {
      $scope.post = new Post();
      $scope.postable = { };
      $scope.refresh = true;
    };

    function createPost() {
      $scope.post.$deriveAndSave($scope.postable).then(afterSuccessfulSave);
    };

    function afterSuccessfulSave() {
      pristinePost();
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
