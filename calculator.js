const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extend : true }));


//  Normal Calculator Code 

app.get("/", function(req, res){

    res.sendFile( __dirname + "/index.html");
});




app.post("/", function(req, res){

    var num1 =Number( req.body.num1) ;

    var num2 = Number(req.body.num2);


    var result = num1 + num2 ;

    res.send(" Your calculation is " + result);

});

// BMI CALCULATOR CODE

app.get("/bmicalculator", function(req,res){

    res.sendFile( __dirname + ("/bmicalculator.html"));
});

app.post("/bmicalculator", function(req, res){

        var weight = parseFloat(req.body.weight);
        var height = parseFloat( req.body.height);
        var bmicaculate = weight / (height * height );

        res.send(' Your BMI is :  ' + bmicaculate)


});


// Multipication Calculator

app.get("/multiplication",function(req,res){

    res.send( __dirname + "/multiplication.html");
});


app.post("/multiplication", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 * num2 ;

    res.send(" Your Multipication is " + result);
});


app.listen(3000, function(){

    console.log("servier is running on port 3000")

});