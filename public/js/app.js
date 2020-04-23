console.log("client side js")

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// 	response.json().then((data)=>{
// 		console.log(data)
// 	})

// })				




const weatherform =document.querySelector('form')
const searchelement=document.querySelector('input')
const messageone=document.querySelector('#message1')
const messagetwo=document.querySelector('#message2')
const messagethree=document.querySelector('#message3')			//we are selecting message 2 here
const messagefour=document.querySelector('#message4')			//we are selecting message 2 here
const messagefive=document.querySelector('#message5')			//we are selecting message 2 here


// messageone.textContent="dfdfd"


weatherform.addEventListener('submit',(e)=>{				//e=event
	e.preventDefault()

	const location=searchelement.value
	// console.log(location)
			messageone.textContent="loading"
			messagetwo.textContent=""
			messagethree.textContent=""
			messagefour.textContent=""
			messagefive.textContent=""


	fetch('http://localhost:3000/weather?search='+location).then((response)=>{
	response.json().then((data)=>{
		if(data.error){
			messageone.textContent=data.error

			// console.log(data)
			
			// messageone.textContent="temperature: "+data.loaction




			// messagetwo.textContent=data.location
		}else{

			messageone.textContent="Location: "+data.loaction
			messagetwo.textContent="Temperature: "+data.temperature
			messagethree.textContent="Percentage of rain: "+data.rain
			messagefour.textContent="Wind speed: "+data.wind_speed
			messagefive.textContent="Humidity: "+data.humidity
			// console.log(data.error)


		}
	})
})

})

