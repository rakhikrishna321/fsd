import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensures unique usernames
        trim: true,   // Trims whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures unique emails
        lowercase: true, // Converts to lowercase
        trim: true,   // Trims whitespace
    },
    password: {
        type: String,
        required: true,
        minlength: 6, // Minimum password length
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Allowed roles
        default: 'user', // Default role
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the user model
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
