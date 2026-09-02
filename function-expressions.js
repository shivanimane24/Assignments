// 1. Function expression
const isPositiveAmount = function(amount) {
return amount > 0;
};

// 2. Array of transaction validators
const transactionValidators = [
function(amount) {
return typeof amount === "number";
},

function(amount) {
return isPositiveAmount(amount);
},

function(amount) {
return amount < 10000;
}
];

// 3. Run all validators against 5000
for (let i = 0; i < transactionValidators.length; i++) {
console.log(
`Validator ${i + 1}:`,
transactionValidators[i](5000)
);
}

// 4. Factory function
function makeMinBalanceValidator(minBalance) {
return function(balance) {
return balance >= minBalance;
};
}

// 5. Create validators
const validateBasic = makeMinBalanceValidator(0);
const validateGold = makeMinBalanceValidator(5000);

// Test with balance 2000
console.log("validateBasic(2000):", validateBasic(2000));
console.log("validateGold(2000):", validateGold(2000));
