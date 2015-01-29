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
    
    proto.$deriveAndSave = function(postable) {
      self = this;
      debugger;
      if(postable.id) {
        self._setPostable(postable);
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