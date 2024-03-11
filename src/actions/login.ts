"use server";

import { LoginFormData } from "@/app/auth/(auth)/sign-in/components/login-form/login-form";

export const login = (data: LoginFormData) => {
    console.log(data);
};
