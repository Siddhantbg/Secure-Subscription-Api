import mongoose, { mongo } from "mongoose";

import {DB_URI,NODE_ENV} from '../config/env.js'

if(!DB_URI){
    throw new Error("Define the MONGODB_URI env variables inside .env(development/production>.local")
}

const connectToDatabase= async() => {
    try{

        await mongoose.connect(DB_URI);

        console.log(`Connected to DB in ${NODE_ENV} mode`);

    }catch(error){
        console.error("Error connecting to DB",error);

        //failure
        process.exit(1);
    }
}
export default connectToDatabase;