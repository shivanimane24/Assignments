let totalTests = 15;
let passedTests = 12;
let failedTest = totalTests - passedTests;
let passRate = (passedTests/totalTests) * 100;
let failRate = (failedTest/totalTests) * 100;
let testSuitName = "Login Functionality";
let allTestPassed = failedTest === 0;

console.log("Total Tests:" ,totalTests);
console.log("Passed Tests:" ,passedTests);
console.log("Failed Tests:" ,failedTest);
console.log("Pass Rate:" ,passRate + "%");
console.log("Fail Rate:" ,failRate + "%");
console.log("Test Suit Name:" ,testSuitName);
console.log("All Tests Passed:" ,allTestPassed);