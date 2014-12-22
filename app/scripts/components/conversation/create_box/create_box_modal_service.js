(function(){
  function Factory($modal){
    return {
      open: function() {
        $modal.open({
          controller: 'CreateBoxModalController',
          templateUrl: 'app/scripts/components/conversation/create_box/modal_template.html'
        })
      },
      close: function () {
        
      }
    };
  };

  angular.module('ms.components.conversation.createBox')
  .factory('CreateBoxModalService', ['$modal', Factory]);

}());