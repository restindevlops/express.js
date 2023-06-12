const path=require('path');

exports.getAddProducts= (req,res,next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))

 }

 exports.postAddProducts= (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
}