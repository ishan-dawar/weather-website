const request = require('request')




const loc=(address,callback)=>{
// const geo='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiaXNoYW5kYXdhciIsImEiOiJjazkxMnR4a2QwNzQ0M2xwZHVoZ2QwYWM0In0.g0fta57NJahB1SvMbKefaQ&limit=1'
const url='http://api.weatherstack.com/current?access_key=462fe5b632857e215140c3a1a1794c81&query='+encodeURIComponent(address)
	request({url, json:true},(error,{body})=>{

		if(error){
			callback("unable to connect to internet",undefined)
		}else if(body.success===false){
			callback("unable to get location",undefined)
		}else{
			callback('',{
				latitude: body.location.lat,
				longitude: body.location.lon
			})   
		}
		
	})

}


module.exports=loc