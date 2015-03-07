(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/activities'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //
    Resource.labelMappings = {
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
    }
    return Resource;
  };

  angular.module('ms.core.api')
  .factory('ActivityModel',[
    '$resource',
    factory
  ])
}());