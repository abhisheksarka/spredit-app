(function(){
  function Controller($scope, Session, PostPhoto, Post, StateHandler){
    function init() {
      $scope.states = {
        uploading: StateHandler.getInstance(),
        destroying: StateHandler.getInstance()
      };
      $scope.destroyUpload = destroyUpload;
    };

    // Initialize empty objects
    // postable is the object that will exposed outside
    // so that post creator can set postable_type and postable_id
    // on itself
    function setPristine() {
      $scope.postPhoto = new PostPhoto();
      $scope.postableObject = { };
    };

    // When a photo is uploaded automatically save it
    // in the backend
    function onUpload(nv, ov) {
      var u = $scope.states.uploading;
      if(!u.isWorking && nv && nv[0]) {
        u.initiate();
        $scope.postPhoto.photo = nv[0];
        $scope.postPhoto.$save().then(afterUpload, u.error);
      }
    };

    // after upload is complete set the properties of postable
    // so that the client of this directive knows what kind of postable
    // was added
    function afterUpload() {
      $scope.states.uploading.success();
      $scope.postableObject.id = $scope.postPhoto.id;
      $scope.postableObject.type = Post.POST_TYPES.photo.name;
    };

    // below methods are for destroying the upload
    function destroyUpload() {
      var sd = $scope.states.destroying;
      sd.initiate();
      $scope.postPhoto.$delete(afterDestroy, sd.error);
    };

    function afterDestroy() {
      $scope.states.destroying.success();
      setPristine();
    };

    // when set to true clear the already set objects
    function refresh(nv, ov) {
      if(nv) {
        setPristine();
        $scope.postableRefresh = false;
      }
    };

    $scope.$watch('photos', onUpload);
    $scope.$watch('postableRefresh', refresh);

    init();
  };

  angular.module('ms.components.post.photoUploader')
  .controller('PostPhotoUploaderController', [
    '$scope',  
    'SessionModel',
    'PostPhotoModel',
    'PostModel',
    'StateHandlerService',
    Controller 
  ]);
}());
