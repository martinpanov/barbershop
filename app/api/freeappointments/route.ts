import { NextResponse } from "next/server";

import { getBarber } from "@/prisma/barber";

type MadeAppointments = Record<string, string[]>;

export async function POST(request: Request) {
  try {
    const bodyData = await request.json();
    const barber = await getBarber(bodyData.barberName);
    const allAppointments = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
    const madeAppointments = barber.madeAppointments as MadeAppointments | null;
    const busyAppointment = madeAppointments?.[bodyData.date];

    if (!busyAppointment || busyAppointment.length === 0) {
      return NextResponse.json({ data: allAppointments }, { status: 200 });
    }

    const freeAppointments = allAppointments.filter((appointment) => !busyAppointment.includes(appointment));

    return NextResponse.json({ data: freeAppointments }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}