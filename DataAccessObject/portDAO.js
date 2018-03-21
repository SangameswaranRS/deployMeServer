(function () {
    var connection = require('../Connection/connection');
    module.exports.updatePortInformation=function (port,callBack) {
        var portJson={
          port:port
        };
        connection.query('insert into portinfo set ?',portJson,function (err,data) {
           callBack(err,data);
        });
    };

    module.exports.deletePortInfo=function (port,callBack) {
      connection.query('delete from portinfo where port=?',port,function (err,data) {
        callBack(err,data);
      });
    };
})();