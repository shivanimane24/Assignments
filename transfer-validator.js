function validateTransferNested(fromAccount, toAccount, amount){
    if(fromAccount !== ""){
    if(toAccount !== ""){
    if(amount > 0){
        return "Transfer Valid"
    } else {
        return "Amount must be positive";
    } 
    }  else {
        return "To account required";
    }  
    } else {
        return "From account required"
    }
}
console.log(validateTransferNested("", "ACC-2002", 500));
console.log(validateTransferNested("ACC-1001", "", 500));
console.log(validateTransferNested("ACC-1001", "ACC-2002", -50));
console.log(validateTransferNested("ACC-1001", "ACC-2002", 500));

