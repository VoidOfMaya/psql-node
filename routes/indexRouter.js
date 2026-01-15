//tools
const {Router}= require('express');
//controllers
const userController = require('../controllers/indexController.js')

        
const indexRouter =Router();
//./
indexRouter.get('/',userController.getUsernames);
//./new
indexRouter.get('/new', userController.createUsernameGet);
indexRouter.post('/new', userController.createUsernamePost);
//./?search
indexRouter.get('/search', userController.searchUsername);

module.exports = indexRouter
