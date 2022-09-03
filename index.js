

function calculateMinutes(dateCurrent, dateRecorded) {
let dif = (dateCurrent.getTime() - dateRecorded.getTime()) / 1000 / 60;

return Math.abs(Math.round(dif));

}


let currentDate = new Date();
console.log(currentDate);

let recordedDate = new Date(2022, 08, 03, 17, 44, 00);

console.timeLog(recordedDate)


console.log(calculateMinutes(currentDate, recordedDate) > 60)

