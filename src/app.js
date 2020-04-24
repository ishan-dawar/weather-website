const path=require("path")													//core moduke-already installed
const express=require('express')										//npm module-needs to be installed
const hbs=require('hbs')
const request=require("request")
const loc=require('./utils/geocode')
const temp=require('./utils/temp')





// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname,'../public'))								//.. means up a folder
const app=express()
const port=process.env.PORT || 3000


//define paths for express config
const publicdirectorypath=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../tempelates/views')						//default location is viewws but to change it, we nest it
const partialspath=path.join('__dirname','../tempelates/partials')

//setup handlebars engine and views path
app.set('view engine','hbs')
app.set('views',viewspath)														//to set new views path
hbs.registerPartials(partialspath)



// app.use(express.static(path.join(__dirname,'../public')))


//static static directory to serve
app.use(express.static(publicdirectorypath))


app.get('',(req,res)=>{
	res.render('index',{
		title:'weather',
		name:'ishan'
	})
})

app.get('/about',(req,res)=>{
	res.render('about',{
		title:'about me',
		name:'ishan'

	})
})

app.get('/help',(req,res)=>{
	res.render('help.hbs',{															//or just help 
		message:'contact 123456 for help',
		title:'help',
		name:'ishan'
	})
})


// app.get('',(req,res)=>{

// 	res.send("<h1>hello</h1>")
// })

// app.get('/help',(req,res)=>{
// 	res.send({
// 		name:'ishan',
// 		age:21
// 	})

// })

// app.get('/about',(req,res)=>{
// 	res.send("<h1>about</h1>")
// })


// app.get ("/weather",(req,res)=>{

// 	if(!req.query.search){
// 		return res.send({
// 			error:'enter address'
// 		})
// 	}
// 	else{


// 		loc(req.query.search,(error,{latitude,longitude}={})=>{  
// 	if(error){
// 		return res.send({error})
// 	}


// 	temp(latitude,longitude, (error,data2)=>{
// 	if(error){
// 		return res.send({error})
// 	}

// 	res.send(data2)
	
// })

// })
// 	}
// 	})







app.get('/about',(req,res)=>{
	res.send("<h1>about</h1>")
})


app.get ("/weather",(req,res)=>{

	if(!req.query.search){
		return res.send({
			error:'enter address'
		})
	}
	else{


	// 	loc(req.query.search,(error,{data2}={})=>{  
	// if(error){
	// 	return res.send({error})
	// }


	loc(req.query.search, (error,data2)=>{
	if(error){
		return res.send({error})
	}

	res.send(data2)
	
})

}
})
// )
// 	}
// 	})





	// console.log(req.query.address)
// 	res.send([{
// 		address:req.query.address,
// 		loaction:"india",
// 		temperature:32
// 	},
// 	{
// 		wind_speed:22
// 	}])
// })

app.get('/products',(req,res)=>{

	if(!req.query.search){
		return res.send({
			error:'you must provide a search term'
		})
	}


	console.log(req.query.search)
	res.send({
		products:[]
	})
})

// app.get('help/*',(req,res)=>{
// 	res.render('errorpage',{
		
// 		message: "help article not found",
// 		name:"ishan",
// 		title:"404"
		
// 	})
// 	// res.send("help article not found ")



// })
// app.get('*',(req,res)=>{						
// 	res.render('errorpage',{
// 		message: "404 not found",
// 		title:"404",
// 		name:"ishan"

// 	})
// 	// res.send("404 page")

// })
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ishan',
        message: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'ishan',
        message: 'Page not found.'
    })
})

app.listen(port,()=>{
	console.log("server started")
})

