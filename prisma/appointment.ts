import { prisma } from "@/lib/db/prisma";
import { Appointment } from "@prisma/client";
import getBarber from "./barber";


export type FormData = Omit<Appointment, 'id' | 'barberId'> & { barberName: string; };;

export async function createAppointment(formData: FormData) {
    try {
        const barber = await getBarber(formData.barberName);

        const appointment = await prisma.appointment.create({
            data: {
                ...formData,
                barber: { connect: { id: barber?.id } }
            },
        });

        return appointment;
    } catch (error: any) {
        if (error.getBarber) {
            throw new Error("Failed to find Barber");
        }

        throw new Error('Failed to create appointment');
    }
}