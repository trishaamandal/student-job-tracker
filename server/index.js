// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import jobRoutes from './routes/jobs.js';

// dotenv.config();
// console.log('✅ .env loaded');
// console.log('🔗 Mongo URI:', process.env.MONGO_URI);

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/api/jobs', jobRoutes);

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('✅ Connected to MongoDB');
//         app.listen(process.env.PORT, () => {
//             console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error('❌ MongoDB connection error:', err);
//     });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as jobRoutes } from './routes/jobs.js'; // ✅ FIXED

dotenv.config();
console.log('✅ .env loaded');
console.log('🔗 Mongo URI:', process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoutes); // now this works

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err);
    });
