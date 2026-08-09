console.log("=====================================")
console.log("TEST USER DATABASE")
console.log("=====================================")

let user= [1,2,3];
let firstNme= ["Rahul","Priya","Amit"];
let lastName= ["Sharma","Patil","Joshi"];
let email= ["rahul@gmail.com","priya@gmail.com","amit@gmail.com"];
let password=["Rahul@123","Priya@456","Amit@789"]

for(i=0; i< user.length; i++){
    console.log("USER", i+1, ":");
    console.log("-------------------------");
    console.log("Name:",firstNme[i], lastName[i]);
    console.log("Email:",email[i]);
    console.log("Password:",password[i]);
    console.log(" ");
}
    

