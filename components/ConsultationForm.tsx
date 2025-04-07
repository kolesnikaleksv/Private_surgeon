'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: 'Username must be at least 2 characters.',
    })
    .max(50),
  phone: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){11,14}[0-9]{1}$/.test(value), {
      message: 'Invalid phone number format.',
    }),
});

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

type FormProps = {
  closeDialog: () => void;
};

const ConsultationForm: React.FC<FormProps> = ({ closeDialog }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('consultation', values);
    wait()
      .then((res) => console.log(res))
      .then(closeDialog);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="Type your phone number" {...field} />
              </FormControl>
              <FormDescription>This is your phone number.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ConsultationForm;
