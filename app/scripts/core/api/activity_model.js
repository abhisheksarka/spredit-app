(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/activities'),
                    { id: '@id' },
                    { 
                      notifications: { method: 'GET', url: ms.apiFor('/activities/notifications'), isArray: true },
                      unreadNotificationsCount: { method: 'GET', url: ms.apiFor('/activities/unread_notifications_count'), isArray: false },
                      markAllAsRead: { method: 'PUT', url: ms.apiFor('/activities/mark_all_as_read'), isArray: false }  
                    }
                  ),
        res = Resource,
        proto = res.prototype;

    //
    // Instance methods and class methods go here
    //

    res.activityMappings = {
      commented: {
        label: 'You commented on this',
        iconClass: 'glyphicon-comment'
      }, 
      spread: {
        label: 'You spread this',
        iconClass: 'glyphicon-send'
      },
      contained: {
        label: 'You contained this',
        iconClass: 'glyphicon-lock'
      }
    };

    res.notificationMappings =  {
      spread: {
        label: 'Your post was spread...',
        iconClass: 'glyphicon-send' 
      },
      contained: {
        label: 'Your post was contained...',
        iconClass: 'glyphicon-lock'
      }
    };
    
    return res;
  };

  angular.module('ms.core.api')
  .factory('ActivityModel',[
    '$resource',
    factory
  ])
}());