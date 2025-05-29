import { PrismaClient } from '@prisma/client'
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function main() {
  console.log('🌱 Seeding database...')

  const user1 = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: await hashPassword('password'),
      role: 'admin',
      department: 'IT',
      isActive: true,
      lastLogin: new Date(),
    },
  })

  const vehicle1 = await prisma.vehicle.create({
    data: {
      model: 'Toyota Corolla',
      licensePlate: 'ABC123',
    },
  })

  const workOrder1 = await prisma.workOrder.create({
    data: {
      orderNumber: 'WO-001',
      title: 'Fix leaking pipe',
      description: 'There is a leaking pipe in the production area.',
      department: 'MAINTENANCE',
      priority: 'HIGH',
      status: 'PENDING',
      startDate: new Date(),
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // +3 days
      createdById: user1.id,
      vehicleId: vehicle1.id,
    },
  })

  await prisma.task.create({
    data: {
      workOrderId: workOrder1.id,
      description: 'Replace pipe',
      status: 'PENDING',
      priority: 'HIGH',
    },
  })

  await prisma.comment.create({
    data: {
      workOrderId: workOrder1.id,
      content: 'Need to check pipe size before replacing.',
      authorId: user1.id,
    },
  })

  await prisma.attachment.create({
    data: {
      workOrderId: workOrder1.id,
      filename: 'leak.jpg',
      path: '/uploads/leak.jpg',
      type: 'image',
      size: 204800,
    },
  })

  await prisma.history.create({
    data: {
      workOrderId: workOrder1.id,
      authorId: user1.id,
      action: 'CREATE',
      changes: { message: 'Work order created.' },
    },
  })

  await prisma.maintenanceDetails.create({
    data: {
      workOrderId: workOrder1.id,
      requiredParts: ['Pipe', 'Sealant'],
      safetyTools: ['Gloves', 'Helmet'],
      procedures: ['Shut off water', 'Replace pipe', 'Seal and test'],
    },
  })

  await prisma.statusHistory.create({
    data: {
      workOrderId: workOrder1.id,
      status: 'PENDING',
      updatedById: user1.id,
      comments: 'Awaiting approval.',
    },
  })

  console.log('✅ Seeding complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
