import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient({
    log: ['query', 'error', 'warn'],
    errorFormat: 'minimal'
});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export const db = prisma;

// Handle cleanup
process.on('beforeExit', async () => {
    await prisma.$disconnect();
});

let isConnected = false;

export const connectDB = async () => {
    try {
        await prisma.$connect();
        
        // Test the connection
        await prisma.$queryRaw`SELECT 1`;
        
        console.log('Database connected successfully');
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        throw new Error('Failed to connect to database');
    }
};

async function disconnectDB() {
  if (!isConnected) {
    console.log("Database already disconnected");
    return;
  }

  try {
    const disconnectPromise = db.$disconnect();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Disconnect timeout')), 5000)
    );

    await Promise.race([disconnectPromise, timeoutPromise]);
    isConnected = false;
    console.log("Database disconnected successfully");
  } catch (error) {
    console.error("Error disconnecting from database:", error);
    // Force disconnect on error
    try {
      await db.$disconnect();
      isConnected = false;
    } catch (e) {
      console.error("Force disconnect failed:", e);
    }
  }
}

// Handle multiple termination signals
['SIGINT', 'SIGTERM', 'beforeExit'].forEach(signal => {
  process.on(signal, async () => {
    console.log(`${signal} received, closing database connection...`);
    await disconnectDB();
    if (signal !== 'beforeExit') {
      process.exit(0);
    }
  });
});

export { disconnectDB, isConnected };
