(function(){
  function Factory($modal){
    return {
      open: function() {

      },
      close: function () {
        
      }
    };
  };

  angular.module('ms.components.conversation.createBox')
  .factory('createBoxModal', ['$modal', Factory]);

}());