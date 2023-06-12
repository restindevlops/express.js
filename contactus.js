const path=require('path');

const express=require('express');

const router=express.Router();

const contactusController=require('../controller/contactus');

router.get('/contactus',contactusController.getContactUs);

 module.exports=router;