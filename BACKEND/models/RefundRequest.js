const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    appoinmentRefNumber:{
        type:String,
        required:true
    },
    refundReason:{
        type:String,
        required:true
    },
    accountHolderName:{
        type:String,
        required:true
    },
    bankName:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    bankAccountNumber:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('RefundRequest',postSchema)