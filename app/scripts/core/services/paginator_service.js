(function() {
  function Factory($timeout, StateHandler) {

    var proto;

    function Service(ResourceClass) {
      this.page = 1;
      this.ResourceClass = ResourceClass;
      this.requestQueue = [ ];
      this.requestCount = 0;
      this.state = StateHandler.getInstance();
      this.isComplete = false;
    };
    proto = Service.prototype;

    proto.requestTo = function(action) {
      this.action = action;
      return this;
    };

    proto.withParams = function(params) {
      this.params = params;
      return this;
    };

    proto.pushTo = function(dataSet) {
      this.dataSet = dataSet;
      return this;
    };

    proto.uniq = function(property) {
      this.uniqProperty = property;
      return this;
    };

    proto.paginate = function() {
      var self = this; 
      if(self.isComplete) {
        return self;
      };
      
      self._queuePush();
      // this condition will prevent uncessary fetches unless the previous
      // fetch is complete
      if(self.requestQueue.length == 1) { 
        $timeout(function(){
          self._dataFetch();
        }, 0, true); 
      };
      return self;
    };

    proto._dataFetch = function() {
      var self = this,
          p = { page: self.page };
      self.state.initiate();

      if(self.params) {
        angular.extend(p, self.params);
      };

      self.ResourceClass[self.action](p).$promise.then(function(response){ 
        self._afterResolution(response);
      }, function() {
        self.state.error();
      });
    };
  
    proto._afterResolution = function(response) {
      var self = this;
      // push data
      self._dataPush(response);
      // set next page
      self._setNextPage(response);
      // remove the first element from request queue
      self._queueShift();

      self.state.success();
      // if more calls are pending and previous response wasn't empty
      if(self.requestQueue.length > 0 && self._isValidResponse(response)) {
        self._dataFetch();
      } else {
        // calls might be pending but response is already empty
        // so no use executing the other requests
        // so empty the queue
        self.requestQueue = [ ];
      };

      if(!self._isValidResponse(response)) {
        self.isComplete = true;
      };
    };

    proto._setNextPage = function(response) {
      var self = this;
      if(self._isValidResponse(response)) {
        self.page = self.page + 1;
      };
    };

    // pushes data into the array using the response
    proto._dataPush = function(response) {
      var self = this;

      angular.forEach(response, function(res){
        if(!self._dataExists(res)) {
          self.dataSet.push(res);
        };
      });
    };

    proto._dataExists = function(data) {
      var self = this,
          found = false;
      if(!self.uniqProperty) {
        return false;
      };
      angular.forEach(self.dataSet, function(d){
        if(data[self.uniqProperty] == d[self.uniqProperty]) {
          found = true;
        };
      });
      return found;
    };

    // maintains a queue to store the number of pagination requests
    proto._queuePush = function() {
      var self = this;
      self.requestCount++;

      self.requestQueue.push({
        count: self.requestCount   
      });
    };

    // when a pagination request is complete clear the first one
    proto._queueShift = function() {
      this.requestQueue.shift();
    };

    proto._isValidResponse = function(response) {
      return (response && response.length > 0);
    }
    return {
      getInstance: function(ResourceClass) {
        return new Service(ResourceClass);
      }
    }
  };
  angular.module('ms.core.services')
  .factory('PaginatorService', [ 
    '$timeout',
    'StateHandlerService',
    Factory
  ]);
}());