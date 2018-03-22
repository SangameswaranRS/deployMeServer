(function () {
    var portDAO = require('../DataAccessObject/portDAO');
    module.exports.updatePortForDeployMent=function (req,res) {
      portDAO.updatePortInformation(req.body.port,function (err,data) {
        if(err){
            var errorJson={
                statusCode:500,
                message:err.message
            };
            console.log(err.message);
            res.status(500).send(errorJson);
        }else{
            var successJson={
                statusCode: 200,
                message:'Successfully updated'
            };
            res.status(200).send(successJson);
        }
      });
    };

    module.exports.deletePortInfo=function (req,res) {
        portDAO.deletePortInfo(req.body.port,function (err,data) {
           if(err){
               var errorJson={
                   statusCode:500,
                   message:err.message
               };
               res.status(500).send(errorJson);
           } else{
               var successJson={
                   statusCode: 200,
                   message:'Rollback successful'
               };
               res.status(200).send(successJson);
           }
        });
    };
})();