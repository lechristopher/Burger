DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(

	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (250) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date DATETIME NOT NULL,
    PRIMARY KEY (ID)
 );

 SELECT * FROM burgers;
