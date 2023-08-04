import { prisma } from "@/lib/db/prisma";

export default async function getBarber(barberName: string) {
    try {
        const barber = await prisma.barber.findFirst({
            where: {
                name: barberName
            }
        });

        if (!barber) {
            throw Error;
        }

        return barber;
    } catch (error: any) {
        error.getBarber = true;
        throw error;
    }
}