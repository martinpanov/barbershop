import { createAppointment } from "@/prisma/appointment";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        debugger;
        const formData = await request.json();

        const newAppointment = await createAppointment(formData);

        return NextResponse.json({ data: newAppointment }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}