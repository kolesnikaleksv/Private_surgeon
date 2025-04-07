import z from 'zod';

export const getContactFormSchema = (d?: (key: string) => string) => {
  return z.object({
    username: z
      .string()
      .min(2, {
        message: d ? d('required') : 'Username must be at least 2 characters.',
      })
      .max(20, {
        message: d ? d('max20') : 'Username must be less than 20 characters.',
      }),
    phone: z
      .string()
      .refine(
        (value) => /^[+]{1}(?:[0-9-()/.]\s?){11,14}[0-9]{1}$/.test(value),
        {
          message: d ? d('invalid') : 'Invalid phone number format.',
        }
      ),
  });
};

export type GetContactFormValues = z.infer<
  Awaited<ReturnType<typeof getContactFormSchema>>
>;
