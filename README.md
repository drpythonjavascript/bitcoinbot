
# installation
 use npm to install axios, dotenv, & mysql

 # db setup
 setup a mysql sever database with the following table properties below:

CREATE TABLE `li_bot`.`bot_logs_test` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date_log` DATETIME NOT NULL,
  `time_log` DATETIME NOT NULL,
  `inital_price` INT NOT NULL,
  `final_price` INT NOT NULL,
  `percent_change` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `time_log_UNIQUE` (`time_log` ASC) VISIBLE);

**example 2****
/*Table: bot_logs_test
Columns:
id int AI PK 
date_log datetime 
time_log datetime 
inital_price int 
final_price int 
percent_change int*/

# package.json 
1. $ npm init

2. create a script "start":"node index.js"

# dotenv

create a .env file and set up key value pairs for the respective host,user,password,and port for your local database instance.

# run your program & enjoy this node.js bot built by Li 

$ npm start

