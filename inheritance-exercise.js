class task{
    constructor(name){
        this.name= name,
        this.status= "pending",
        this.notes= []
    }
    start(){
        console.log("Starting:", this.name);
        this.status= "In Progress";
    }
    cancel(reason){
        this.notes.push(reason);
        this.status= "Cancel"
        console.log(this.name, "Cancelled;",reason);
    }
    complete(){
        this.status= "Completed";
        console.log(this.name, "Completed");
    }
}
class meetingTask extends task{
    constructor(name, location, room){
        super(name),
        this.location= location,
        this.room= room
    }
    arrive(){
        console.log("Arriving At:", this.location);
    }
    enterRoom(){
        console.log("Entering Room:", this.room);
    }
    start(){
        super.start();
        this.arrive();
    }
}
class remoteTask extends task{
    constructor(name, platform, duration=20){
        super(name),
        this.platform= platform,
        this.duration= duration
    }
    connectCall(){
        console.log("Connecting via:",this.platform);
        console.log("Expected Duration:", this.duration,"min");
    }
    start(){
        super.start();
        this.connectCall();
    }
}
let performanceReview= new meetingTask("Performance Review", "Conference Room B", "Room 204");
let onboardingCall= new remoteTask("Onboarding Call", "SecureVideo", 30);
performanceReview.start();
performanceReview.enterRoom();
performanceReview.complete();
onboardingCall.start();
onboardingCall.complete();
console.log("performanceReview instanceof meetingTask:",performanceReview instanceof meetingTask);
console.log("meetingTask instanceof task:", meetingTask instanceof task);
console.log("task instanceof Object:",task instanceof Object);
console.log("onboardingCall instanceof remoteTask:", onboardingCall instanceof remoteTask);
console.log("remoteTask instanceof task:", remoteTask instanceof task);
const followupSync = new meetingTask("Conference Room A", "Room 101");
followupSync.start();
followupSync.cancel("Manager Unavailable");
console.log("Notes:", followupSync.notes);
console.log("Status:", followupSync.status);

console.log("");
console.log("==================");
console.log("Multi-Level Inheritance Chain");
console.log("==================");
console.log("");

class employeeRecord{
    constructor(employeeName){
        this.employeeName= employeeName
    }
    access(){
        console.log("Accessing Records for:", this.employeeName);
    }
}
class digitalRecords extends employeeRecord{
    constructor(employeeName, system){
        super(employeeName),
        this.system= system
    }
    connectSystem(){
        console.log("Connecting to", this.system, "System");
    }
}
class SecureRecord extends digitalRecords{
    constructor(employeeName, system, encrypted = true){
        super(employeeName,system),
        this.encrypted= encrypted
    }
    secureLink(){
        console.log("Establishing secure link (encrypted:", this.encrypted, ")");
    }
}
let ashaRecord = new SecureRecord("Aisha Khan", "PeopleHub", true);
console.log("ashaRecord instanceof SecureRecord:", ashaRecord instanceof SecureRecord);
console.log("ashaRecord instanceof DigitalRecord:", ashaRecord instanceof digitalRecords);
console.log("ashaRecord instanceof EmployeeRecord:", ashaRecord instanceof employeeRecord);
ashaRecord.secureLink();
ashaRecord.connectSystem();
ashaRecord.access();