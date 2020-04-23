const request=require('request')



const temp=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=462fe5b632857e215140c3a1a1794c81&query='+latitude+','+longitude

	// request({url:url,json:true},(error,response)=>{
// 	request({url:url,json:true},(error,response)=>{

// 		if(error){
// 			callback('unable to connect',undefined)  //although no need to type undefined, its already undefined when it gets no data
// 		}else if(response.body.success===false){
// 			callback('unable to get info',undefined)
// 		}else{
// 		callback('',{
// 			loaction: response.body.location.name,
// 			temperature: response.body.current.temperature,
// 			rain: response.body.current.precip,
// 			wind_speed: response.body.current.wind_speed,
// 			humidity: response.body.current.humidity
// 		})
		
// 		}
// 	})
// }

// module.exports=temp


//new way
request({url,json:true},(error,{body})=>{
		
		if(error){
			callback('unable to connect',undefined)  //although no need to type undefined, its already undefined when it gets no data
		}else if(body.success===false){
			callback('unable to get info',undefined)
		}else{
		callback('',{
			loaction: body.location.name,
			temperature: body.current.temperature,
			rain: body.current.precip,
			wind_speed: body.current.wind_speed,
			humidity: body.current.humidity
		})
		
		}
	})
}

module.exports=temp