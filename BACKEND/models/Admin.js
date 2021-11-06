const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({

    emailadd:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true

    }
});

module.exports=mongoose.model('employee',postSchema);