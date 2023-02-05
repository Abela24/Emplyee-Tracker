const express = require('express');
var employee= [];
var managers = [];
var roles = [];





//connecting to the database
const db = mysql.createconnection(
    {
        host: 'Localhost',
        //sql username
        user: 'root',
        passwords: 'password',
        database: 'employee_db'
    },
    console.log ('connected to the Empoyee_db.')

)




const employeeRole = () => {
    connection.query(SELECT, title, FROM,role)
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

