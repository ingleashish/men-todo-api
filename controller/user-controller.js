const {User} =  require("../models/user.model");
const _ = require("lodash");
const {ObjectID} = require("mongodb");

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
 }
}
