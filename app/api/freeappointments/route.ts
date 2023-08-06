import { getBarber } from "@/prisma/barber";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const bodyData = await request.json();

        const barber = await getBarber(bodyData.barberName);

        const allAppointments = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

        //@ts-ignore
        if (!barber.madeAppointments?.[bodyData.date] ?? undefined) {
            return NextResponse.json({ data: allAppointments }, { status: 200 });
        }

        //@ts-ignore
        const busyAppointments = barber.madeAppointments[bodyData.date];

        const freeAppointments = allAppointments.filter(appointment => !busyAppointments.includes(appointment));

        return NextResponse.json({ data: freeAppointments }, { status: 200 });
    } catch (error) {
        console.log(error);
    }
}