import { createAppointment } from "@/prisma/appointment";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        const newAppointment = await createAppointment(formData);

        return NextResponse.json({ data: newAppointment }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}