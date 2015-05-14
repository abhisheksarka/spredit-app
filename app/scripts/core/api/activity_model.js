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
        iconClass: 'fa-comment'
      }, 
      spread: {
        label: 'You spread this',
        iconClass: 'fa-check'
      },
      contained: {
        label: 'You contained this',
        iconClass: 'fa-remove'
      }
    };

    res.notificationMappings =  {
      spread: {
        label: 'Your post was spread...',
        iconClass: 'fa-check' 
      },
      contained: {
        label: 'Your post was contained...',
        iconClass: 'fa-remove'
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