function generateAccountId(firstName, lastName){
    return firstName.toLowerCase() + lastName.toLowerCase();
}
function generateEmail(firstName, lastName){
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}"@gmail.com"`;
}
function generateTempPin(seed){
    return seed + "00";
}
console.log("Account ID:", generateAccountId("John", "Doe"));
console.log("Email ID:", generateEmail("John", "Doe"));
console.log("Temp Pin:", generateTempPin(42));

function generateAccountId(firstName, lastName) {
return firstName.toLowerCase() + lastName.toLowerCase();
}

function generateEmail(firstName, lastName) {
return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@examplebank.com`
}

function generateTempPin(seed) {
return seed + "00";
}


function generateCustomer(firstName, lastName) {
return {
name: `${firstName} ${lastName}`,
email: generateEmail(firstName, lastName),
accountId: generateAccountId(firstName, lastName),
balance: 0,
isActive: true
};
}

const customer1 = generateCustomer("John", "Doe");
const customer2 = generateCustomer("Jane", "Smith");

console.log("Customer 1:");
console.log(customer1);

console.log("Customer 2:");
console.log(customer2);

console.log("");
console.log("==================");
console.log("Valid account No.");
console.log("==================");
console.log("");
function validateAccountNumber(accountNumber){
    if(accountNumber.startsWith("ACC-") && accountNumber.length === 7){
        return "Valid";
    } else {
        return "Invalid";
    }
}
console.log("Acc-001", validateAccountNumber("ACC-001"));
console.log("Acc-01", validateAccountNumber("ACC-01"));
console.log("Acc-1001", validateAccountNumber("ACC-1001"));
console.log("001", validateAccountNumber("001"));