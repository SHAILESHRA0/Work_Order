import { db } from '../db/db.js';

export const hodController = {
    async getWorkOrders(req, res) {
        try {
            const workOrders = await db.workOrder.findMany({
                include: {
                    engineer: {
                        select: {
                            name: true,
                            department: true
                        }
                    },
                    tasks: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            const formattedWorkOrders = workOrders.map(wo => ({
                workOrderId: wo.id,
                title: wo.title,
                department: wo.engineer.department,
                engineer: wo.engineer.name,
                status: wo.status,
                priority: wo.priority,
                createdAt: wo.createdAt,
                tasks: wo.tasks,
                completionPercentage: calculateCompletion(wo.tasks)
            }));

            res.json(formattedWorkOrders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

function calculateCompletion(tasks) {
    if (!tasks?.length) return 0;
    const completed = tasks.filter(t => t.status === 'completed').length;
    return Math.round((completed / tasks.length) * 100);
}
