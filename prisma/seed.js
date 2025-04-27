import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const defaultUsers = [
  {
    email: 'admin@example.com',
    name: 'Admin User',
    password: 'Admin@123',
    role: 'admin',
    department: 'Administration'
  },
  {
    email: 'hod@example.com',
    name: 'HOD User',
    password: 'Hod@123',
    role: 'hod',
    department: 'Engineering'
  },
  {
    email: 'manager@example.com', 
    name: 'Manager User',
    password: 'Manager@123',
    role: 'manager',
    department: 'Operations'
  },
  {
    email: 'supervisor@example.com',
    name: 'Supervisor User', 
    password: 'Super@123',
    role: 'supervisor',
    department: 'Maintenance'
  },
  {
    email: 'technician@example.com',
    name: 'Technician User',
    password: 'Tech@123',
    role: 'technician',
    department: 'Maintenance'
  },
  {
    email: 'user@example.com',
    name: 'Regular User',
    password: 'User@123',
    role: 'user',
    department: 'General'
  }
];

async function main() {
  try {
    console.log('🌱 Starting database seeding...');
    console.log('Creating default users...\n');

    let successCount = 0;
    let errorCount = 0;

    for (const userData of defaultUsers) {
      // Validate required fields
      if (!userData.email || !userData.name || !userData.password || !userData.role) {
        throw new Error(`Missing required fields for user: ${userData.email}`);
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      
      // Try to create/update user with error handling
      try {
        const user = await prisma.user.upsert({
          where: { email: userData.email },
          update: {
            name: userData.name,
            role: userData.role,
            department: userData.department,
            isActive: true
          },
          create: {
            email: userData.email,
            name: userData.name,
            password: hashedPassword,
            role: userData.role,
            department: userData.department,
            isActive: true
          },
        });
        successCount++;
        console.log(`✅ Created: ${user.name} (${user.role}) - ${user.email}`);
      } catch (error) {
        errorCount++;
        if (error.code === 'P2002') {
          console.error(`⚠️ Skipped: ${userData.email} - Already exists`);
        } else {
          console.error(`❌ Error: ${userData.email} - ${error.message}`);
        }
      }
    }

    console.log('\n📊 Seeding Results:');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    console.log('\n🎉 Database seeding completed!\n');
  } catch (error) {
    console.error('❌ Seeding error:', error);
    throw error;
  }
}

// Execute seeding
main()
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
      .catch((error) => {
        console.error('Error disconnecting:', error);
      });
  });
