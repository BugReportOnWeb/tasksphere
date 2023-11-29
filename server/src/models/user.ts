import mongoose from "mongoose";
const { Schema } = mongoose;

// Type for Typescript
interface UserType {
    email: string;
    password: string;
}

// Type/Schema for MongodDB
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

const UserModel = mongoose.model('User', UserSchema);

export { UserType };
export default UserModel;
