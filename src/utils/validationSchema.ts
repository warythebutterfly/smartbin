import { string, object, InferType } from "yup";

export const contactFormSchema = object({
  name: string().required(),
  email: string().email().required(),
  country: string().required(),
  city: string().required(),
  phone: string().required(),
  subject: string().required(),
  message: string().required(),
}).required();

export type ContactFormFields = InferType<typeof contactFormSchema>;
