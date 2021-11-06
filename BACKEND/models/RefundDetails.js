const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    referenceNo:{
        type:String,
        required:true
    },
    nicno:{
        type:String,
        required:true
    },
    transactionID:{
        type:String,
        required:true
    },
    paymentDate:{
        type:String,
        required:true
    },
    payername:{
        type:String,
        required:true
    },
    payeraddress:{
        type:String,
        required:true
    },
    totalfee:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('RefundDetials',postSchema)