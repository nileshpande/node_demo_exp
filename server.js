require('dotenv').config();
const express = require('express');
const app = express();
//const apiRoutes = require('./server/routes/routers');
const userRouter = require('./server/API/users/user.router');

app.use(express.json());

app.listen(process.env.APP_PORT || '3636',()=>{
    console.log(`server is running on port: ${process.env.APP_PORT || '3636' }`);
});

app.use('/api/users',userRouter);
