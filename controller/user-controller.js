const {User} =  require("../models/user.model");
const _ = require("lodash");
const {ObjectID} = require("mongodb");
const auth = require("../middleware/auth.middleware");

module.exports = {
 createUser(req, res) {
   let creden =  _.pick(req.body, ['email', 'password']);
   let user = new User(creden);

   user.save().then(() => {
     return user.generateAuthToken();
   }).then((token)=>{
     res.header('x-auth', token).send(user);
   }).catch((error)=>{
     res.status(400).send(error);
   });
 },

 getAuthUser(req, res) {
   let token = req.header('x-auth');

   User.findByToken(token).then((user)=>{
     if(!user){
       return Promise.reject();
     }

     res.send(user);
   }).catch((e)=>{
     res.status(401).send();
   })
 }
}
