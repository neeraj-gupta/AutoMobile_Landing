/**
 * Created by Neeraj on 7/15/2016.
 */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/node_modules'));

app.listen(process.env.PORT || 3000);