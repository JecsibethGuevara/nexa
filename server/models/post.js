import { Schema, model } from "mongoose";
import models from 'mongoose'

let PostSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Email is required"]
    },
    postText: {
        type: String,
        required: [true, "Password is required"] 
    },
    timestamp: {
        type: Date,
    }
});

const Post = models.Post || model('Post', PostSchema);
export default Post