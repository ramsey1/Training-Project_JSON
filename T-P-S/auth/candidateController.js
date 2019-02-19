const fs = require('fs');

let candidateData = fs.readFileSync('./shared/candidate.json');
let candidate = JSON.parse(candidateData);

function getCandidate(req,res){
    res.send(candidate);
}

function postCandidate(req,res){
    candidate.push(req.body);
    fs.writeFile('./shared/candidate.json',JSON.stringify(candidate),(err)=>{
        if(err)
        console.log(err);
        else
        console.log('saved');
    })
    res.end();
}

module.exports = {
    getCandidate : getCandidate,
    postCandidate : postCandidate
}