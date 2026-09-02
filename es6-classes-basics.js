class employee{
    constructor(name, department){
        this.name= name;
        this.department= department;
    }
    displayInfo(){
        console.log("Name:", this.name,"|", "Department:", this.department);
    }
}
let employee1= new employee("Shivani", "QA");
let employee2= new employee("Priya", "Developer");
employee1.displayInfo();
employee2.displayInfo();

console.log("");
console.log("==================");
console.log("Office Class");
console.log("==================");
console.log("");

class officeSpace{
    constructor(lengthft,widthft){
        this.lengthft= lengthft;
        this.widthft= widthft;
    }
    calculateFloorArea(){
        return this.lengthft * this.widthft
    }
     calculateWallParameter(){
        return 2 * (this.lengthft + this.widthft);
    }
}
let officeSpace1= new officeSpace(5,3);
console.log("Floor Area:", officeSpace1.calculateFloorArea());
console.log("Floor Parameter:", officeSpace1.calculateWallParameter());

console.log("");
console.log("==================");
console.log("Leave Balance");
console.log("==================");
console.log("");

class leaveBalance{
    constructor(employeeName, daysAvailable){
        this.employeeName= employeeName;
        this.daysAvailable= daysAvailable;
    }
    accrueLeave(days){
        this.daysAvailable= this.daysAvailable + days
        console.log("Accrude",days,"days.","New Balance:", this.daysAvailable);
    }
    requestLeave(days){
        if(days > this.daysAvailable){
            console.log("Cannot request",days, "days");
            console.log("Insufficient leave balance!");
        } else {
            this.daysAvailable= this.daysAvailable - days;
            console.log("Used",days,"days.","Balance:",this.daysAvailable);
        }
    }
    checkBalance(){
        console.log("Employee Name:", this.employeeName, "Leave Balance:",this.daysAvailable, "days")
    }
}
let leaveBalance1= new leaveBalance("Aisha Khan", 20);
console.log(leaveBalance1.employeeName, "Leave Balance:", leaveBalance1.daysAvailable)
leaveBalance1.accrueLeave(5);
leaveBalance1.requestLeave(10000);
leaveBalance1.checkBalance();

console.log("");
console.log("==================");
console.log("TeamMemberScores");
console.log("==================");
console.log("");

class TeamMemberScores {

    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
        this.performanceScores = [];
    }

    addScore(score) {
        this.performanceScores.push(score);
    }

    getAverageScore() {

        if (this.performanceScores.length === 0) {
            return 0;
        }

        let total = 0;

        for (let score of this.performanceScores) {
            total = total + score;
        }

        return total / this.performanceScores.length;
    }
}

let teamMember = new TeamMemberScores("Raj Verma", "E101");

teamMember.addScore(80);
teamMember.addScore(90);
teamMember.addScore(70);
console.log(teamMember.name);
console.log("Average Score:", teamMember.getAverageScore());