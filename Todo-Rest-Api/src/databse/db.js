import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`mongodb+srv://paragkadyan:kadyan123@cluster0.6ns6dff.mongodb.net/todoRestApi`)
        console.log(`\n MongoDB connected !! DB HOST :: ${connectionInstance.connection.host}`)
    } catch (error){
        console.log("Mongodb connection error", error);
        process.exit(1)
    }
}




export default connectDB