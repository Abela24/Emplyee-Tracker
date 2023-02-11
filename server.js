const express = require('express');
const { default: inquirer } = require('inquirer');
var employee= [];
var managers = [];
var roles = [];
//const consoleTable = require("consoleTable")
// Import and require mysql2
const mysql = require('mysql2');
const Connection = require('mysql2/typings/mysql/lib/Connection');
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
const department =() => {
  db.query("SELECT * department_name FROM department", function (err, result){
      if (err) throw error;
      department = [];
      for (let i = 0; i< res.length; i++) {
          const departmentName= res[i].department_name
          const id = res[i].id
      }
      //console log department
      console.log(result);
  })
}

const Roles = () => {
  db.query('SELECT * title, salary, department_id FROM role', function(err, result){
     
      if (err) throw error;
      roles = [];
      for (let i = 0; i< res.length; i++) {
          const titie= res[i].title
          const salary= res[i].salary
          const department = res[i].department_id
      }
      // console log Roles
      console.log(result);
  }
  )
}



const Employee = () => {
  db.query('SELECT * first_name, last_name, role_id, manager_id  FROM employee',(err, res)=> {
      if (err) throw err;
      employee = [];
      for (let i = 0; i < res.length; i ++) {
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
  
  )}





const questions = () =>{
  getRole();
  getEmployee();
  getDeparment();
inquirer
.prompt({
  name:"init",
  type:"list",
  message:"What would you like to do next?",
  choices:[
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


.then((answer)=>{
  switch(answer.init) {
      case"View all Employee":
      allEmployee();
      

      case "View all Employee by department":
      allDepartment();

      case "View all Employee by Managers":
          allManagers();

          case"add employee":
          addEployee();

          case"remove employee":
          removeEmployee();

          case"update employee managers":
          updateManagers();

          case"view all roles":
          allRoles();

          case "view all managers":
              viewManagers();

              case "All Done":
              Connection.end();
              break;



  }
})}
const getEmployee = () => {
  inquirer
  .prompt({
type:"list",
name:"employee",
message:"view all employee",
choice: employee
  }).then((answer))

  }



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


// // Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
