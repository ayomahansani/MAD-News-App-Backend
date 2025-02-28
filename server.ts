import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes, {authenticateToken} from "./routes/auth-routes";

dotenv.config();

const app = express();

app.use(express.json());  //for parsing application/json

app.use(cors());

app.use('/auth', authRoutes);

app.listen(3001, (err =>{
    console.log("Server running on port 3001");
}));

app.use('/', (req, res, next)=>{
    res.status(200).send('Not Found');
});