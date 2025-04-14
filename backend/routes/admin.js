import express from "express";
import { admin } from "../middleware/admin.js";
import { db } from "../db/db.js";
import { hashPassword } from "../utils/hash.js";

const router = express.Router();

// Add Employee
router.post("/api/add-employee", admin, async (req, res) => {
  const { name, email, password, role, accessLevel } = req.body;

  if (!name || !email || !password || !role || !accessLevel) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  const userExists = await db.user.findFirst({
    where: { email: email },
  });

  if (userExists) {
    return res.status(400).send({ message: "User already exists!" });
  }

  const newEmployee = await db.$transaction(async (tx) => {
    const hashedPassword = await hashPassword(password);
    return await tx.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: role,
        employees: {
          create: {
            access: accessLevel,
          }
        }
      },
    });
  });

  if (!newEmployee) {
    return res.status(400).send({ message: "Error adding employee." });
  }
  return res.status(201).send({ message: "Employee added successfully!" });
});

router.post("/api/add-user", admin, async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  const userExists = await db.user.findFirst({
    where: { email: email },
  });
  if (userExists) {
    return res.status(400).send({ message: "User already exists!" });
  }
  const newUser = await db.$transaction(async (tx) => {
    const hashedPassword = await hashPassword(password);
    return await tx.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: "user",
      },
    });
  });

  if (!newUser) {
    return res.status(400).send({ message: "Error adding user." });
  }
  return res.status(201).send({ message: "User added successfully!" });
});

export { router as adminRouter };
