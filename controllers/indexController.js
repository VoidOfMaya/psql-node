//import data
const db = require('../db/queries');
//code:
async function getUsernames(req, res){
    const usernames = await db.getAllUsernames();
    console.log(usernames);
    res.render('index' ,{ users : usernames});
}
async function createUsernameGet(req, res){
    res.render('newUser');
}
async function createUsernamePost(req, res){
    console.log("username to be saved: ", req.body.user);
    const {user} = req.body;
    await db.insertUsername(user);
    res.redirect('/');
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,
}