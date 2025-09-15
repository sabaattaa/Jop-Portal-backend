
import mongoose from "mongoose";
// mongoose package to connect node with mongodb

const userSchema=new mongoose.Schema(
    {
        name:{ type:String, required:true},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        role:{ type:String, enum:["seeker","employer", "admin"], default:"seeker"},
    },
    {timeStamps:true},
)
export default mongoose.model("User", userSchema)