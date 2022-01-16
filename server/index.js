const express = require("express");
// const mysql2 = require('mysql2/promise');
// const session = require("express-session")
// var MySQLStore = require('express-mysql-session')(session)
let app=express() ;
const PORT=3000
var cors = require('cors')
var json = require('express-json')
var db = require('./database/index.js')
app.use(cors());
app.use(express.json())  

app.use(express.urlencoded({extended:true}))

var test = require('./routers/test.js');
var items = require("./routers/item.js");


var test = require('./routers/test.js');
var signup = require('./routers/signup.js')
var login = require('./routers/login.js')
var updateProfile = require('./routers/updateProfile.js')
var userData = require('./routers/getuserData.js')
var postItem = require ('./routers/postItem')
var postStore = require('./routers/postStore')

var post = require('./routers/posts.js');
var pets = require('./routers/pets.js')

const nodemailer = require ('nodemailer')


app.post('/email', (req, res) =>{
    var data = req.body;
    console.log(data);
  
    let smpTransport = nodemailer.createTransport({
      service : 'Gmail',
      port: 465,
      auth :{
        user: 'all.in.one.customer.services@gmail.com',
        pass : 'Azerty123+'
      }
    });
    let mailOption ={
      from : 'all.in.one.customer.services@gmail.com',
      to : data.email,
      subject : 'welcome to auction house',
      html: `<h3>thank you for enjoy us </h3>
            
      <h3>you can concatc us phone : 50915806</h3>`
    };
    smpTransport.sendMail(mailOption,(err, response) =>{
      if(err){
        res.send('errorrrrr')
      }else{
        res.send('success')
      }
    })
    smpTransport.close()
  })
  


app.use("/",test);
app.use("/items",items);
app.use("/",signup);
app.use("/",login);
app.use("/",updateProfile);
app.use("/",post);
app.use("/",userData);
app.use("/",postItem);
app.use("/",postStore);
app.use('/',pets)


//session 
// var options = {
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: 'root',
// 	database: 'mydb'
// };
// var connection = mysql2.createPool(options);
// var sessionStore = new MySQLStore({

// }, connection);
// app.use(session({
//     secret:"hello",
//     resave:false,
//     saveUninitialized:false,
//     store: sessionStore
// }))
// app.get("/",(req,res)=>{
//     req.session.isAuth=true
//     console.log(req.session)
//     console.log(req.session.id);
//     res.send("seession")
// })

const server = app.listen(PORT, function(){
    console.log('server is running at %s', server.address().port);
});

