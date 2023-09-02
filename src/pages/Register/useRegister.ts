import { useMutation } from "@tanstack/react-query";
import { db } from "@/lib/db";
import { AuthError } from "@supabase/supabase-js";

export type RegisterSchemaType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const register = async ({ email, password }: RegisterSchemaType) => {
  const { data, error } = await db.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};

export default function useRegister() {
  return useMutation(register, {
    cacheTime: 0,
    onError: (error: AuthError) => {
      throw new Error(error.message);
    },
  });
}
