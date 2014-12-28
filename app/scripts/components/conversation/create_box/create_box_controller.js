(function(){
  function Controller($scope, Conversation, Category){
    function init() {
      $scope.categories = Category.query();
    };
    init();
  };

  angular.module('ms.components.conversation.createBox')
  .controller('CreateBoxController', [
    '$scope',
    'ConversationModel',
    'CategoryModel',
    Controller 
  ]);
}());
