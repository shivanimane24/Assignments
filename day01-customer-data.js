console.log("==============================");
console.log("CUSTOMER REPORT");
console.log("==============================");
let accountIDs= ["AC401", "AC402", "AC403"];
let customerNames= ["Mark","John","Ben"];
let balance= [1000, 1500, 4000];
let customerIDs= [1,2,3];
for(i=0; i< customerIDs.length; i++){
    console.log("Customer ID:" ,customerIDs[i]);
    console.log("Account ID:" ,accountIDs[i]);
    console.log("Holder Name:" ,customerNames[i]);
    console.log("Balance:" ,balance[i]);
    console.log("");
}