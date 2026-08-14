let leaveRequest = {id: "LR-001",
                    type: "Sick Leave",
                    status: "PENDING",
                    days: 2}
console.log("ID:", leaveRequest.id);     
console.log("Type:", leaveRequest.type);                   
console.log("Status:", leaveRequest.status);                   
console.log("Days:", leaveRequest.days);       
leaveRequest.approver = "Priya Sharma";
console.log("Approver:",leaveRequest.approver);              
leaveRequest.status = "Approved";
console.log("Complete Object:",leaveRequest);                                                  

console.log("");
console.log("===============");
console.log("Employee Directory");
let Employees = [{id: "SR-001",
                  department: "IT",
                  Role: "QA"},
                {id: "SR-002",
                  department: "Sales",
                  Role: "Manager"},
                {id: "SR-003",
                  department: "HR",
                  Role: "Manager"}]
let count=1;
let managercount =0;
let qacount =0;                  
for(let Employee of Employees){
    console.log("Employee"+count+":");
    count++  
    console.log("ID:",Employee.id);     
    console.log("Department:",Employee.department);  
    console.log("Role:",Employee.Role);          
    console.log("");        
    if(Employee.Role === "Manager"){
        managercount++;
    } else if(Employee.Role === "QA"){
        qacount++;
    }
}
    console.log("");        
console.log("Total employees:",Employees.length);
console.log("Total Managers:",managercount);
console.log("Total QA:",qacount);

console.log("");
console.log("===============");
console.log("Leave Requests Report");
console.log("");
let leaveRequests = [{type: "Sick leave",
                      status: "Approved",
                      days: 2},
                      {type: "Casual leave",
                      status: "Pending",
                      days: 3},
                      {type: "Earned leave",
                      status: "Pending",
                      days: 5},
                      {type: "Unpaid leave",
                      status: "Rejected",
                      days: 1},
                      {type: "Sick leave",
                      status: "Approved",
                      days: 1}
]
let approvedCount=0;
let rejectedCount=0;
let pendingCount=0;
let totalDays=0;
for(let leaveRequest of leaveRequests){
    console.log("Type:",leaveRequest.type);
    console.log("Status:",leaveRequest.status);
    console.log("Days",leaveRequest.days);
    console.log("");
        totalDays += leaveRequest.days;
if(leaveRequest.status === "Approved"){
    approvedCount+=leaveRequest.days
} else if(leaveRequest.status === "Pending"){
    pendingCount+=leaveRequest.days
} else if(leaveRequest.status === "Rejected"){
    rejectedCount+=leaveRequest.days
}
}
let approvedPercentage = (approvedCount / leaveRequests.length) * 100;
let rejectedPercentage = (rejectedCount / leaveRequests.length) * 100;
let pendingPercentage = (pendingCount / leaveRequests.length) * 100;
console.log("Total Requests:", leaveRequests.length);
console.log("Approved:", approvedCount,"-",approvedPercentage,"%");
console.log("Rejected:", rejectedCount,"-",rejectedPercentage,"%");
console.log("Pending:", pendingCount,"-",pendingPercentage,"%");
console.log("Total Days:", totalDays);

console.log("");
console.log("===============");
console.log("Archive Employee Report");
console.log("");
let employeeRecord = {employeeId: "EMP-101",
                      department: "Sales",
                      tempNote: "temporary",
                      debugInfo: "some debug data"}
console.log("Before Cleanup:",employeeRecord);
delete employeeRecord.tempNote;
delete employeeRecord.debugInfo;
console.log("After Cleanup:",employeeRecord);
console.log("Does 'tempNote' exist?:", "tempNote" in employeeRecord);

let departmentTracker = {deptName: "Sales",
                         location: "Building A",
                         requests: [{type: "Sick leave",
                      status: "Approved",
                      days: 2},
                      {type: "Casual leave",
                      status: "Pending",
                      days: 3},
                      {type: "Earned leave",
                      status: "Pending",
                      days: 5},
                      {type: "Unpaid leave",
                      status: "Rejected",
                      days: 1},
                      {type: "Sick leave",
                      status: "Approved",
                      days: 1}]}
 approvedCount = 0;
 rejectedCount = 0;   
 total = 0;                  
console.log("Department Name:",departmentTracker.deptName);                      
console.log("Location:",departmentTracker.location);
for(let i=0; i< departmentTracker.requests.length; i++){
    let request = departmentTracker.requests[i]
    console.log(i+1,".",request.type,"-",request.status,"-",request.days)
        total = total + request.days;
    if(request.status === "Approved"){
        approvedCount++
    }
    if(request.status === "Rejected"){
        rejectedCount++
    }
    
}

console.log("Total Requests:", departmentTracker.requests.length);
console.log("Approved:", approvedCount);
console.log("Rejected:", rejectedCount);
console.log("Total Days:", total);
if (rejectedCount > 0) {
    console.log("Status: ⚠️ Review rejected requests");
} else {
    console.log("Status: ✓ No rejected requests");
}



