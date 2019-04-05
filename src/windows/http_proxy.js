cordova.commandProxy.add("getOdds", {
  uwp: async function(successCallback, errorCallback, url) {
    try {
      var service = new WinHttp.Service();
      var s = await service.getOdds(url);
      successCallback(JSON.parse(s));
    } catch (e) {
      errorCallback(0);
    }
  }
});
