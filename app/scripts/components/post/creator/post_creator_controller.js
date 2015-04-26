(function(){
  function Controller($scope, Session, Post, PostPhoto, StateHandler){
    
    function init() {
      pristinePost();
      $scope.reqState = StateHandler.getInstance();
      $scope.createPost = createPost;
      setCategories();
    };

    function setCategories() {
      $scope.categories = Post.allCategories;
      $scope.post.category = $scope.categories[0].value;
    };

    function pristinePost() {
      $scope.post = new Post();
      $scope.postable = { };
      $scope.refresh = true;
    };

    function createPost() {
      $scope.reqState.initiate();
      $scope.post
      .$deriveAndSave($scope.postable).then(afterSuccessfulSave, afterFailedSave);
    };

    function afterSuccessfulSave(response) {
      pristinePost();
      $scope.reqState.success();
      $scope.success({response: response});
    };

    function afterFailedSave(response) {
      $scope.reqState.error();
      $scope.error({response: response});
    };

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
