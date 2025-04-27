import { PrismaClient } from "@prisma/client";

let db;

if (process.env.NODE_ENV === 'production') {
  db = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  });
} else {
  if (!global.db) {
    global.db = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      }
    });
  }
  db = global.db;
}

// Track connection status
let isConnected = false;

async function connectDB() {
  try {
    const connectPromise = db.$connect();
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Connection timeout')), 
      parseInt(process.env.MONGODB_CONNECT_TIMEOUT || '5000'))
    );

    await Promise.race([connectPromise, timeoutPromise]);
    
    // Verify database connection
    const dbName = process.env.DATABASE_NAME || 'Work_Order';
    await db.$queryRaw`db.getMongo().getDBNames()`;
    
    isConnected = true;
    console.log(`🌟 Database connected successfully to ${dbName}`);
    return true;
  } catch (error) {
    console.error("❌ Database connection error:", error);
    return false;
  }
}

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

export { connectDB, db, disconnectDB, isConnected };
