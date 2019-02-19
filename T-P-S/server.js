const server = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var cors = require('cors');
var routes = require('./router');

const app = server();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',routes);

// let candidateData = fs.readFileSync('./shared/candidate.json');
// let candidate = JSON.parse(candidateData);
// // let candidate = JSON.stringify(candidateData);

// app.get('/candidate',(req,res)=>{
//     res.send(candidate);
// })


app.listen(3000,()=>{
    console.log('Server running on port 3000');
})