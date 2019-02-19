const fs = require('fs');

let scheduleData = fs.readFileSync('./shared/schedule.json');
let schedule = JSON.parse(scheduleData);

function getSchedule(req,res){
    res.send(schedule);
}

function postSchedule(req,res){
    fs.writeFile('./shared/schedule.json',JSON.stringify(req.body),(err)=>{
        if(err)
        console.log(err);
        else
        console.log('saved');
    })
    res.end();
}

module.exports = {
    getSchedule : getSchedule,
    postSchedule : postSchedule
}