import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();



const mongoPassword = process.env.MONGODB_PASS;

const mongoURI = `mongodb+srv://d391:${mongoPassword}@users.nhjqqz1.mongodb.net/?retryWrites=true&w=majority&appName=users`;

async function connectDB() {
    mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB connected successfully'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
}

export {connectDB}