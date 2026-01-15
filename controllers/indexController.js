//import data
const db = require('../db/queries');
const {body, query , matchedData, validationResult} = require('express-validator')
//code:
const validatePostInput = [ body('user').notEmpty().withMessage('field can not be empty'),]
const validateGetInput = [ query('username').notEmpty().withMessage('field can not be empty'),]


exports.getUsernames = async (req, res) =>{
    const {search} = req.query;
    let searchUsers;

    if(search){
        searchUsers = await db.searchForUser(search);
        console.log(searchUsers)
    }
    const allUsers = await db.getAllUsernames();
    
    res.render('index' ,{ users : allUsers, searchResult: searchUsers});
}
exports.createUsernameGet = (req, res) => {
    res.render('newUser');
}
exports.createUsernamePost = [validatePostInput, async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    };

    const {user} = matchedData(req);
    console.log("username to be saved:  ", user);


    await db.insertUsername(user);
    res.redirect('/');
}]
exports.searchUsername = [validateGetInput , async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array(),})
    };
    const{ username} = matchedData(req)
    
    res.redirect(`/?search=${encodeURIComponent(username)}`);
}]
exports.deleteUSersGet = async (req, res) => {
    await db.deleteAllUsers();
    res.redirect('/')
}

