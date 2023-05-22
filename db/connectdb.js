//Importing mangoose for MongoDB
import mongoose from "mongoose";

//Createting connectDB function
const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            //Database Name
            dbName: "expressschool"
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        //It will show Indicate Connection connected
        console.log(`Connected Successfully...`);
    } catch (error) {
        console.log(error)
    }
}

//Exporting connectDB using ES6 and will call in app.js and pass DATABASE_URL
export default connectDB