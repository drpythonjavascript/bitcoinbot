require("dotenv").config()
const mysql = require("mysql")



const db = mysql.createConnection({
    host:"localhost", 
    user: "root", 
    password: process.env.password, 
    database: "li_bot", 


})

db.connect((err, message)=>{
    message = "Yay we've connected to our mySQL database, which technically connects to  MySQL Community Server"
    if(err)  console.log(err); 
    console.log(message)
})


const sql = `INSERT INTO bot_logs_test 
VALUES (DEFAULT, CURRENT_DATE(), CURRENT_TIME(), 30000, 20000, 33);`
db.query(sql, (err, results, fields)=>{
    if (err) console.log(err);
    console.log(`Sucessful Query for MySQL Awesome! `);
    console.log(results, "results");
    console.log(fields, "fields")
    
    

  
    
})

db.end((err, message)=>{
    message = "connection has ended successfully aka DISCONNECTION"
    if(err) console.log(err); 
    console.log(message)
});


/*Connection Details 
Name:  Local instance MySQL80 
Host: localhost 
Port: 3306 
Login User: root 
Current User: root@localhost 
SSL cipher: TLS_AES_256_GCM_SHA384 
Server 
Product: MySQL Community Server - GPL 
Version: 8.0.28 
Connector 
Version: C++ 8.0.28*/