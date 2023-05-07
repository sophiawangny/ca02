
/*

4) each team member should add a route to the app which invokes chatGPT (or some other API) to do something interesting.
5) modify the app to include
   a) an about page which explains what your program does
   b) a "team" page which has a short bio of each member of the team and what their role was
   c) an index page with links to each of the team-members pages
   d) a form page for each team member which ask the user for some input, then calls the appropriate GPT method to get the response, which it sends back to the browser.


   */

const path = require('path');
const APIKEY = process.env.APIKEY;
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: APIKEY,
});
const openai = new OpenAIApi(configuration);


const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User')

   
async function result(text){
   const axios = require('axios')
   result =
   await axios.post('http://gracehopper.cs-i.brandeis.edu:3500/openai',
   {prompt:text}) 
   return result.data.choices[0].message.content ;
 }

   

 function isLoggedIn(req, res, next) {
   if (res.locals.loggedIn){
     return next();
   } else {
     res.redirect('/login');
   }
}


router.get("/foodgpt", (req, res) => {
   isLoggedIn,
   res.render("foodgpt");
 });


router.post("/foodgpt", async (req, res) => {
   const prompt = "what are the most popular baked goods in " + req.body.prompt + "?";
   const response = await result(prompt);
   console.log(response);

   res.render("foodgpt", { response });
 });



 module.exports = router;