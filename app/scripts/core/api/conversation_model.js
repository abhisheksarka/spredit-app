(function(){
  function Factory($resource){
    var Resource = $resource(ms.apiFor('/conversations/:id'), {id: '@id'},
                    {
                      'update': { method: 'POST' } 
                    }),
        res = Resource,
        proto = res.prototype;
    //
    // Instance methods and class methods go here
    //

    return res;
  };

  angular.module('ms.core.api')
  .factory('ConversationModel', ['$resource', Factory]);

}());