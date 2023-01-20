import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const userSchema = new mongoose.Schema({
    titel:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
userSchema.plugin(paginate);
const userDetails = mongoose.model("book",userSchema);
export default userDetails;