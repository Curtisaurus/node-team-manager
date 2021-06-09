// declaring modules
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array which to append employee objects
const employees = [];

inquirer.prompt([
    {
        type: 'input',
        message: "Enter team manager's name...",
        name: "managerName"
    },
    {
        type: 'input',
        message: "...their employee ID...",
        name: "managerId"
    },
    {
        type: 'input',
        message: "...their email address...",
        name: "managerEmail"
    },
    {
        type: 'input',
        message: "...and their office number...",
        name: "managerOffice"
    },
    {
        type: 'list',
        name: 'optional',
        message: "Select from the following:",
        choices: [
            {
                name: 'Add Engineer',
                value: 'engineer'
            },
            {
                name: 'Add Intern',
                value: 'intern'
            },
            {
                name: 'Finish building my team',
                value: 'finish'
            }
        ]
    }
])
.then((answers) => {
    let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);
    employees.push(manager);

    if (answers.optional == 'finish') {
        renderHtml(employees);
    } else {
        addEmployee(answers.optional);
    }
});

function addEmployee(role) {
    inquirer.prompt([
        {
            type: 'input',
            message: "Enter team member's name...",
            name: "name"
        },
        {
            type: 'input',
            message: "...their employee ID...",
            name: "id"
        },
        {
            type: 'input',
            message: "...their email address...",
            name: "email"
        },
        {
            type: 'input',
            message: "...and their school name...",
            name: "school",
            when: (role == 'intern')
        },
        {
            type: 'input',
            message: "...and their Github username...",
            name: "github",
            when: (role == 'engineer')
        },
        {
            type: 'list',
            name: 'optional',
            message: "Select from the following:",
            choices: [
                {
                    name: 'Add Engineer',
                    value: 'engineer'
                },
                {
                    name: 'Add Intern',
                    value: 'intern'
                },
                {
                    name: 'Finish building my team',
                    value: 'finish'
                }
            ]
        }
    ]).then((answers) => {
        let employee;
        if (role == 'engineer') {
            employee = new Engineer(answers.name, answers.id, answers.email, answers.github);
        } else if (role == 'intern') {
            employee = new Intern(answers.name, answers.id, answers.email, answers.school);
        }
        employees.push(employee);

        if (answers.optional == 'finish') {
            renderHtml(employees);
        } else {
            addEmployee(answers.optional);
        }
    })
}

function renderHtml(employees) {
    let employeeCards = ''
    for (const employee of employees) {
        employeeCards += `<div class="card" style="width: 18rem;">
        <div class="card-header">
          ${employee.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${employee.constructor.name}</li>
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href='mailto:${employee.email}'>${employee.email}</a></li>
          <li class="list-group-item">${roleSpecific(employee)}}</li>
        </ul>
      </div>
      
      `
    };
    const managerName = employees[0].name.split(' ').join('').toLowerCase();
    fs.writeFile(`./dist/${managerName}.html`,)
}

function roleSpecific(employee) {
    if (employee.constructor.name == 'Manager') {
        return `Office number: ${employee.officeNumber}`;
    } else if (employee.constructor.name == 'Engineer') {
        return `GitHub: <a href='https://github.com/${employee.github}'>${employee.github}</a>`;
    } else if (employee.constructor.name == 'Intern') {
        return `School: ${employee.school}`;
    }
};