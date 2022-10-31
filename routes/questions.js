const express = require('express')
const router = express.Router()
const questionschema = require('../models/questionschema')
// Get questions
router.get('/getquestions',async(req,res)=>{
    try{
        const questions = await questionschema.find({})
        res.json(questions)
    }
    catch(error){
        res.send(error)
    }
})
router.post('/addquestion',async(req,res)=>{
    const {question,option1,option2,option3,option4,answer} = req.body
    try{
        const newQuestion = new questionschema({
            question,option1,option2,option3,option4,answer
        })
        const saveQues = await newQuestion.save()
        res.json(saveQues)
    }
    catch(error){
        res.json(error)
    }
})



router.delete('/deletequestion/:id',async(req,res)=>{
    
    try{
        const question = await questionschema.findByIdAndDelete({id:req.query.id})
        res.json(question)
        
    }
    catch(error){
        res.json(error)
    }
    
})




module.exports = router