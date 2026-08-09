console.log("Today's Clinic Schedule");
console.log("===========================");
let appointments= ["Annual checkup","Dental cleaning","Eye exam","Vaccination","Blood test"];
for(i=0; i<appointments.length; i++){
    console.log(i+1 ,".",appointments[i]);
}
 console.log(" ");
  console.log("Total Appointments:", appointments.length);

  //Using for....of Loop
  console.log("Today's Clinic Schedule");
  console.log("===========================");
  let appointmentNo = 1;
  for(let appointment of appointments){
    console.log(appointmentNo++,".",appointment);
  }
  console.log(" ");
  console.log("Total Appointments:", appointments.length);

//Appointment Outcomes
console.log(" ")
console.log(" ===============")
console.log("Appointment Outcomes ")
console.log(" ===============")
let appointmentStatus= ["COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"];
let completed=0;
let cancelled=0;
let rescheduled=0;

for(let i=0; i<appointmentStatus.length; i++){
    if(appointmentStatus[i]==="COMPLETED"){
completed++
    } else if(appointmentStatus[i]==="CANCELLED"){
        cancelled++
    } else {
        rescheduled++
    }
}
let completionRate = (completed / appointmentStatus.length) * 100;
let cancellationRate = (cancelled / appointmentStatus.length) * 100;

console.log("Total Appointments:", appointmentStatus.length);
console.log("Completed Appointments:", completed);
console.log("Cancelled Appointments:", cancelled);
console.log("Rescheduled Appointments:", rescheduled);
console.log("Completion Rate:", completionRate,"%");
console.log("Cancellation Rate:", cancellationRate,"%");

console.log(" ");
console.log("Patient Satisfaction Analysis");
console.log("==================================");
let satisfactionScores=[85, 92, 78, 95, 88, 73, 90, 87];
let total=0;
let highestScore=satisfactionScores[0];
let lowestScore=satisfactionScores[0];

for(let i=0; i<satisfactionScores.length; i++){
    total = total + satisfactionScores[i];

if(satisfactionScores[i] > highestScore){
highestScore = satisfactionScores[i];
}
if(satisfactionScores[i] < lowestScore){
lowestScore = satisfactionScores[i];
}
}
let average = total / satisfactionScores.length;
  console.log("Total Score:", total);
  console.log("Average Score:", average);
  console.log("Highest Score:", highestScore);
  console.log("Lowest Score:", lowestScore);


let appointmentTypes= ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
let appointmentOutcomes= ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]
let cancellationCount=0;
for(let i=0; i< appointmentTypes.length; i++){
    console.log((i+1),".", appointmentTypes[i],":",appointmentOutcomes[i]);
    if (appointmentOutcomes[i]=== "CANCELLED"){
    cancellationCount++
    }
}
 console.log(" ");
 console.log("Cancelled Appointments (need rebooking):");
for(let i=0; i< appointmentTypes.length; i++){
   if(appointmentOutcomes[i]=== "CANCELLED"){
    console.log("-", appointmentTypes[i]);
   }
}
 console.log(" ");
 console.log("Total Cancellations:",cancellationCount);
