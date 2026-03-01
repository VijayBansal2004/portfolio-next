"use client";

import React from "react";
import { Block } from "@/components/block";
import { Heading } from "@/components/heading";
import { Para } from "@/components/para";
import { NativeMagnetic } from "@/components/ui/native-magnetic-shadcnui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";
type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    mode: "onChange",
  });

  const formSubmit = async (data: ContactFormValues) => {
    const promise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      if (!res.ok) {
        throw new Error("Failed to send");
      }
      return res.json();
    });

    toast.promise(promise, {
      loading: "Sending message...",
      success: () => {
        reset();
        return "Message sent successfully 🚀";
      },
      error: "Something went wrong. Please try again.",
    });
  };

  return (
    <div>
      <Block className="mt-0 border-0 pt-0 shadow-none">
        <Heading>Contact Me</Heading>
        <Para className="max-w-lg pt-4 text-sm md:text-base">
          If you have any questions or inquiries, please feel free to contact
          me.
        </Para>
      </Block>

      <Block>
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="mx-auto flex max-w-lg flex-col gap-6"
        >
          {/* Name */}
          <InputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Tyler Durden"
              {...register("name", {
                required: "Please enter your name!",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]{3,}$/,
                  message:
                    "Name must contain only letters and be at least 3 characters!",
                },
              })}
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </InputContainer>

          {/* Email */}
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="tyler.durden@outlook.com"
              {...register("email", {
                required: "Please enter your email!",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address!",
                },
              })}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </InputContainer>

          {/* Message */}
          <InputContainer>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message here..."
              {...register("message", {
                required: "Please enter your message!",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters!",
                },
              })}
            />
            {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
          </InputContainer>

          {/* Submit Button */}

          <SubmitBtn disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderIcon className="animate-spin text-white" />
            ) : (
              "Submit"
            )}
          </SubmitBtn>
        </form>
      </Block>
    </div>
  );
};

export const InputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-col gap-2", className)}
    >
      {children}
    </motion.div>
  );
};

export const Label = ({
  children,
  ...rest
}: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      {...rest}
      className="text-vj-secondary dark:text-vj-secondary-dark text-sm font-medium tracking-tight"
    >
      {children}
    </label>
  );
};

export const Input = ({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...rest}
      className="text-vj-primary dark:text-vj-primary-dark rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:border-neutral-600 dark:focus:ring-neutral-600"
    />
  );
};

export const Textarea = ({
  ...rest
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...rest}
      rows={4}
      className="text-vj-primary dark:text-vj-primary-dark resize-none rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-neutral-400 focus:outline-none dark:border-neutral-600 dark:focus:ring-neutral-600"
    />
  );
};

export const ErrorText = ({ children }: { children?: React.ReactNode }) => {
  if (!children) return null;
  return <p className="text-sm text-red-500">{children}</p>;
};

export function SubmitBtn({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) {
  return (
    <NativeMagnetic className="w-full">
      <Button
        type="submit"
        className={cn("w-full cursor-pointer", className)}
        {...props}
      >
        {children}
      </Button>
    </NativeMagnetic>
  );
}

export default ContactPage;
