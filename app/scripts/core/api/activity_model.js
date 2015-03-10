(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/activities'),
                    { id: '@id' },
                    { 
                      notifications: { method: 'GET', url: ms.apiFor('/activities/notifications'), isArray: true }  
                    }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //
    Resource.activityMappings = {
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

    Resource.notificationMappings =  {
      spread: {
        label: 'Your post is spreading.'
      },
      commented: {
        label: 'has commented on your post'
      }
    };
    return Resource;
  };

  angular.module('ms.core.api')
  .factory('ActivityModel',[
    '$resource',
    factory
  ])
}());