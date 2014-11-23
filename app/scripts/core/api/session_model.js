(function(){
  function Factory($resource){
    var Resource = $resource(
                    ms.apiFor('/sessions'),
                    { }
                  ),
        proto = Resource.prototype;

    //
    // Instance methods and class methods go here
    //

    return Resource;
  };

  angular.module('ms.core.api')
  .factory('SessionModel', ['$resource', Factory]);

}());