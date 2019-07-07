# JWT Authentication using Express as server, Bookshelf as ORM and Knex for creating MySQL Database Conection implemeted with cluster.

#Create table
First create a table name Users.
CREATE TABLE Users (
    id NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password_digest varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

#Required Packages
After cloning the repository goto project directory and run following comman on your terminal: 
    npm install

This command will install all the required packages.

#Available Script to Run:
After installing all the required packages run following command on your terminal:
    npm start

This command will run the project on 3000 port.
Goto this url: http://localhost:3000.