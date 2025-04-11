const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

async function seedUsers(adminUser) {
  // Verify if the requesting user is an admin
  if (!adminUser || adminUser.role !== "admin") {
    throw new Error("Unauthorized: Only admin users can create new users");
  }

  // Define default users for all roles
  const users = [
    { 
        username: "Technician1", 
        role: "technician", 
        password: "Tech@123", 
        email: "technician1@example.com", 
        redirectUrl: "/technician.html" 
    },
    { 
        username: "AdminUser", 
        role: "admin", 
        password: "Admin@123", 
        email: "adminuser@example.com", 
        redirectUrl: "/admin.html" 
    },
    { 
        username: "AdminHOD", 
        role: "hod", 
        password: "Hod@123", 
        email: "hod@example.com", 
        redirectUrl: "/hod.html" 
    },
    { 
        username: "Manager1", 
        role: "manager", 
        password: "Manager@123", 
        email: "manager1@example.com", 
        redirectUrl: "/manager.html" 
    },
    { 
        username: "Supper", 
        role: "supervisor", 
        password: "Sup@123", 
        email: "supervisor@example.com", 
        redirectUrl: "/supervisor.html" 
    }
  ];

  const results = [];

  for (let userData of users) {
    try {
      const existingUser = await User.findOne({ username: userData.username });

      if (existingUser) {
        results.push(`⚠️ User '${userData.username}' already exists. Skipping.`);
        continue;
      }

      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const newUser = new User({
        username: userData.username,
        role: userData.role,
        password: hashedPassword,
        email: userData.email,
        redirectUrl: userData.redirectUrl,
        createdBy: adminUser._id
      });

      await newUser.save();
      results.push(`✅ User '${userData.username}' (${userData.role}) created successfully!`);
    } catch (error) {
      results.push(`❌ Error creating user '${userData.username}': ${error.message}`);
    }
  }

  return results;
}

// Add this function before the main connection code
const checkMongoConnection = async () => {
  try {
    const state = mongoose.connection.readyState;
    if (state === 1) {
      console.log('✅ MongoDB is connected');
      return true;
    } else {
      console.log('⚠️ MongoDB connection state:', {
        0: 'disconnected',
        1: 'connected',
        2: 'connecting',
        3: 'disconnecting'
      }[state]);
      return false;
    }
  } catch (error) {
    console.error('❌ Error checking MongoDB connection:', error);
    return false;
  }
};

// If running directly as a script
if (require.main === module) {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5 second timeout
  }).then(async () => {
    const isConnected = await checkMongoConnection();
    if (!isConnected) {
      throw new Error('MongoDB connection check failed');
    }
    try {
      // Ensure an admin user exists
      let adminUser = await User.findOne({ role: "admin" });
      if (!adminUser) {
        console.log("No admin user found. Creating a default admin user...");
        const hashedPassword = await bcrypt.hash("Admin@123", 10);
        adminUser = await User.create({
          username: "AdminUser",
          role: "admin",
          password: hashedPassword,
          email: "adminuser@example.com",
          redirectUrl: "/admin.html"
        });
        console.log("✅ Default admin user created successfully!");
      }

      const results = await seedUsers(adminUser);
      results.forEach(result => console.log(result));
    } catch (error) {
      console.error("❌ Error:", error.message);
    }
    process.exit(0);
  }).catch(err => {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  });
}

module.exports = seedUsers;
