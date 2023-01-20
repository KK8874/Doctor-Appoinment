import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
    customername:{
        type:String,
        required:true
    },
    customerdesignation:{
        type:String,
        required:true
    },
    customeremail:{
        type:String,
        required:true
    },
    customeraddress:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const customerDetails = mongoose.model("customer",customerSchema);
export default customerDetails;