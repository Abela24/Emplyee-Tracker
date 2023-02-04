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