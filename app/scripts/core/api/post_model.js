(function(){
  function factory($resource) {
    var Resource = $resource(
                    ms.apiFor('/posts/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype,
        res = Resource;

    res.POST_TYPES = {
      PHOTO: 'PostPhoto',
      TEXT: 'PostText'
    };    
    //
    // Instance methods and class methods go here
    //
    proto.$deriveAndSave = function() {
      var self = this;
      _setPostType();
      if(isPhotoPost()) {

      };
      
      if(isTextPost()) {
        
      };
    };

    proto._setPostType = function() {
      var self = this,
          p = self.postable;
      if (p.photo) {
        self.postable_type = res.POST_TYPES.PHOTO;
      } else {
        self.postable_type = res.POST_TYPES.TEXT;
      };
    };

    proto.isPhotoPost = function() {
      return ((this.postable_type == res.POST_TYPES.PHOTO) ? true : false);
    };

    proto.isTextPost = function() {
      return ((this.postable_type == res.POST_TYPES.TEXT) ? true : false);
    };

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('PostModel',[
    '$resource',
    factory
  ])
}());