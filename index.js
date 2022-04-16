const employee={
    name:"Sam", 
    streetAddress: "12 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newobject={...employee}
    newobject[key]=value
    return newobject
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newobject={...employee}
    delete newobject[key]
    return newobject
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
updateEmployeeWithKeyAndValue(employee,name,"Aya Mydani")