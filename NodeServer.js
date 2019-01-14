var express = require("express");
var app = express();

// var router = express.Router();

// router.use(function firstFunc(req,res,next){
//     console.log("Time: ",Date.now());
//     next();
// });

app.get( "/", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html");
    //console.log(__dirname);
    //res.render( __dirname + "/" + "index.html" );
    
});

var server = app.listen( 8081, () => {
    var host = server.address().address;
    console.log(host);
    var port = server.address().port;
    console.log("http://%s:%s", host, port );

});