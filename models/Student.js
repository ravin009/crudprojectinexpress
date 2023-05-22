//Importing mongoose for database mongodb
import mongoose from 'mongoose';

//Defining Schema
const studentSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true },
    age: {type: Number, required: true, min:2, max:45},
    fees: {type: mongoose.Decimal128, required: true, validate: v=>v>= 5500.50}
})

//Creating Model
const studentModel = mongoose.model('student', studentSchema)

//Exporting model
export default studentModel
