const {urlencoded}=require('express');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port= process.env.PORT ||8000;
require("./db/conn");
const Register = require("./models/signup");
const patient = require("./models/blood");
const {json}= require("express");
app.use(express.json());
app.use(express.urlencoded({extented:true}));
app.use(express.static(path.join(__dirname )));
app.set('view engine','pug');

app.get('/',(req, res)=>
{res.render(path.join(__dirname+'/views/home_page.pug'))
})
app.use(express.static(path.join(__dirname)));
app.get('/blood_donation',(req, res)=>{
    res.render(path.join(__dirname+'/donation/blood_donation.pug'))
})
app.get('/contact',(req, res)=>{
    res.render(path.join(__dirname+'/contact/contact_us.pug'));
})
app.get('/login',(req, res)=>{
    res.render(path.join(__dirname+'/login/signup.pug'));
})
/*app.post('/Register',async (req,res)=>{
    try{
      const password = req.body.password;
      const cpassword = req.body.password2;
      if(password === cpassword){
    const Signup = new Register({
      Username : req.body.username,
      email : req.body.email,
      password : req.body.password,
      confirmpassword : req.body.password2
    })
    const registered = await Signup.save();
    res.status(201).render("blood_donation.pug");
      }
      else{
        res.send("password is not matching")
      }
    }
    catch(error){
      res.status(400).send(error)
    }
    })*/

    // post request.
    app.post('/Register', function(req,res){
      const pass = req.body.password;
      const pass2 = req.body.password2;
      if(pass === pass2){
        var detail = new Register({
          username : req.body.username,
          email : req.body.email,
          password : req.body.password,
          password2 : req.body.password2,
        })}
       detail.save().then(a=>{
         console.log(a);
         res.redirect('/blood_donation');
       });
      })
   /*app.post('/blood_donation' ,function(req,res){
          const email = req.body.email;
          const pass = req.body.pass;
         Register.findOne({email:email},(err,res)=>{
           if(err){
             console.log(err);
           }
           else
           {
             console.log(res);
           }
         });*/
         /*console.log(useremail);
         console.log(pass);
         console.log(email);
          var patients = new patient({
            username : req.body.username,
            email : req.body.email,
            pass : req.body.pass,
            group : req.body.group,
            contact: req.body.contact,
            patient : req.body.patient,
            district: req.body.district,
          })
          patients.save().then(b=>{
            console.log(b);
            res.redirect('/home_page');
          });*/
        
    
         app.post('/blood_donation', function(req,res){
            console.log(req.body);
              const allquery = new patient({
                username : req.body.username,
                email : req.body.email,
                pass : req.body.Pass,
                group : req.body.group,
                contact: req.body.contact,
                patient : req.body.patient,
                district: req.body.district,
              })
              allquery.save();
              res.redirect("/");
          });


      // new 



      /*app.post('/blood_donation',async (req,res)=>{
        try{
          const pass = req.body.password;
          const email = req.body.email;
          const useremail = await Register.findOne({email:email})
          if(useremail.password === pass){
        const pri = new patient({
          username : req.body.username,
          email : req.body.email,
          pass : req.body.pass,
          group : req.body.group,
          contact: req.body.contact,
          patient : req.body.patient,
          district: req.body.district,
        })
        const registered = await pri.save();
        res.status(201).render("home_page");
          }
          else{
            res.send("password is not matching")
          }
        }
        catch(error){
          res.status(400)
        }})*/

      /*app.post("/Register",async (req,res)=>
      {
        var name = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var conformpass = req.body.password2;
        if(password===conformpass)
        {
          var data = {
            "name": username,
            "email": email,
            "password": password,
            "conformpass": password2
          }
        }
        mydb.collection('login').insertOne(data,(err,collection)=>{
          if(err) {throw err;}
          console.log("record inserted");
        });
        return  res.redirect('blood_donation.pug')
      })*/

app.listen(port , ()=>{
    console.log(`Example App Listening at http://localhost:${port}`)
});
// write npm run dev to start nodemon