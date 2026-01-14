//tools
const {Router}= require('express');
//controllers
const {getUsernames, createUsernameGet, createUsernamePost} = require('../controllers/indexController.js')

const indexRouter =Router();
//get
indexRouter.get('/',getUsernames);
indexRouter.get('/new',createUsernameGet);
indexRouter.post('/new',createUsernamePost);

module.exports = indexRouter
