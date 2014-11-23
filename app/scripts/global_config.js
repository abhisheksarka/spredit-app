var ms = { };

ms.ROOT_API_URL = "/api/v1";
ms.apiFor = function(path) {
  return ms.ROOT_API_URL + path; 
};