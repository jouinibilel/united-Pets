var db = require("../database/index.js")
module.exports={
    Update:(req,res)=>{
        console.log(req.params);
        db.query("UPDATE `users` SET `firstName` = ? , `lastName`=? ,`email`=?, `phoneNumber`=? ,`adress`=? ,`imageUrl`=? WHERE `iduser` = ? ",
        [req.body.firstName,req.body.lastName , req.body.email,req.body.phoneNumber,req.body.adress,req.body.imageUrl,req.params.iduser],(err,result)=>{
           if(err){
               res.status(401).send(err)
           }else
           {
               res.status(201).send(result);
           }
       })
    
    }
}
