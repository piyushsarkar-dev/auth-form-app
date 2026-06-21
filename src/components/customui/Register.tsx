"use client";

import { registerAtom } from "@/lib/atom";
import { registerSchema, RegisterSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSetAtom } from "jotai";
import { Loader, UserRoundPlus } from "lucide-react";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

export const metadata: Metadata = {
  title: "Register | Auth Form App",
  description: "Register page of Auth Form App",
};

const Register = () => {
  const setRegister = useSetAtom(registerAtom);
  const { push } = useRouter();

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handleRegister = async (data: RegisterSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setRegister(data);
    reset();
    push("/");
  };

  return (
    <form
      className="grid gap-2"
      noValidate
      onSubmit={handleSubmit(handleRegister)}>
      <Controller
        name="fullName"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Full Name</FieldLabel>

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Full Name"
              autoComplete="name"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email Address</FieldLabel>

            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Enter Your Email Address"
              autoComplete="email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>

            <Input
              {...field}
              type="password"
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Generate Your Password"
              autoComplete="new-password"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="cursor-pointer"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <Loader className="animate-spin" />
            Submitting
          </>
        : <>
            <UserRoundPlus />
            Register
          </>
        }
      </Button>
    </form>
  );
};

export default Register;
