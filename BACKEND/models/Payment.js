const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    paymentType:{
        type:String,
        required:true
    },
    invoiceNo:{
        type:String,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },
    payerName:{
        type:String,
        required:true
    },
    nicNo:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        maxLength:10,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Payment',postSchema)