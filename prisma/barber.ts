import { prisma } from "@/lib/db/prisma";

export default async function getBarber(barberName: string) {
    return await prisma.barber.findFirst({
        where: {
            name: barberName
        }
    });
}