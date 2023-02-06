const express = require('express');
var employee= [];
var managers = [];
var roles = [];
const mySql= require("mySql");
const consoleTable = require("consoleTable")



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

// simple query
connection.query(
  'SELECT *   FROM `table` WHERE `name` = "Page" AND `age` > 45',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);





//query all database
const Department =() => {
    db.query("SELECT * department_name FROM department", function (err, result){
        console.log(result);
    })
}

const Role = () => {
    db.query('SELECT * title, salary, department_id FROM role')
}



const Employee = () => {
    db.query('SELECT * first_name, last_name, role_id, manager_id FROM employee')
}





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

