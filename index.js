const axios = require("axios")

const url = "https://api.uphold.com/v0/ticker/BTC-USD"

function app(curr,delay){

const init = (async()=>{

    const res = await axios.get(url);// response including headers success status etc..
    const data = await res.data; //bid and ask of bitcoin as an obj
    console.log("1) we now have our first value", data, new Date())
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
    const time = new Date()
    const change = b-a
    const test = (change/a)*100
    if (Math.abs(test)>=.01){//YAY DETECTED OSC!!!
        //log into database or redis. 
         console.log("We have an oscillation detected at: ", time, a,b,test, "%")
         return app()
    }else{//Boo!!! No Osc Detected
        console.log("no oscillation detected at ",time, a,b)
       app()

    }
    

}
}
app()



