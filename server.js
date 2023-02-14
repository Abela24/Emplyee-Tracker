const express = require('express');
const { connect } = require('http2');
// const { default: inquirer } = require('inquirer');
const inquirer = require('inquirer')
var employee = [];
var managers = [];
var roles = [];
//const consoleTable = require("consoleTable")
// Import and require mysql2
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
const { type } = require('os');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);




//query all database
const department = () => {
  db.query("SELECT * department_name FROM department", function (err, result) {
    if (err) throw error;
    department = [];
    for (let i = 0; i < res.length; i++) {
      const departmentName = res[i].department_name
      const id = res[i].id
    }
    //console log department
    console.log(result);
  })
}

const Roles = () => {
  db.query('SELECT * title, salary, department_id FROM role', function (err, result) {

    if (err) throw error;
    roles = [];
    for (let i = 0; i < res.length; i++) {
      const titie = res[i].title
      const salary = res[i].salary
      const department = res[i].department_id
    }
    // console log Roles
    console.log(result);
  }
  )
}



const Employee = () => {
  db.query('SELECT * first_name, last_name, role_id, manager_id  FROM employee', (err, res) => {
    if (err) throw err;
    employee = [];
    for (let i = 0; i < res.length; i++) {
      const id = res[i].id;
      const firstName = res[i].first_name;
      const lastName = res[i].last_name;
      const idRole = res[i].role_id;
      const manager = res[i].manager_id;

      var nEmployee = {
        name: firstName.concat("", lastName,),
        value: id
      }
      return employee;
    }
  }

  )
}





const questions = () => {
  // Role();
  // getEmployee();
  // getDeparment();
  inquirer
    .prompt({
      name: "questions",
      type: "list",
      message: "What would you like to do next?",
      choices: [
        "View all Employees",
        "View all Employees by Department",
        "View all Employee by Manager",
        "add employee",
        "remove employee",
        "upadate employee role",
        "update employee manager",
        "view all roles",
        "view all Managers",

      ],
    })

    // answers
    .then((answer) => {
      switch (answer.questions) {
        case "View all Employee":
          allEmployee();


        case "View all Employee by department":
          allDepartment();

        case "View all Employee by Managers":
          allManagers();

        case "add employee":
          addEpmloyee();

        case "remove employee":
          removeEmployee();

        case "update employee managers":
          updateManagers();

        case "view all roles":
          allRoles();

        case "view all managers":
          viewManagers();

        case "All Done":
          process.exit();
          break;



      }
    })
}

const allEmployee = () => {
  Connection.query(rolecheck, (err, res) => {
    console.log("\nALL EMPLOYEE\n");
    if (err) throw err;
    console.table(res);
    init();
  })
};

const allManagers = () => {
  Connection.query(`SELECT first_name, last_name, manager_id FROM employee`, (err, res) => {
    console.log("\nALL EMPLOYEE\n");
    if (err) throw err;
    console.table(res);
    questions();
  })
};


const allRoles = () => {
  Connection.query(`SELECT title FROM roles`, (err, res) => {
    console.log("\nALL ROLES\n");
    if (err) throw err;
    console.table(res);
    questions();

  })
}

const addEpmloyee = () => {
  managers.push('none');
inquirer
  .prompt([{
    type: 'list',
    name: 'first_name',
    messsage: 'What is your first name?',
  },
  {
    type: 'list',
    name: 'Last_name',
    message: 'what is your last name',
  },
  {
    type: 'list',
    name: 'role',
    message: 'what is your job position',
    choices: roles
  },
  {
    type: 'list',
    name: 'manager',
    message: 'who is your manager',
    choices: managers
  },
    ]).then((answer) => {
    if (answer.manager == 'none') {
      Connection.query(`INSERT INTO employee (first_name, last_name, roles_id, managers_id) 
        Values (`,$,{answer,firstName }` `,$,{ answerlast_name }` ,${answer.roles} null`, (err, res) => {
        if (err) throw err;
        questions()
      
      }
      )}
  })};

  const allDepartment = () => {
    inquirer
      .prompt({
        type: 'list',
        name: 'department',
        message: 'select a department',
        choices: ['Engineer', 'Legal', 'Finance'],
      })
      .then(answer => {
        if (answer.department == 'Engineer') {
          Connection.query(
            `SELECT employee.first_name, employee.Last_name FROM
           employee JOIN role ON employee.roles_id = roles.roles_id 
           JOIN department ON roles.department_id = department..id and department.role = "Engineer"`,
            (err, res) => {
              console.log('\nEngineer\n')
              if (err) throw err
              console.table(res)
              questions()
            }
          )
        } else if (answer.department == 'Legal') {
          Connection.query(
            `SELECT employee.first_name, employee.Last_name FROM
             employee JOIN role ON employee.roles_id = roles.roles_id 
             JOIN department ON roles.department_id = department.id and department.role = "Legal"`,
            (err, res) => {
              console.log('\nLegal\n')
              if (err) throw err
              console.table(res)
              questions()
            }
          )
        } else if (answer.department == 'Finance') {
          Connection.query(
            `SELECT employee.first_name, employee.Last_name FROM
           employee JOIN role ON employee.roles_id = roles.roles_id 
           JOIN department ON roles.department_id = department..id and department.role = "Finance"`,
            (err, res) => {
              console.log('\nFinance\n')
              if (err) throw err
              console.table(res)
              questions()
            }
          )
        }
      })
  }
  
  const updateManagers = () => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employee',
          message: 'which employee is gettig a new manager?',
          choices: employee,
        },
        {
          type: 'list',
          name: 'manager',
          message: 'who is your manager?',
          choices: managers,
        },
      ])
      .then(answer => {
        Connection.query(
          `UPDATE employee
                   SET manager_id = ${answer.manager},
                  WHERE id = ${answer.employee}`,
          (err, res) => {
            if (err) throw err
            questions()
          }
        )
      })
  }

          const removeEmployee = () => {
            inquirer
              .prompt({
                type: 'list',
                name: 'employee',
                message: 'select employee you would like to remove?',
                choices: employee
              }).then((answer) => {
                Connection.query(`DELETE FROM employee WHERE id=${answer.employee}`, (err,res) => {
                  if (err) throw err;
                  questions();
                });
        console.log(answer)
              
            })}
          
          






questions()
Employee()
Roles()
department()


// const allManagers = ()=> {
//     inquirer
//     .prompt({
//         type:"list",
//         name: 'manager',
//         message: "choose employee manager",
//         choices: managers
//     }).then(answer) => {
//     connection.query ('SELECT first_name, last_name FROM employee WHERE manager_id = ${answer.manager}; '),
//     (err, res) => {
//         if (err) throw err ;
//         console.table(res);
//         init()
//     }, }
// }


// const allRoles


// const allEmployee


// const employeeDepartments


// 

// const getEmployee = () => {
//   inquirer
//   .prompt({
// type:"list",
// name:"employee",
// message:"view all employee",
// choice: employee
//   }).then((answer))

  