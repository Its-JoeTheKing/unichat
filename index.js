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

http.createServer(app).listen(process.env.PORT || 80, ()=>{
    console.log('HTTP Server running on port 80');
});
