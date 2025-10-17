import { Appointment } from "@prisma/client";

import { prisma } from "@/lib/db/prisma";

import { getBarber, updateBarber } from "./barber";

export type FormData = Omit<Appointment, "id" | "barberId"> & {
  barberName: string;
};

export async function createAppointment(formData: FormData) {
  try {
    const barber = await getBarber(formData.barberName);

    await updateBarber(
      barber.id,
      barber.madeAppointments,
      formData.date,
      formData.time
    );

    const appointment = await prisma.appointment.create({
      data: {
        ...formData,
        barber: { connect: { id: barber?.id } },
      },
    });

    return appointment;
  } catch (error: any) {
    if (error.getBarber) {
      throw new Error("Failed to find Barber");
    }

    if (error.updateBarber) {
      throw new Error("Failed to update Barber");
    }

    throw new Error("Failed to create appointment");
  }
}
