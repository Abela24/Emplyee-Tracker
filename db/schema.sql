DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;


USE employee_db

CREATE TABLE department(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30)NOT NUll
);

CREATE TABLE roles(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30)NUll,
salary DECIMAl,
department_id INT NUll,
FOREIGN KEY (department_id)
REFERENCES department(id)
);

CREATE TABLE employee(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NUll,
last_name VARCHAR(30) NUll,
roles_id INT UNSIGNED NOT NULL,
FOREIGN KEY (roles_id) 
REFERENCES roles(id),
manager_id INT UNSIGNED,
FOREIGN KEY (manager_id) 
REFERENCES employee(id) ON DELETE SET NULL
);

-- CREATE TABLE Manager(
--     manager_id NUll AUTO_INCREMENT,
--     manager VARCHAR(30),
--     PRIMARY KEY (manager_id)
-- )