import { Schema, model, models } from "mongoose";

let UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    fullname: {
        type: String,
        required: [true, "Fullname is required"],
        maxLength: [100, 'Fullname exceeded 100 characters']
    }
});

const User = models.User || model('User', UserSchema);
export default User;