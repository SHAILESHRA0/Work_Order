const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Ensure this field is correct
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['admin', 'hod', 'manager', 'supervisor', 'technician'], // Ensure all valid roles are included
    required: true 
  },
  email: { type: String, required: true, unique: true },
  redirectUrl: { type: String, required: true }, // Ensure this field is required
  department: String,
  supervisedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  lastLogin: { type: Date } // Add this field to track the last login timestamp
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
