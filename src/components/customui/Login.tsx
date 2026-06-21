"use client";

import { registerAtom } from "@/lib/atom";
import { loginSchema, LoginSchemaType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { Fingerprint, Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../shadcnui/button";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";

const Login = () => {
  const register = useAtomValue(registerAtom);

  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const handleLogin = async (login: LoginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const emailMatch = login.email === register.email;
    const passwordMatch = login.password === register.password;

    if (emailMatch && passwordMatch) {
      toast.success(`Login successful,${register.fullName} 👋🏻!`);
      loginForm.reset();
      return;
    }

    if (!emailMatch && !passwordMatch) {
      toast.error("Invalid email and password!");
      return;
    }

    if (!emailMatch) {
      toast.error("Invalid email!");
    }

    if (!passwordMatch) {
      toast.error("Invalid password!");
    }
  };

  return (
    <form
      onSubmit={loginForm.handleSubmit(handleLogin)}
      className="grid gap-4">
      <Controller
        name="email"
        control={loginForm.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email</FieldLabel>

            <Input
              {...field}
              type="email"
              placeholder="Enter your email"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={loginForm.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Password</FieldLabel>

            <Input
              {...field}
              type="password"
              placeholder="Enter your password"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        className="cursor-pointer"
        disabled={loginForm.formState.isSubmitting}>
        {loginForm.formState.isSubmitting ?
          <>
            <Loader className="animate-spin" />
            Submitting
          </>
        : <>
            <Fingerprint />
            Login
          </>
        }
      </Button>
    </form>
  );
};

export default Login;
