(function(){
  function factory($resource, $upload) {
    var Resource = $resource(
                    ms.apiFor('/post_photos/:id'),
                    { id: '@id' }
                  ),
        proto = Resource.prototype,
        res = Resource;
    
    proto.$save = function() {
      var self = this;
      return $upload.upload({
        url: ms.apiFor('/post_photos'),
        method: 'POST',
        file: self.photo,
        fileFormDataName: 'post_photo[photo]'
      })
      .then(function(response){
        angular.extend(self, response.data);
      });
    };

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('PostPhotoModel',[
    '$resource',
    '$upload',
    factory
  ])
}());