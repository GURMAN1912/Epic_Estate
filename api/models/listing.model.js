import mongoose from "mongoose";
const listingSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    bathrooms:{
        type:Number,
        required:true,
    },
    bedrooms:{
        type:Number,
        required:true,
    },
    furnished:{
        type:Boolean,
        required:true,
    },
    parking:{
        type:Boolean,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    imageUrls:{
        type:[String],
        required:true
    },
    userRef:{
        type:String,
        required:true,
    },
    
},{timestamps:true})

const Listing=mongoose.model('Listing',listingSchema);

export default Listing