import { RegisterFormData } from "@/app/auth/(auth)/sign-up/_components/register-form/register-form";
import { api } from "@/libs/axios/axios";

export async function emailAlreadyExists(email: string): Promise<boolean> {
  try {
    const response = await api.get("/user");
    const dbData: RegisterFormData[] = await response.data;
    const exists = dbData.some((userData) => userData.email === email);
    return exists;
  } catch (error) {
    console.error("Error checking if email exists:", error);
    return false;
  }
}

export async function getUserById(userId: string) {
  try {
    const response = await api.get("/user");
    const dbData: RegisterFormData[] = await response.data;
    return dbData.find((users) => users.id === userId);
  } catch (error) {
    console.error("Error checking if email exists:", error);
  }
}

export async function getUserByEmail(email: string) {
  try {
    const response = await api.get("/user");
    const dbData: RegisterFormData[] = await response.data;
    return dbData.find((users) => users.email === email);
  } catch (error) {
    console.error("Error checking if email exists:", error);
  }
}
