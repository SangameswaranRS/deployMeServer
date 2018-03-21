(function () {
    var fs=require('fs');
    var pathToRunDeployMeScript='cd ../../Ubuntu/compilerLaboratory/labProject';
    var runDeployMeScriptWithArgs='./runDeployMe.sh  ../../../WebstormProjects/deployMeServer/deployMeScrips-Generated/script.deployMe';
    var exec=require('child_process').exec;
    module.exports.writeCodeToFile=function (req,res) {
        if(req.body.deployMeCode === undefined){
            var failureJson={
                statusCode:400,
                message:'Bad Request'
            };
            res.status(400).send(failureJson);
        }else{
            fs.writeFile('deployMeScrips-Generated/script.deployMe',req.body.deployMeCode,function(err){
                var child;
                if (err) {
                    console.log(err.message);
                    var failureJson = {
                        statusCode: 500,
                        message: err.message
                    };
                    res.status(500).send(failureJson);
                } else {
                    //write Successful. Execute Script.
                    child = exec(pathToRunDeployMeScript + ";" + runDeployMeScriptWithArgs, function (error, stdout, stderr) {
                        if (error !== null) {
                            console.log('exec error: ' + error);
                            res.status(500).send({statusCode: 500, message: error});
                        } else {
                            console.log(stdout);
                            var response = {
                                statusCode: 200,
                                message: stdout
                            };
                            res.send(response);
                        }
                    });
                }
            });
        }
    }
})();