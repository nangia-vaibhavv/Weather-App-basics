const request=require("postman-request")
const foreCast=(latitude, longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=a54e4e11d7a5c79d9145ce6dc6655975&query="+latitude+","+longitude+"&units=f"
    request({url:url, json:true}, (error,response)=>{
     if(error){
         callback('Unable to connect to location!')
     }
     else if(response.body.error)
     {
         callback('Unable to find location. Try again with another search')
     }
     else{
       callback(undefined, "current temperature is"+response.body.current.temperature)
     }
 
    })
 }

 module.exports=foreCast