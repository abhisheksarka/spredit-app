(function(){
  function factory($resource, PostPhoto, PostText) {
    var Resource = $resource(
                    ms.apiFor('/posts/:id'),
                    { id: '@id' },
                    { 
                      mine: { method: 'GET', url: ms.apiFor('/posts/mine'), isArray: true }  
                    }
                  ),
        proto = Resource.prototype,
        res = Resource;

    res.POST_TYPES = {
      photo: { postableResource: PostPhoto, name: 'PostPhoto' },
      text: { postableResource: PostText, name: 'PostText' }
    };
    
    proto.$deriveAndSave = function(postable) {
      self = this;
      if(postable.id) {
        self._setPostable(postable);
      };
      self.meta = {
        errorFlash: true
      };
      return self.$save();        
    };

    proto._setPostable = function(postable) {
      this.postable_id = postable.id;
      this.postable_type = postable.type;
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