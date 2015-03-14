(function(){
  function Factory(){
    return {
      spread: function(notification) {
        notification = notification || { };
        targetable = notification.targetable || { };
        return {
          label: 'Your post is spreading...',
          desc: '<span class="text-success lead">' + targetable.spreads_count + '</span> people have spread your post ' + 
                'resulting in a total propagation of <span class="text-success lead">' + targetable.total_propagation + '</span> km.'
        };
      },
      contained: function(notification) {
        notification = notification || { };
        targetable = notification.targetable || { };
        return {
          label: 'Your post was contained...',
          desc: '<span class="text-danger lead">' + targetable.contains_count + '</span> people have contained your post'
        };
      },
      commented: function(notification) {
        notification = notification || { };
        sendable = notification.sendable || { };
        return {
          label: '<a>' + sendable.name + '</a> commented on your post...',
          desc: ''
        }
      }
    }  
  };

  angular.module('ms.components.notification')
  .factory('NotificationMessagesService', [
    Factory
  ]);

}());