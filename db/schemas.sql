DROP DATABASE IF EXISTS employee_db;
CREATE employee_db;

CREATE TABLE department(
id INT NOT NUll AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30)NOT NUll
)

CREATE TABLE roles(
id INT NOT NUll AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NUll,
salary DECIMAl ,
department_id INT NOT NUll
)

CREATE TABLE employee(
id INT NOT NUll AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NUll,
last_name VARCHAR(30) NOT NUll,
role_id INT NOT NUll,
manager_id INT NOT NUll
)