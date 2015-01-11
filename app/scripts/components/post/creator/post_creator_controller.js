(function(){
  function Controller($scope, Session, Post){
    function init() {
      $scope.currentUser = Session.currentUser;
      $scope.createPost = createPost;
      setPristinePost();
    };

    function createPost() {
      $scope.post.postable_type = "PostText";
      $scope.post.$save().then(function(){
        setPristinePost();
      });
    };

    function setPristinePost() {
      $scope.post = new Post({
        postable: { }
      });
    };
  
    init();
  };

  angular.module('ms.components.post.creator')
  .controller('PostCreatorController', [
    '$scope',  
    'SessionModel',
    'PostModel',
    Controller 
  ]);
}());
