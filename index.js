const express = require('express');
var employee= [];
var managers = [];
var roles = [];
const mySql= require("mySql");
const consoleTable = require("consoleTable")

app.use(express.json());

// get the client
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require('process');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employee_db',
  password: "password"
});


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





questions.promt({
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

    }
})

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
