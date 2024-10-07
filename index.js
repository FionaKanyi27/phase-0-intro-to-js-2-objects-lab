// Initialize the employee object
let employee = {
    name: "John Doe",
    streetAddress: "1234 Elm St"
};

// Function: updateEmployeeWithKeyAndValue
// This function should return a new object with the updated key-value pair without mutating the original object
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

// Function: destructivelyUpdateEmployeeWithKeyAndValue
// This function should update the employee object and mutate it
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function: deleteFromEmployeeByKey
// This function should return a new object without the specified key-value pair, without mutating the original object
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

// Function: destructivelyDeleteFromEmployeeByKey
// This function should delete the specified key-value pair from the employee object and mutate it
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// Example usage of the functions

// Non-destructive update
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "5678 Oak St");
console.log(updatedEmployee); // { name: 'John Doe', streetAddress: '5678 Oak St' }
console.log(employee);        // { name: 'John Doe', streetAddress: '1234 Elm St' } (unchanged)

// Destructive update
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "5678 Oak St");
console.log(employee);        // { name: 'John Doe', streetAddress: '5678 Oak St' } (changed)

// Non-destructive delete
let employeeAfterDelete = deleteFromEmployeeByKey(employee, "streetAddress");
console.log(employeeAfterDelete); // { name: 'John Doe' } (streetAddress removed)
console.log(employee);            // { name: 'John Doe', streetAddress: '5678 Oak St' } (unchanged)

// Destructive delete
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log(employee);            // { name: 'John Doe' } (streetAddress removed)
