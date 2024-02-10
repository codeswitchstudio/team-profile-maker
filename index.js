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
// Name, Employee ID, Email address, Office number

function promptManager() {
    inquirer
        .prompt([    /* Pass your questions in here */
        { 
            type: 'input', 
            name: 'name',
            message: 'Please enter team manager\'s name.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the correct name of manager");
                    return false;
                }
            } 
        } ,
        { 
            type: 'input', 
            name: 'id',
            message: 'Please enter team manager\'s ID number.',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter a correct answer, the employee id should be a number!");
                    return false;
                }
            } 
        } ,
        { 
            type: 'input', 
            name: 'email',
            message: 'Please enter team manager\'s email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the correct email address");
                    return false;
                    }
                }      
        },
        { 
            type: 'input', 
            name: 'officeNumber',
            message: 'Please enter team manager\'s office number',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the correct number!");
                    return false;
                    }
                } 
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
            // When a user enters those requirements then the user is presented with a menu with the option to:
            // Add an engineer
            // Add an intern
            // Finish building the team
        
            addTeamMember();
        });    

        // .catch((error) => {
        //     if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            // } else {
            // Something else went wrong
        //     }
        // });
}


// When a user selects the engineer option then a user is prompted to enter the following and then the user is taken back to the menu:
// Engineer's Name, ID, Email, GitHub username
function  addEngineer() {
    inquirer.prompt([   
        {   type: 'input',
            name: 'name',                                       
            message: 'What is the engineer\'s name?',
            validate: (nameInput) => {        
                if (nameInput !== '') {
                    return true;
                } else {
                    console.log('Please enter the correct engineer\'s name');
                    return false;
                    }
                }    
        },
        {   type: 'input',
            name: 'id',                                       
            message: 'What is the engineer\'s id number?',
            validate: (idInput) => {        
            if (idInput !== '') {
                return true;
            } else {
                console.log('Please enter the correct id number');
                return false;
                }
            } 

        },
        { 
            type: 'input', 
            name: 'email',
            message: 'Please enter engineer\'s email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the correct email address");
                    return false;
                    }
                }      
        },
        { 
            type: 'input', 
            name: 'github',
            message: 'Please enter engineer\'s github user name',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer\'s correct github user name!");
                    return false;
                    }
                } 
        }         
        ])
        .then((answers) => {
            // Add input to array
            const engineeer = new Engineer(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.github
        )
    });
    teamMembers.push(engineeer);  
    console.log(teamMembers);     
}

// When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
// Intern’s name, ID, Email, School
function addIntern() {
    inquirer.prompt([   
        {   type: 'input',
            name: 'name',                                       
            message: 'What is the intern\'s name?',
            validate: (nameInput) => {        
                if (nameInput !== '') {
                    return true;
                } else {
                    console.log('Please enter the correct intern\'s name');
                    return false;
                    }
                }    
        },
        {   type: 'input',
            name: 'id',                                       
            message: 'What is the intern\'s id number?',
            validate: (idInput) => {        
            if (idInput !== '') {
                return true;
            } else {
                console.log('Please enter the correct intern id number');
                return false;
                }
            } 

        },
        { 
            type: 'input', 
            name: 'email',
            message: 'Please enter intern\'s email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the correct email address");
                    return false;
                    }
                }      
        },
        { 
            type: 'input', 
            name: 'school',
            message: 'Please enter intern\'s school',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern\'s correct school name");
                    return false;
                    }
                } 
        }         
        ])
        .then((answers) => {
            // Add input to array
            const engineeer = new Engineer(
                answers.name, 
                answers.id, 
                answers.email, 
                answers.school
        )
    });
    teamMembers.push(intern);  
    console.log(teamMembers);     
}

//function to add team members

function addTeamMember() {
    inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Which team member woyld yoiu like to add?",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"],
      },
    ])
    .then((answers) => {
      // Based on the user's choice, call the appropriate function
      switch (answers.menu) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        case "Finish building the team":
          // Generate the HTML and finish the process
          generateHTML();
          break;
      }
    });
}

// When a user decides to finish building their team then they exit the application, and the HTML is generated.

// Call the render function (provided for you) and pass in an array containing all employee objects;
// The render function will generate and return a block of HTML including templated divs for each employee!

generateTeam(manager, engineer, intern);

const html = render(teamMembers);

fs.writeFile('./dist/index.html', html, (err) =>
  err ? console.error(err) : console.log('Success!')
);

// Create an HTML file using the HTML returned from the render function.
// Write it to a file named team.html in the output folder.
// You can use the provided variable outputPath to target this location.
// Hint: You will need to read file out of the output folder (and add the dist folder to that path).

fs.writeFile("./output/team.html", html, function(err) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Your HTML has been successfully created!");
    }
});

promptManager();














//and render the HTML file

