import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password, hashedPassword) {
  try {
    console.log("Comparing passwords:");
    console.log("Input password length:", password?.length);
    console.log("Stored hash length:", hashedPassword?.length);
    
    if (!password || !hashedPassword) {
      console.log("Missing password or hash");
      return false;
    }

    const result = await bcrypt.compare(password, hashedPassword);
    console.log("Password comparison result:", result);
    return result;
  } catch (error) {
    console.error("Password comparison error:", error);
    return false;
  }
}
