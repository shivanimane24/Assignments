function createLoanApplication(applicantName, amount = 5000, termMonths = 12){
console.log("Applicant:", applicantName);
console.log("Amount:", amount);
console.log("Term:", termMonths, "months");
}
createLoanApplication("Shivani");
createLoanApplication("Sakshi", 1000);
createLoanApplication("Sarvesh", 1200, 18);