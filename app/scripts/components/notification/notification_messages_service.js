(function(){
  function Factory(){
    return {
      // constructs notification message with links for spread notification 
      spread: function(notification) {
        notification = notification || { };
        targetable = notification.targetable || { };
        return {
          label: 'Your ' + linkifyPost(notification) + 
                 ' is spreading...',
          desc: '<span class="lead">' + 
                targetable.spreads_count + 
                '</span> people have spread your ' + 
                linkifyPost(notification) + ' ' +   
                'resulting in a total propagation of <span class="lead">' + 
                targetable.total_propagation + 
                '</span> km.'
        };
      },

      // constructs notification message with links for contain notification
      contained: function(notification) {
        notification = notification || { };
        targetable = notification.targetable || { };
        return {
          label: 'Your ' + linkifyPost(notification) + 
                 ' was contained...',
          desc: '<span class="text-danger lead">' +
                targetable.contains_count + 
                '</span> people have contained your ' + 
                linkifyPost(notification)
        };
      },

      // constructs notification message with links for comment notification
      commented: function(notification) {
        notification = notification || { };
        sendable = notification.sendable || { };
        return {
          label: '<a>' + sendable.name + '</a> commented on your ' + 
                 linkifyPost(notification),
          desc: ''
        }
      }
    };

    // private methods
    function linkifyPost (notification) {
      if(notification.targetable_type == 'Post') {
        return '<a target="_blank" href="#/posts/' + notification.targetable_id + '">post</a>'
      }
    };  
  };

  angular.module('ms.components.notification')
  .factory('NotificationMessagesService', [
    Factory
  ]);

}());