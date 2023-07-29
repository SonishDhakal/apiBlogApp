import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import authRoute from './routes/auth.routes.js'
import postRoute from './routes/post.routes.js'
import commentRoute from './routes/comments.route.js'
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser';

const app = express();



dotenv.config()
app.use(cors());
app.use(express.json())
app.use(cookieParser())


async function connectDb(){
    mongoose.connect(process.env.Mongo)
    .then(res => console.log("Db is connected"))
    .catch(e => console.log(e))
}


app.use('/api/auth/',authRoute)
app.use('/api/post/',postRoute)
app.use('/api/comments/',commentRoute)
app.use('/api/users/',userRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
});

const port = process.env.PORT
if(port){
  app.listen(port, () =>{
      connectDb()
      
  })

}


export default app



