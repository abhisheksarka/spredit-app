(function(){
  function Controller($scope, Conversation, Category){
    function init() {
      $scope.categories = Category.query();
      $scope.conversation = new Conversation();
      $scope.createConversation = createConversation;
    };

    function createConversation() {
      $scope.conversation.$save();
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
