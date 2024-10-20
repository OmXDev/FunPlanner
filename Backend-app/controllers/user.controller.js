import { User } from "../models/user.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
// import cloudinary from '../utils/cloudinary.js';


export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return res.status(401).json({
                message: "something is missing,please check!",
                success: false
            })
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: 'User already registered .',
                success: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            message: 'Account created Succesfully',
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: 'something is missing,please check!',
                success: false
            })
        }
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json(({
                messages: 'invalid id or password',
                success: false
            }))
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: `Incorrect email or password`,
                success: false
            })
        }

        const token = await jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
        //populate each post if in the posts array
        
        

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            
        }

        return res.cookie('token', token, { httpOnly: true, sameSite: 'strict', maxAge: 1 * 24 * 60 * 60 * 100 }).json({
            message: `Welcome back ${user.fullname}`,
            success: true,
            user
        })
    } catch (error) {
        console.log(error)
    }
}

export const logout = async (_, res) => {
    try {
        return res.cookie('token', "", { maxAge: 0 }).json({
            message: 'Logged out successfully',
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}
