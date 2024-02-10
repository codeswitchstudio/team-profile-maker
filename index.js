const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members
const teamMembers = [];

// Write code in index.js that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.



// When a user starts the application then they are prompted to enter the team manager’s:
// Name
// Employee ID
// Email address
// Office number

function promptManager() {
    inquirer
        .prompt([    /* Pass your questions in here */
        { 
            type: 'input', 
            name: 'name',
            message: 'Please enter team manager\'s name.',
            // validate:      
        } ,
        { 
            type: 'input', 
            name: 'id',
            message: 'Please enter team manager\'s ID number.',
            // validate:      
        } ,
        { 
            type: 'input', 
            name: 'email',
            message: 'Please enter team manager\'s email address',
            // validate:      
        } ,
        { 
            type: 'input', 
            name: 'officeNumber',
            message: 'Please enter team manager\'s office number',
            // validate:      
        }         
        ])
        .then((answers) => {
            // Add input to array
            const  manager = new Manager(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.officeNumber
            );
            teamMembers.push(manager);
            console.log(`Adding the manager to the team...`);
            // Call function to add more members or build the team
            addTeamMember();
        });    

        })
        .catch((error) => {
            if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            } else {
            // Something else went wrong
            }
        });
        // When a user enters those requirements then the user is presented with a menu with the option to:
        // Add an engineer
        // Add an intern
        // Finish building the team
        
}

















// When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
// Engineer's Name
// ID
// Email
// GitHub username






// When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
// Intern’s name
// ID
// Email
// School




function addTeamMember() {

}

// When a user decides to finish building their team then they exit the application, and the HTML is generated.




// Call the render function (provided for you) and pass in an array containing all employee objects;
// The render function will generate and return a block of HTML including templated divs for each employee!



// Create an HTML file using the HTML returned from the render function.
// Write it to a file named team.html in the output folder.
// You can use the provided variable outputPath to target this location.













//and render the HTML file

