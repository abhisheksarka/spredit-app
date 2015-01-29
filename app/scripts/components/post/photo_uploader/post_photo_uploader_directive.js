(function(){
  var app = angular.module('ms.components.post.photoUploader');
  app.directive('msPostPhotoUploader', [function(){
    return{
      scope: {
        postPhoto: '=?',
        postableObject: '=',
        postableRefresh: '='
      },
      replace: true,
      controllerAs: 'postPhotoUploaderCtrl',
      templateUrl: 'app/scripts/components/post/photo_uploader/template.html',
      controller: 'PostPhotoUploaderController'
    }; 
  }]); 

}());
