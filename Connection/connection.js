var mysql=require('mysql');
var dbConfig= require('../configuration/dbConfig.json');
var connection=mysql.createConnection(dbConfig);
connection.connect(function (err,data) {
    if (err){
        console.log("Error connecting to database Error : "+err);
    }
    else{
        console.log('connected to database-'+dbConfig.database);
    }
});
module.exports=connection;