var tools = require('@boundlessgeo/sdk-tools');
var port;
process.argv.slice(2).forEach(function (arg) {
  var flag = arg.split('=')[0];
  if (flag == '--port') {
    port = arg.split('=')[1];
  }
});
tools.startServer(undefined, port);
