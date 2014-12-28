(function(){
  function Factory($resource){
    var Resource = $resource(ms.apiFor('/conversations/:id/categories'), {id: '@id'}),
        res = Resource,
        proto = res.prototype;
    //
    // Instance methods and class methods go here
    //

    return res;
  };

  angular.module('ms.core.api')
  .factory('CategoryModel', ['$resource', Factory]);

}());