'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
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
import { useTranslations } from 'next-intl';
import { getContactFormSchema } from '@/lib/contact-form.schema';
import { GetContactFormValues } from '@/lib/contact-form.schema';

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

type FormProps = {
  closeDialog: () => void;
};

const ConsultationForm: React.FC<FormProps> = ({ closeDialog }) => {
  const dialog = useTranslations('Dialog');

  const form = useForm<GetContactFormValues>({
    resolver: zodResolver(getContactFormSchema(dialog)),
    defaultValues: {
      username: '',
      phone: '',
    },
  });

  function onSubmit(data: GetContactFormValues) {
    console.log('consultation', data);
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
              <FormLabel>{dialog('nameLabel')}</FormLabel>
              <FormControl>
                <Input placeholder={dialog('namePlaceholder')} {...field} />
              </FormControl>
              <FormDescription>{dialog('nameDescription')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dialog('phoneLabel')}</FormLabel>
              <FormControl>
                <Input placeholder={dialog('phonePlaceholder')} {...field} />
              </FormControl>

              <FormDescription>{dialog('phoneDescription')}</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{dialog('button')}</Button>
      </form>
    </Form>
  );
};

export default ConsultationForm;
