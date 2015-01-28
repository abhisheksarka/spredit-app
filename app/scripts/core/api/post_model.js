(function(){
  function factory($resource, PostPhoto, PostText) {
    var Resource = $resource(
                    ms.apiFor('/posts/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype,
        res = Resource;

    res.POST_TYPES = {
      photo: { postableResource: PostPhoto, name: 'PostPhoto' },
      text: { postableResource: PostText, name: 'PostText' }
    };
    
    proto.$dervieAndSave = function(postable, postableType) {
             
    };

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('PostModel',[
    '$resource',
    'PostPhotoModel',
    'PostTextModel',
    factory
  ])
}());