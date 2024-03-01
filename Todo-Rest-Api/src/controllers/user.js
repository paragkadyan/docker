import { deleteUserById, getUsers, updateUserById, getUserById } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";



export const getAllUsers = asyncHandler(async(req, res) => {
    try {
        const users = await getUsers()
        
        return res
        .status(200)
        .json(users)
    } catch (error) {
        throw new ApiError(400, "something went wrong while fetching all users")
    }
})

export const deleteUser = asyncHandler( async(req, res) => {
    try {
        const{ id } = req.params

        const deletedUser = await deleteUserById(id)

        return res
        .status(200)
        .json(deletedUser)

    } catch (error) {
        throw new ApiError(400, "failed to delete the user")
    }
})

export const updateUser = asyncHandler( async(req,res) => {

    try {
        
        const {id} = req.params

        const {username} = req.body

        if(!username){
            throw new ApiError(400, "username required")
        }

        await updateUserById(id, { username: username })
        
        const user = await getUserById(id)

        return res
        .status(200)
        .json(user)

    } catch (error) {
        throw new ApiError(400, "updation failed")
    }
})