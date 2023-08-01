import { prisma } from "@/lib/db/prisma";
import { Appointment } from "@prisma/client";

export type FormData = Appointment;

export async function createAppointment(formData: FormData) {
    const appointment = await prisma.appointment.create({
        data: formData
    });

    return appointment;
}