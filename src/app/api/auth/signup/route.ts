import { NextResponse } from 'next/server'
import User from '@/models/user'
import {connectDB} from '@/libs/mongodb.js'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
    const { fullname, email, password } = await request.json()
    if (!password || password.length < 6)
        return NextResponse.json({
            message: "Invalid password"
        }, {
            status: 400
        })

    try {
    await connectDB()
    const userFound = await User.findOne({ email })
    if (userFound) {
        return NextResponse.json(
            { message: 'There is already an account with this email' },
            { status: 409 }
        )
    }

    const pass = await bcrypt.hash(password, 12)

    const user = new User({
        email,
        password: pass,
        fullname
    })

    const savedUser = user.save()
    console.log(savedUser)

    return NextResponse.json(savedUser);
    } catch (error) {
        console.log(error)
        if(error instanceof Error){
            return NextResponse.json(
                {message: error.message},
                {status: 400}
            )
        }
    }
} 