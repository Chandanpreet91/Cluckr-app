const express = require("express");
const app = express();

const logger=require('morgan');
const path=require('path');
const cookieParser =require('cookie-parser');
const methodOverride= require('method-override');



app.set('view engine','ejs');
app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(methodOverride((request,response) => {
    if(request.body && typeof request.body === 'object' && '_method' in request.body){
        const method = request.body._method;
        delete request.body._method;
        return method;
    }
}));
app.use((req,res,next) => {
    const username =req.cookies.username;
   res.locals.signedInUser = username || "";
    next();
})
app.use(express.static(path.join(__dirname,"public")))


const baseRouter = require("./routes/baseRouter");
app.use('/',baseRouter);

const clucksRouter = require("./routes/clucksRouter");
app.use("/",clucksRouter);
 const PORT = 3000;
 const ADDRESS  = 'localhost';
 app.listen(PORT,ADDRESS,()=> {
   console.log(`Server has started listening at HTTP://${ADDRESS}:${PORT}`);
});