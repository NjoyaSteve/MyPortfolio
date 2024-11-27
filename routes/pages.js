const express=require("express")

const router=express.Router()

router.get("/", (req, res)=>{
    res.render("index")
})

router.get("/about", (req, res)=>{
    res.render("about")
})

router.get("/bizprojects.hbs", (req, res)=>{
    res.render("bizprojects")
})

router.get("/CV", (req, res)=>{
    res.render("CV")
})

router.get("/itprojects", (req, res)=>{
    res.render("itprojects")
})


module.exports=router