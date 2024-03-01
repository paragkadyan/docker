import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    authentication:{
        password:{type:String, required:true, select:false},
        salt:{type:String, select:false},
        sessionToken:{type:String, select:false},
    }
},{
    timestamps:true,
})

export const User = mongoose.model("User", UserSchema)

export const getUsers = () => User.find()
export const getUserByEmail = (email) => User.findOne({email})
export const getUserBySessionToken = (sessionToken) => User.findOne({ 'authentication.sessionToken': sessionToken })
export const getUserById = (id) => User.findById(id)
export const createUser = (values) => new User(values).save().then((user) => user.toObject());
export const deleteUserById = (id) => User.findByIdAndDelete(id)
export const updateUserById = (id,values) => User.findByIdAndUpdate(id, values)
