const fs = require('fs');

let interviewerData = fs.readFileSync('./shared/interviewer.json');
let interviewer = JSON.parse(interviewerData);

function getInterviewer(req,res){
    res.send(interviewer);
}

function postInterviewer(req,res){
    interviewer.push(req.body);
    fs.writeFile('./shared/interviewer.json',JSON.stringify(interviewer),(err)=>{
        if(err)
        console.log(err);
        else
        console.log('saved');
    })
    res.end();

}

module.exports = {
    getInterviewer : getInterviewer,
    postInterviewer : postInterviewer
}