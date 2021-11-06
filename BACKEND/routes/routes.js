const express = require('express');
const RefundDetails = require('../models/RefundDetails');
const Posts = require('../models/Payment');
const RefundRequest = require('../models/RefundRequest');
const Admin = require('../models/Admin');

const router = express.Router();

//Payemnts

//save posts
router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save().then(data=>{
        return res.status(200).json({
            success:true,
            data:data
        });
    });
});

//get posts
router.get('/posts',(req,res) =>{
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});


//get a specific post
router.get("/post/:id",(req,res) =>{

    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts
router.put('/posts/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//delete post
router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPosts) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful", err
        });

        return res.json({
            message:"Delete Succesfull",deletedPosts
        });
    });
});



//Refund Request 

//Save Post

router.post('/refundPost/save',(req,res)=>{

    let newPost = new RefundRequest(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get posts

router.get('/refundGet',(req,res) =>{
    RefundRequest.find().exec((err,refundGet) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:refundGet
        });
    });
});

//delete post

router.delete('/refundGet/delete/:id',(req,res) =>{
    RefundRequest.findByIdAndRemove(req.params.id).exec((err,deletedRefundRequset) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccesful", err
        });

        return res.json({
            message:"Delete Succesfull",deletedRefundRequset
        });
    });
});


//Refund Details 

//Save Post

router.post('/refunddetail/save',(req,res)=>{

    let newPost = new RefundDetails(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});

//get posts

router.get('/refund',(req,res)=>{
    const referenceNo=req.query.ref;
    const nicno= req.query.nic; 
    console.log(referenceNo)
    console.log(nicno)
    RefundDetails.find({$and:[{referenceNo:referenceNo},{nicno:nicno

}]}).exec((err,refundDetails)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:refundDetails
        });
    });
});


// router.get('/refunddetailsGets',(req,res) =>{
//     RefundDetails.find().exec((err,refunddetailsGets) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingPosts:refunddetailsGets
//         });
//     });
// });

//get a specific post
// router.get("/refunddetailsGet/:id",(req,res) =>{

//     let postId = req.params.id;

//     RefundDetails.findById(postId,(err,refunddetailsGet) =>{
//         if(err){
//             return res.status(400).json({success:false, err});
//         }

//         return res.status(200).json({
//             success:true,
//             refunddetailsGet
//         });
//     });
// });



//Admin login

router.post('/admin/adminlogin',(req,res)=>{
    const {emailadd, password} = req.body;
    Admin.findOne({emailadd:emailadd ,password:password},(err, Admin) => {
        if(Admin) {
            if(password=== Admin.password){   

                res.send({message: "login successfull"})      
            
            }
            else{

                res.send({message: "Invalid credentials"})

            }
        }
    })
})
module.exports = router;