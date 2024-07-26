import cors from 'cors';
import express from 'express';
const app = express();
import '../database/db.js';
import authRoutes from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';
import morgan from 'morgan';


app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/task', taskRouter);

// localhost:4000/auth/register

const port = 4000;

app.listen(port, () => {
	console.log(`server is running on port`, port);
});
