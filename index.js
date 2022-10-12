const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const winston=require('winston');
const expresswinston=require('express-winston');
const ProductRouter=require('./routes/ProductRouter');
const Reviewrotes=require('./routes/Reviewrotes')
const CategoryRoutes=require('./routes/CategoryRoutes')
const UserRoutes=require('./routes/UserRoutes');
const Orderroutes=require('./routes/Orderroutes');
// db connection
const mongoose=require('./config/mongoose');
mongoose;
dotenv.config();   
PORT=process.env.PORT; 


// Winston logging setup
app.use(expresswinston.logger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
    
 }))

app.use(cors());
app.use(express.json())
app.use('/product',ProductRouter);
app.use('/routes',Reviewrotes);
app.use('/category',CategoryRoutes);
app.use('/user',UserRoutes)
app.use('/order',Orderroutes);


// Error log set up
app.use(expresswinston.errorLogger({
    transports: [
        new winston.transports.Console()
      ],
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      )

 })); 


app.listen(PORT,()=>{
    console.log(`Server is runnning at ${PORT}`)
})




