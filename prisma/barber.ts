import { prisma } from "@/lib/db/prisma";

export async function getBarber(barberName: string) {
  try {
    const barber = await prisma.barber.findFirst({
      where: {
        name: barberName,
      },
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

export async function updateBarber(
  barberId: string,
  madeAppointments: any,
  date: string,
  time: string
) {
  try {
    let newAppointmentsData;

    if (!madeAppointments.hasOwnProperty(date)) {
      return await prisma.barber.update({
        where: {
          id: barberId,
        },
        data: { madeAppointments: { ...(madeAppointments || {}), [date]: [time] } },
      });
    }

    if (madeAppointments.hasOwnProperty(date) && madeAppointments[date].includes(time)) {
      throw Error;
    }

    newAppointmentsData = { ...madeAppointments };
    newAppointmentsData[date].push(time);

    await prisma.barber.update({
      where: {
        id: barberId,
      },
      data: { madeAppointments: newAppointmentsData },
    });
  } catch (error: any) {
    error.updateBarber = true;
    throw error;
  }
}
