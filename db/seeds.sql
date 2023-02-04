-- INSERT INTO department(department_name)
-- VALUES("Sales"),
--         ("Engineering"),
--         ("Finance"),
--         ("Legal");

--         INSERT INTO roles(title)
--         VALUES("salesperson"),
--         ("lead engineer"),
--         ("software engineer"),
--         ("account Manager"),
--         ("accountant"),
--         ("legal team lead"),
--         ("lawyer");
-- INSERT INTO roles(salary)
-- VALUES("28000")


--  INSERT INTO roles(manager_id)
--    VALUES("9")
--         ("5")
--         ("3")
--         ("7")
--         ("6")
--         ("4")
--         ("1")

-- INSERT INTO employee(first_name)
--         VALUES("Dexter")
--                 ("Jordan")
--                 ("Cristano")
--                 ("jake")
--                 ("Logan")
--                 ("Mikey")
--                 ("Aren")
-- INSERT INTO employee(last_name)
--     VALUES ("lee")
--             ("Night")
--             ("Rolando")
--             ("bright")
--             ("johnson")
--             ("maront")
--             ("O'eal")

--     INSERT INTO  employee(role_id)
--         VALUES("45")
--                 ("96")
--                 ("32")
--                 ("23")
--                 ("12")
--                 ("24")
--                 ("33")

--                 INSERT INTO employee(manager_id)
--                 VALUES
            

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES("Jordan","lee",9),("Cristano","Rolando",5)("Dexter","Night"3),("Mikey","Morant",1),("Aren","Eager",4),("Allen","Cube",7)("Tonny","Mohntanna",2)

INSERT INTO 












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