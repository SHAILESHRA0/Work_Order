import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  return await bcrypt.hash(password + (process.env.AUTH_SECRET ?? "secret"), 10);
}

export async function comparePassword(password, hashedPassword) {
  try {
    return await bcrypt.compare(
      password + (process.env.AUTH_SECRET ?? "secret"),
      hashedPassword
    );
  } catch (error) {
    console.log(error);
    return false;
  }
}
