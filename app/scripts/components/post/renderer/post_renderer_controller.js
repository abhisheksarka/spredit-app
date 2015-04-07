(function(){
  function Controller($scope, Session, Post){
    
    function init() {
      $scope.currentUser = Session.currentUser;
      setStrippedContent();
    };

    function setStrippedContent() {
      var c = $scope.post.content || "";
      if(c.length <= 255 || $scope.fullContent) {
        $scope.post.strippedContent = c;
        return;
      };
      $scope.post.isStripped = true;
      $scope.post.strippedContent = c.substr(0, 255);
    };

    init();
  };

  angular.module('ms.components.post.renderer')
  .controller('PostRendererController', [
    '$scope',  
    'SessionModel',
    'PostModel',
    Controller 
  ]);
}());
