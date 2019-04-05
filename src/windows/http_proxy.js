cordova.commandProxy.add("getOdds", {
  uwp: async function (successCallback, errorCallback, url) {
    try {
      var service = new WinHttp.Service();
      var s = await service.getOdds(url);
      var successObject = {
        data: s,
        status: 200,
        url: url
      }
      successCallback(successObject);
    } catch (e) {
      var errorObject = {
        data: e,
        status: 500,
        url: url
      }
      errorCallback(errorObject);
    }
  }
});
