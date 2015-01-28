(function(){
  function Controller($scope, Session, PostPhoto, StateHandler){
    function init() {
      $scope.postPhoto = new PostPhoto();
      $scope.states = {
        uploading: StateHandler.getInstance(),
        destroying: StateHandler.getInstance()
      }
    };

    function onUpload(nv, ov) {
      var u = $scope.states.uploading;
      if(!u.isWorking && nv && nv[0]) {
        u.initiate();
        $scope.postPhoto.photo = nv[0];
        $scope.postPhoto.$save().then(u.success, u.error);
      }
    };

    function destroyUpload() {
      var sd = $scope.states.destroying;
      sd.initiate();
      $scope.postPhoto.$delete(sd.success, sd.error);
    };

    $scope.$watch('photos', onUpload);
  
    init();
  };

  angular.module('ms.components.post.photoUploader')
  .controller('PostPhotoUploaderController', [
    '$scope',  
    'SessionModel',
    'PostPhotoModel',
    'StateHandlerService',
    Controller 
  ]);
}());
