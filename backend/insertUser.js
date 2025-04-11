const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://localhost:27017/workorder", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertUser() {
  try {
    const hashedPassword = await bcrypt.hash("password123", 10); // Replace with desired password
    const user = new User({
      username: "testuser", // Replace with desired username
      password: hashedPassword,
      role: "Visitor", // Replace with desired role
      redirectUrl: "/visitor-dashboard", // Replace with desired redirect URL
    });

    await user.save();
    console.log("User inserted successfully");
  } catch (error) {
    console.error("Error inserting user:", error.message);
  } finally {
    mongoose.connection.close();
  }
}

insertUser();
