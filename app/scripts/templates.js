angular.module('ms').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/scripts/pages/home/template.html',
    "<h1>Home</h1>"
  );


  $templateCache.put('app/scripts/pages/index/template.html',
    "<h1>Index</h1>"
  );

}]);
