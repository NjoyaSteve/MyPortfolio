const express=require("express")
const path=require("path")
const app=express()
const publicDirectory=path.join(__dirname, "./public")
const port=process.env.PORT || 8080 
app.use(express.static(publicDirectory))

//Defining view engine
app.set("view engine", "hbs")

//Defining routes
app.use('/', require('./routes/pages'))

app.listen(8080, ()=>{
    console.log("Server listening on port 8080")
})