import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes, {authenticateToken} from "./routes/auth-routes";

dotenv.config();

const app = express();

app.use(express.json());  //for parsing application/json

app.use(cors());

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

app.use('/auth', authRoutes);

app.use(authenticateToken);

app.listen(3001, (err =>{
    console.log("Server running on port 3001");
}));

app.use('/', (req, res, next)=>{
    res.status(200).send('Not Found');
});