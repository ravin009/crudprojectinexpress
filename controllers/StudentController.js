//Importing created model for using with controller
import studentModel from "../models/Student.js"

//Controller for action
class StudentController {
    //It will run and create doc on Click Submit or Add button
    static createDocs = async (req, res) => {
       try {
            //console.log(req.body)
            //Destructuring req.body
        const{name, age, fees} = req.body
        const doc = new studentModel({
            name:name,
            age:age,
            fees:fees
        })
        const result = await doc.save()
        //console.log(result)
        res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
        
    }

    //It will Display(get) data on screen in table
    static getAllDocs = async (req, res) => {
        try {
            const result = await studentModel.find()
            //console.log(result)
            res.render('home', {data: result})
        } catch (error) {
            console.log(error) 
        }
    }

    //It will take action for editing on clicking Edit Icon or edit button
    static editDocs = async (req, res) =>{

        try {
            //console.log(req.params.id)
            const result = await studentModel.findById(req.params.id)
            console.log(result)
            res.render('edit', {data: result})
        } catch (error) {
            console.log(error)
        }   
    }

    //It will update Document when we re-enter updated details on click on Update button
    static updateDocById = async (req, res) => {

        try {
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body)
           console.log(result)
            res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
        //console.log(req.params.id)
        //console.log(req.body)
    }
    
    //It will simply delete document when we click on Delete icon or delete button
    static deleteDocById = async (req, res) => {
        try {
        //console.log(req.params.id)
        const result = await studentModel.findByIdAndDelete(req.params.id)
        res.redirect('/student')
        } catch (error) {
            console.log(error)
        }
    }         
}

export default StudentController