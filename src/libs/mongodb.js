import mongoose from 'mongoose'

let {MONGODB_URI } = process.env

if(!MONGODB_URI ){
    throw new Error('Not URI found')
}

export const connectDB = async () =>{
    try{
        const connection = mongoose.connect("mongodb+srv://ROOT:8CdpGb2A0XrmMmge@cluster0.mln3ck0.mongodb.net/")
        if(connection.readyState === 1){
            console.log('DB CONNECTED')
            return Promise.resolve(true)
        }
    } catch(error){
        console.log(error)
        return Promise.reject(false)
    }
}