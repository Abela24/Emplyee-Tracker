
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');


var employee = [];
var managers = [];
var roles = [];

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

db.connect(function (err){
  if (err) throw err ;
});


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

  );
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
        "update employee managers",
        "view all roles",
        "view all Managers",

      ],
    })

    // answers
    .then((answer) => {
      switch (answer.questions) {
        case "View all Employees":
          allEmployee();
          break;
        case "View all Employees by Department":
          allDepartment();
          break;

        case "View all Employee by Manager":
          allManagers();
          break;
 
        case "add employee":
          addEpmloyee();
          break;

        case "remove employee":
          removeEmployee();
          break;

        case "update employee managers":
          updateManagers();
          break;

        case "view all roles":
          allRoles();
          break;

        case "view all managers":
          viewManagers();
          break;

        case "All Done":
          process.exit();
          break;



      }
    })
}

const allEmployee = () => {
  db.query('SELECT * FROM employee', (err, res) => {
    console.log("\nALL EMPLOYEE\n");
    if (err) throw err;
    console.table(res);
    questions();
  })
};

const allManagers = () => {
  db.query(`SELECT first_name, last_name, manager_id FROM employee`, (err, res) => {
    console.log("\nALL EMPLOYEE\n");
    if (err) throw err;
    console.table(res);
    questions();
  })
};


const allRoles = () => {
  db.query(`SELECT title FROM roles`, (err, res) => {
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
    type: 'input',
    name: 'first_name',
    messsage: 'What is your first name?',
  },
  {
    type: 'input',
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
      db.query(`INSERT INTO employee (first_name, last_name, roles_id, managers_id) 
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
          db.query(
            `SELECT employee.first_name, employee.Last_name FROM
           employee JOIN roles ON employee.role_id = roles.id 
           JOIN department ON roles.department_id = department.id and department.department_name = "Engineer"`,
            (err, res) => {
              console.log('\nEngineer\n')
              if (err) throw err
              console.table(res)
              questions()
            }
          )
        } else if (answer.department == 'Legal') {
          db.query(
            `SELECT employee.first_name, employee.Last_name FROM
             employee JOIN roles ON employee.role_id = roles.id 
             JOIN department ON roles.department_id = department.id and department.department_name = "Legal"`,
            (err, res) => {
              console.log('\nLegal\n')
              if (err) throw err
              console.table(res)
              questions()
            }
          )
        } else if (answer.department == 'Finance') {
          db.query(
            `SELECT employee.first_name, employee.Last_name FROM
           employee JOIN roles ON employee.role_id = roles.id 
           JOIN department ON roles.department_id = department.id and department.department_name = "Finance"`,
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
        db.query(
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



  removeEmployee = () => {
    // get employees from employee table 
    const findAllEmployee = `SELECT * FROM employee`;
  
    db.promise().query(findAllEmployee)
      .then(result => {
        const employees = result[0].map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id }));
  
        inquirer.prompt([
          {
            type: 'list',
            name: 'name',
            message: "Which employee would you like to remove?",
            choices: employees
          }
        ])
          .then(employeeChoices => {
            const employee = employeeChoices.name;
  
            const sql = `DELETE FROM employee WHERE id = ?`;
  
            connection.query(sql, employee, (err, result) => {
              if (err) throw err;
              console.log("Successfully Deleted!");
  
              showEmployees();
            });
          });
      })
      .catch(error => console.log(error));
  };
    // if (err) throw err; 

  // const employees = data.map(({ id, first_name, last_name }) => ({ name: first_name + " "+ last_name, value: id }));

  //   inquirer.prompt([
  //     {
  //       type: 'list',
  //       name: 'name',
  //       message: "Which employee would you like to remove?",
  //       choices: employees
  //
  //     }
  //   ])
  //     .then(employeeChoices => {
  //       const employee = employeeChoices.name;

  //       const sql = `DELETE FROM employee WHERE id = ?`;

  //       connection.query(sql, employee, (err, result) => {
  //         if (err) throw err;
  //         console.log("Successfully Deleted!");
        
  //         showEmployees();
  //   });
  // });
  
 




















  // function removeEmployee() {
  //   db.findAllEmployee()
  //     .then(rows => {  // corrected arrow function with proper parameter list
  //       let Employees = rows;
  //       const employeeChoices = Employees.map(({id, first_Name, last_name}) => ({ // corrected variable name
  //         name: `${first_Name} ${last_name}`,
  //         value: id
  //       }));
  //       inquirer
  //         .prompt([
  //           {
  //             type: 'list',
  //             name: 'employeeId',
  //             message: 'Which employee do you want to remove?',
  //             choices: employeeChoices
  //           }
  //         ])
  //         .then(res => db.removeEmployee(res.employeeId))  // removed extra .then()
  //         .then(answer => {
  //           db.query(`DELETE FROM employee WHERE id=${answer.value}`, (err, res) => {
  //             if (err) throw err;
  //             questions();
  //             console.log("Removed employee from the database");
  //           })
  //           .then(() => loadMainPrompts());
  //         });
  //     });
  // }
  




  
  // async function removeEmployee() {
  //   // query the employees 
  //   const findEmployees = await db.promise().query('SELECT id, first_name, last_name FROM employee');
  //   console.log(findEmployees);
  //   //use res to create a variable with the employees
  //   const employeeChoices =//use map to make this
  //     //best would be object {name: this will be the employee name, value: this is the employee id}
  //     // findEmployees.map(function(employee)){
  //     //   return
  //     // }
  //     inquirer
  //     .prompt({
  //       type: 'list',
  //       name: 'employee',
  //       message: 'select employee you would like to remove?',
  //       choices: employeeChoices
  //     }).then((answer) => {
  //       db.query(`DELETE FROM employee WHERE id=${answer.value}`, (err, res) => {
  //         if (err) throw err;
  //         questions();
  //       });
  //       console.log(answer)
  
  //     })
  // }

  //const employeeChoices = Employees.map(({id, first_Name, last_name}) => ({ 
  
                          questions()



                        