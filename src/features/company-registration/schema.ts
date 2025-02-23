import {z} from 'zod';

export const corporateRegistrationSchema = z.object({
  companyName: z.string()
  .nonempty({ message: 'Company name is required' }),
  business: z.string(),
  email: z.string()
  .nonempty({ message: 'Email is required' })
  .email({ message: 'Email address is incorrect' }),
  password: z.string().min(6).max(255),   
  confirmPassword: z.string().min(6).max(255),    
    code: z.string().max(4).min(4)
    .refine((value) => /^[0-9]+$/.test(value), {
        message: 'Phone number must contain only digits',
      }),
});     

export type corporateRegistrationInput = z.infer<typeof corporateRegistrationSchema>;