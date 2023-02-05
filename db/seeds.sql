

     INSERT INTO department(department_name)  
     VALUES     ("Engineer"),("Sales"),('Finance'),("Legal")


     INSERT INTO role(title),(salary),(department_id)
     VALUES("Lead Engineer",15000,1),
     ("Software Engineer",12000,1),
     ("Saleperson",80000,2),
     ("Account Manager",16000,3),
     ("Accountant",125000,3)
     ("Legal Team Lead",25000,4)
     ("Lawyer",19000,4)

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("Jordan","lee",1,1),
("Cristano","Rolando",3,2)
("Dexter","Night"6,NUll),
("Mikey","Morant",1,3),
("Aren","Eager",4,1),
("Allen","Cube",7,NULL),
("Tonny","Mohntanna",5,NUll);

INSERT INTO employee(manager),(manager_id)
VALUES("dexter,Night",1),("Allen, Cube",2),("Tonny,Mohntanna",3);

SELECT * FROM employee;
SELECT * FROM Manager;


-- INSERT INTO roles(id,title,salary,department_id)
-- VALUES(1,"sales",2400,7),(4,"Finance",26000,9),()














-- DROP DATABASE IF EXISTS classlist_db;
-- CREATE DATABASE classlist_db;

-- USE classlist_db;

-- CREATE TABLE students (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   first_name VARCHAR(30) NOT NULL,
--   last_name VARCHAR(30) NOT NULL,
--   enrolled BOOLEAN NOT NULL
-- );
-- SELECT * FROM students;

-- INSERT INTO students (first_name,last_name, enrolled)
-- VALUES( 'Abel', 'Alemu', true);

-- CREATE DATABASE grocery_db;

-- USE grocery_db;

-- CREATE TABLE products (
--      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--      product_name VARCHAR(30) NOT NULL,
--      category_name VARCHAR(100) NOT NULL,
--      price INT NOT NULL,
--      in_stock BOOLEAN
-- );

-- CREATE TABLE categories(
--     id INT NOT NULL,
--     category_name VARCHAR(30) NOT NULL
-- );