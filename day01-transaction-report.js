


console.log("==================================");
console.log("DAILY TRANSACTION REPORT");
console.log("==================================");
console.log("");
let transactionIDs= ["TID-101","TID-102","TID-103","TID-104","TID-105"];
let amount= [5000, 1000, 4000, 3000, 2500];
let status= ["DECLINED","APPROVED","PENDING","PENDING","APPROVED"];
let declined=0;
let approved=0;
let pending=0;
for(let i=0; i< transactionIDs.length; i++){
    console.log("Transaction" ,(i+1),":",transactionIDs[i], "Amount:",amount[i])
    console.log("Status:",status[i]);
    console.log("");
if (status[i]=== "APPROVED"){
    approved++;
} else if(status[i]=== "DECLINED"){
    declined++
} else {
    pending++
}
}