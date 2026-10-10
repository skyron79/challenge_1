import express from 'express';
import log from './middlewares/logger.js';
import messageRoutes from './routes/api/v1/Messages.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB)

  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();
const port = 4000;

 app.use(express.json()); 
 app.use(log);
 app.use('/', messageRoutes);



app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`);
});

export default app; 