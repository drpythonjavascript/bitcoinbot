require("dotenv").config()
const mysql = require("mysql")
const axios = require("axios")
const url = "https://api.uphold.com/v0/ticker/BTC-USD"




function app(curr,delay){
    
    const db = mysql.createConnection({
    host: process.env.host, 
    user: process.env.user, 
    password: process.env.password, 
    database: process.env.database, 
    port: process.env.port
    
    })
const init = (async()=>{
 
    

    const res = await axios.get(url);// response including headers success status etc..
    const data = await res.data; //bid and ask of bitcoin as an obj
    console.log("initial request", data, new Date())
     curr = await data.ask// Must return a value if I want to attach another promise
      return setTimeout(final, 5000)
      
})()




    
    const final = async()=>{
        
        const res2 = await axios.get(url)
        const data2 = await res2.data
        delay = await data2.ask
        return bot(curr, delay)
        
    }

 
    
   


function bot(a,b){
    const A = Number.parseFloat(a)
    const B = Number.parseFloat(b)
    const time = new Date()
   
const diff = B-A
const test = Number.parseFloat((diff/A)*100)
console.log(`the percent change is: ${test}`)
    if (Math.abs(test)>=.01){
        // DETECTED OSC!!!
        //log into database or redis. 
        /*const sql = `INSERT INTO bot_logs_test 
VALUES (DEFAULT, CURRENT_DATE(), CURRENT_TIME(), ${A}, ${B}, ${test});`*/
const sql = `INSERT INTO bot_logs_test 
VALUES (DEFAULT, CURRENT_DATE(), CURRENT_TIME(), ${A}, ${B}, ${test});`
db.query(sql, (err, results, fields)=>{
    if (err) console.log(err);
    console.log(`Sucessful Query for MySQL Awesome! `);
    console.log("results", results );
    
    db.end((err, message)=>{
    message = "connection has ended successfully aka DISCONNECTION"
    if(err) console.log(err); 
    console.log(message)
        })
}); 
        
         console.log("We have an oscillation detected at: ", time, A,B,test, "%")
         return app()
    }else{// No Osc Detected
      
        console.log("no oscillation detected at ",time, A,B)
       app()

    }
    

}
}
app()



