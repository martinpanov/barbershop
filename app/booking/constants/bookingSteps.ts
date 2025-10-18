import { SERVICES } from "../../constants/services";
import {
  barberSchema,
  locationSchema,
  serviceSchema,
} from "../utils/validation";

export const LOCATIONS = [
  { value: "2100 PALOS VERDES DR LOMITA CA", image: "/barbershop-outside.jpg" },
  {
    value: "9500 SAINT ANDREWS DR SANTEE CA",
    image: "/barbershop-outside.jpg",
  },
];

export const BARBERS = [
  { value: "Michael", image: "/barber1.jpg" },
  { value: "Josh", image: "/barber2.jpg" },
  { value: "Mitchel", image: "/barber3.jpg" },
];

export const BOOKING_STEP_CONFIG = [
  {
    id: 1,
    title: "Choose Location",
    items: LOCATIONS,
    formKey: "location" as const,
    validationSchema: locationSchema,
    className: "flex flex-col items-center gap-5 p-5",
  },
  {
    id: 2,
    title: "Choose Barber",
    items: BARBERS,
    formKey: "barberName" as const,
    validationSchema: barberSchema,
    className: "flex flex-col items-center gap-5 p-5",
  },
  {
    id: 3,
    title: "Choose Service",
    items: SERVICES,
    formKey: "service" as const,
    validationSchema: serviceSchema,
    className: "grid grid-cols-2 gap-3 p-5",
  },
];
