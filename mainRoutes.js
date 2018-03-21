(function () {
    var express=require('express');
    var Router=express.Router();
    var portController = require('./Controllers/portController');
    var execBashController=require('./Controllers/execBashController');
    Router.get('/testConnection',function (req,res) {
       res.send("Connection Successful");
    });
    module.exports=Router;
    Router.post('/updatePortInfo',function (req,res) {
        portController.updatePortForDeployMent(req,res);
    });
    Router.post('/rollBackPortInfo',function (req,res) {
       portController.deletePortInfo(req,res);
    });
    Router.post('./execBash',function (req,res) {
        execBashController.execBash(req,res);
    });
})();