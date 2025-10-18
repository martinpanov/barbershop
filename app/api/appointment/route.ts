import { NextResponse } from "next/server";
import * as yup from "yup";

import { createAppointment } from "@/prisma/appointment";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));

    const validationSchema = yup.object().shape({
      location: yup.string().required("Location is required"),
      barberName: yup.string().required("Barber name is required"),
      service: yup.string().required("Service is required"),
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      phoneNumber: yup.string().required("Phone number is required"),
      date: yup
        .date()
        .min(today, "Date cannot be older than today")
        .max(maxDate, "Date cannot be older than one month from today")
        .required("Date is required"),
      time: yup.string().required("Time is required"),
    });

    await validationSchema.validate(formData, { abortEarly: false });

    const newAppointment = await createAppointment(formData);

    return NextResponse.json({ data: newAppointment }, { status: 200 });
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const errors = error.inner.reduce(
        (acc: any, error: any) => ({
          ...acc,
          [error.path]: error.message,
        }),
        {}
      );
      return NextResponse.json({ errors }, { status: 400 });
    }

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
