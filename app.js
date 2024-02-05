const express = require('express')
const app = express()
app.set('view engine', 'ejs')
var usersRouter = require('./routes/users.js');
app.use('/users', usersRouter);
app.listen(3008);