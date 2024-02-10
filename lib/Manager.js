// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');


// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber

class Manager extends Employee {   
    constructor(name, id, email, officeNumber) {
        super(name, id, email);    //By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods:
        this.officeNumber = officeNumber;        
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

// getRole()—overridden to return 'Manager';

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;