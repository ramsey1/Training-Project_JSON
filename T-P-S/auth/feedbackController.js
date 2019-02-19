const fs = require('fs');

let feedbackData = fs.readFileSync('./shared/feedback.json');
let feedback = JSON.parse(feedbackData);

function getFeedback(req,res){
    res.send(feedback);
}

function postFeedback(req,res){
    
    fs.writeFile('./shared/feedback.json',JSON.stringify(req.body),(err)=>{
        if(err)
        console.log(err);
        else
        console.log('saved');
    })
    res.end();

}

module.exports = {
    getFeedback : getFeedback,
    postFeedback : postFeedback
}