const pontS = document.getElementById("sec");
const pontM = document.getElementById("min");
const pontH = document.getElementById("hour");

function getTime(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    
    const timeRelation = 6; //
    const relativeSecMin = 0.1;
    const relativeMinHour = 0.5;
    const velHour = 30;
    
    const setZero = 180; //to fix the inverse angle of the sticks

    pontS.style.transform = 'rotate(' + ((seconds * timeRelation) + setZero) + 'deg)';
    pontM.style.transform = 'rotate(' + ((minutes * timeRelation) + (seconds * relativeSecMin) + setZero) + 'deg)';
    pontH.style.transform = 'rotate(' + ((hours * velHour) + (minutes * relativeMinHour) + setZero) + 'deg)';

    console.log("Hours: " + hours + "\nMinutes: " + minutes + "\nSeconds" + seconds);
    console.log((hours * velHour) + (minutes * relativeMinHour) + setZero);
    console.log((minutes * timeRelation) + (seconds * relativeSecMin) + setZero);
    console.log((seconds * timeRelation) + setZero);
}

setInterval(getTime, 100);