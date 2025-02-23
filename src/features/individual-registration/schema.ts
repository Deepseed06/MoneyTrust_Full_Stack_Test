import {z} from 'zod';

export const individualRegistrationSchema = z.object({
  firstName: z.string()
  .nonempty({ message: 'First name is required' })
  .refine((value) => !/^\d/.test(value), {
    message: 'First name should not start with a number',
  }),
  lastName: z.string()
  .nonempty({ message: 'Last name is required' })
  .refine((value) => !/^\d/.test(value), {
    message: 'Last name should not start with a number',
  }),
  email: z.string()
  .nonempty({ message: 'Email is required' })
  .email({ message: 'Email address is incorrect' }),
  password: z.string().min(6).max(255),   
  confirmPassword: z.string().min(6).max(255),    
  phoneNumber: z.string()
    .nonempty({ message: 'Phone number is required' })
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number must be at most 15 digits' })
    .refine((value) => /^[0-9]+$/.test(value), {
      message: 'Phone number must contain only digits',
    }),
    code: z.string().max(6).min(6)
});     

export type IndividualRegistrationInput = z.infer<typeof individualRegistrationSchema>;