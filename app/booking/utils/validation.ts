import { toast } from "sonner";
import * as yup from "yup";

// Single validation function for the currently mounted step
let currentStepValidation: (() => Promise<boolean>) | null = null;

const today = new Date();
today.setHours(0, 0, 0, 0);

export const validate = async (
  schema: any,
  data: any
): Promise<{ isValid: boolean; fieldErrors: Record<string, boolean> }> => {
  try {
    await schema.validate(data, { abortEarly: false });
    return { isValid: true, fieldErrors: {} };
  } catch (error: any) {
    if (error.errors?.length > 2) {
      toast.error("Please fill in the required fields", { duration: 4000 });
    } else {
      error.errors?.forEach((err: string) =>
        toast.error(err, { duration: 4000 })
      );
    }

    const fieldErrors: Record<string, boolean> = {};
    error.inner?.forEach((err: any) => {
      if (err.path) {
        fieldErrors[err.path] = true;
      }
    });

    return { isValid: false, fieldErrors };
  }
};

export const registerValidation = (fn: () => Promise<boolean>) => {
  currentStepValidation = fn;
};

export const unregisterValidation = () => {
  currentStepValidation = null;
};

export const validateStep = async () => {
  return currentStepValidation ? await currentStepValidation() : true;
};

export const formSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  date: yup
    .date()
    .min(today, "Date cannot be older than today")
    .max(
      new Date(new Date().setMonth(new Date().getMonth() + 1)),
      "Date cannot be older than one month from today"
    )
    .required("Date is required"),
  time: yup.string().required("Time is required"),
});

export const locationSchema = yup.string().required("Please choose a location");

export const barberSchema = yup.string().required("Please choose a barber");

export const serviceSchema = yup.string().required("Please choose a service");
