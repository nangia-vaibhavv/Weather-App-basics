const request=require("postman-request")

const url="http://api.weatherstack.com/current?access_key=a54e4e11d7a5c79d9145ce6dc6655975&query=Delhi"


request({url:url, json:true}, (error, response)=>{
   ////raw data before json is true
    // console.log(response);

    // const data=JSON.parse(response.body)
    // console.log(data.current)

    // since json:true now it fetches only json data
   if(error)
   {
    console.log("Error occured")
   }else if(response.body.error){
    console.log("Unable to fetch")
   }else{
    console.log(response.body.current)
   }
})


// const geoCode="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWFsa2VldDc4NiIsImEiOiJja2tpZTRzbW8xbzNnMnBxdTU0MTJsN2ZuIn0.8BtG_EJ7W2XpyijInGNuog"
// request({url:geoCode, json:true},(error,response)=>{
//     const latitude=response.body.features[0].center[0]
//     const longitude=response.body.features[0].center[1]
//     console.log(latitude,longitude)
// })