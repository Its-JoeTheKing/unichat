const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const http = require('http');
const fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
    
})

http.createServer(app).listen(80, ()=>{
    console.log('HTTP Server running on port 80');
});
https.createServer(app).listen(443,()=>{
    console.log('Server is running on port 443');
});
