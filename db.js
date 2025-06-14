const mongoose = require('mongoose');
require('dotenv').config({ path: './.env1' });

const mongooseurl = process.env.DB_URL // Replace with your MongoDB URI

// Remove useNewUrlParser and useUnifiedTopology options
mongoose.connect(mongooseurl);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ Connected to MongoDB');
});
db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});
db.on('disconnected', () => {
  console.log('⚠️ MongoDB has been disconnected');
});

module.exports = db;
