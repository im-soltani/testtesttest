const express=require("express")
const isAuthorize=require('../middlewares/isAuthorize')
const isAuthenticate=require('../middlewares/isAuth')
const router=express.Router()
const User=require("../models/User")



//ban artisan or client by admin
router.put("/ban/:_id",isAuthenticate,isAuthorize(['admin',false]),(req,res)=>{

  const _id=req.params._id
  User.findOneAndUpdate({_id},{$set:{"banned":"true"}},{useFindAndModify: false})
  .then(user=>res.send(user))
  .catch(err=>console.log(err))
})

module.exports=router