cordova.commandProxy.add("request", {
  uwp: async function (successCallback, errorCallback, [method, url]) {
    try {
      // console.info("*****************");
      // console.info("Method:", method);
      // console.info("URL:", url);
      // console.info("*****************");
      var service = new WinHttp.Service();
      var s = await service.request(method, url);
      // console.info("*****************");
      // console.info("Result:", s);
      // console.info("*****************");
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
