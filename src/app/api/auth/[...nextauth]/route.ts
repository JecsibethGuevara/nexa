import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectDB } from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from 'bcryptjs'


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
            email: {label:"email", type: "email"} ,
            password: {label:"password", type: "password"} 
            },
            async authorize(credentials, req){
                await connectDB()
                console.log(credentials)
                const userFound = await User.findOne({email: credentials?.email}).select("password")
                if(!userFound) throw new Error('Invalid Credentials')
                console.log(userFound)
                const passMatch = await bcrypt.compare(credentials!.password, userFound.password)
                if(!passMatch) throw new Error('Invalid Credentials')

                console.log(userFound)
                return userFound
            }
        })
    ],
    callbacks: {
        jwt({account, token, user, profile, session}){
            if(user) token.user = user;
            console.log(token)
            return token;
        },
        session({session, token}){
            session.user = token.user as any;
            console.log(session)
            return session;
        }
    },
    pages:{
        signIn:'/authenticate',
        
    }
})


export {handler as GET, handler as POST}