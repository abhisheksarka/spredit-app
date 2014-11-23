var ms = { 
  config: { }
};

ms.config.ROOT_API_URL = "/api/v1";
ms.config.APP_INIT = false;

ms.config.FB_API_KEY = "";
ms.config.FB_PERMISSIONS_SCOPE = "";

ms.apiFor = function(path) {
  return ms.config.ROOT_API_URL + path; 
};