(function(){
  function Factory(){
    return {
      spread: function(params) {
        params = params || { };
        return {
          label: 'Your post is spreading...',
          desc: '<span class="text-success lead">' + params.spreads_count + '</span> people have spread your post ' + 
                'resulting in a total propagation of <span class="text-success lead">' + params.total_propagation + '</span> km.'
        };
      },
      contained: function(params) {
        return {
          label: 'Your post was contained...'
        };
      },
      commented: function(params) {
        return {
          label: ''
        }
      }
    }  
  };

  angular.module('ms.components.notification')
  .factory('NotificationMessagesService', [
    Factory
  ]);

}());