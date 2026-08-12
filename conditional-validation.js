let email = "customer@examplebank.com";
console.log("Email:" ,email);
if(email.includes ("@" && ".")){
console.log("Valid email format");
} else {
    console.log("Invalid email format");
}

let transactionStatus = "Declained";
if(transactionStatus === "Approved"){
    console.log("Transaction Status:", transactionStatus);
    console.log("Transaction Approved");
} else if(transactionStatus === "Declained"){
    console.log("Transaction Status:", transactionStatus);
    console.log("Transaction Declained");
}else if(transactionStatus === "Pending"){
    console.log("Transaction Status:", transactionStatus);
    console.log("Transaction Pending");
} else {
    console.log("Unknown Transaction Status");
}

let portalPassword = "Bank@123";
console.log("Password:",portalPassword);
console.log("Password Length:",portalPassword.length);
if(portalPassword.length >= 10){
    console.log("Strong Password");
} else if(portalPassword.length <= 8 && portalPassword.length >= 5){
    console.log("Medium Password");
} else if(portalPassword.length <= 4){
    console.log("Weak Password");
}

console.log("");
console.log("===============");
let score = 85;
    console.log("Loan Score:", score);

if(score >= 90){
    console.log("Grade A: (Excellent)");
} else if(score >= 80 && score <= 89){
        console.log("Grade B: (Good)");
}else if(score >= 70 && score <= 79){
        console.log("Grade C: (Average)");
}else if(score >= 60 && score <= 69){
        console.log("Grade D: (Pass)");
}else if(score < 60){
        console.log("Grade E: (Fail)");
}   

console.log("");
console.log("===============");
 let tranStatus = "Declained";
switch(tranStatus){
    case "Approved":
    console.log("Transaction Approved");
    break;
case "Declained":
    console.log("Transaction Declained- Contact your bank");
    break;
    case "Pending":
    console.log("Transaction Pending");
    break;
    case "On Hold":
    console.log("Transaction on hold - review required");
    break;
    default:
    console.log("Unknown transaction status");

} 

let responseCode = 51;

switch (responseCode) {
    case 0:
    console.log("Approved - transaction successful");
        break;
    case 8:
    console.log("Approved - ID verification required");
        break;
    case 5:
    case 51:
    case 61:
    console.log("Declined - insufficient funds or over limit");

        // Group these: "Declined - insufficient funds or over limit"
        // (5, 51, and 61 all print the same message - intentional fall-through)
        break;
    case 54:
    console.log("Declined - expired card");
        break;
    case 91:
    case 96:
    case 99:
    console.log("System error - try again later");
        break;
    default:
    console.log("Unknown response code: " + responseCode);

}
console.log("");
console.log("===============");
let processingTime = 0.5;  // transaction processing time in seconds

switch (true) {
    case processingTime < 1:
        console.log("Instant processing");
        break;
    case processingTime < 3:
        console.log("Fast processing");
        break;
    case processingTime < 6:
        console.log("Acceptable - flag if this becomes a trend");
        break;
    default:
        console.log("Slow - investigate the delay");
}

console.log("");
console.log("===============");
let x = 2;

switch (x) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("other");
}
console.log("");
console.log("===============");
function validateCustomerOnboarding(fullName, portalPassword, email) {
    console.log("Validating customer onboarding data...\n");
    if(fullName === "" && portalPassword === ""){
        console.log("Enter Name and Password");
} else if(portalPassword.length < 8){
        return "Weak Password";
} else if(!email.includes("@") || !email.includes(".")){
        return "Incorrect Email ID";
} else {
   return "All validations passed - account ready to open!";
}
}
let result = validateCustomerOnboarding("Aisha Khan", "Bank@2026", "aisha@example.com");
console.log(result);