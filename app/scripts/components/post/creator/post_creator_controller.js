(function(){
  function Controller($scope, Session, Post, PostPhoto, StateHandler){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.createPost = createPost;
      $scope.uploadState = StateHandler.getInstance();

      setPristinePost();
      setPristinePostPhoto();
    };

    function createPost() {
      $scope.post.postable_type = "PostText";
      $scope.post.$save().then(function(){
        setPristinePost();
      });
    };

    function setPristinePostPhoto() {
      $scope.postPhoto = new PostPhoto();
    }

    function setPristinePost() {
      $scope.post = new Post({
        postable: { }
      });
    };

    $scope.$watch('photos', function(nv, ov){
      var u = $scope.uploadState;
      if(!u.isWorking && nv && nv[0]) {
        $scope.postPhoto.photo = nv[0];
        u.initiate();
        $scope.postPhoto.$save().then(u.success, u.error);
      };
    });
  
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
