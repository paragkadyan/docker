import express from 'express'
import { getUserByEmail, createUser } from '../model/user.model.js'
import {ApiError} from '../utils/ApiError.js'
import {authentication, random} from '../utils/index.js'
import { asyncHandler } from '../utils/asyncHandler.js'

export const login = asyncHandler( async(req,res)=> {
    try {
        const {email, password} = req.body

        if(!email || !password) {
            throw new ApiError(400, "All fields are required")
        }

        const user = await getUserByEmail(email).select(" +authentication.salt +authentication.password")

        if(!user){
            throw new ApiError(400, "User doesnt exists")
        }

        
        const cryptedPassword =  authentication(user?.authentication?.salt, password )
        

        if(cryptedPassword != user?.authentication?.password){
            throw new ApiError("Password is incorrect")
        }

        const salt = random()
        user.authentication.sessionToken = authentication(salt, user._id)

        await user.save()


        return res
        .cookie("toDoAuth", user.authentication.sessionToken)
        .status(200)
        .json(user)
        
         
        
    } catch (error) {
        console.log(error);
        throw new ApiError(400, "login failed")
    }
})

export const register = asyncHandler( async(req, res)=>{
   try {
    const {email, password, username} = req.body 
    if(!email || !password || !username) {
        throw new ApiError(400, "All fields are required")
    }

    const existinguser = await getUserByEmail(email)

    if(existinguser){
        throw new ApiError(400, "User already exists")
    }

    const salt = random()
    const user = await createUser({
        email,
        username,
        authentication: {
            salt,
            password: authentication(salt, password),
        }
    })

    return res
    .status(200)
    .json(user).end()


   } catch (error) {
     console.log(error);    
     throw new ApiError(400, "authentication failed")
   } 
})