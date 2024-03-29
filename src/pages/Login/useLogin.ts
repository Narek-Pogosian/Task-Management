import { useMutation } from "@tanstack/react-query";
import { db } from "@/lib/db";
import { AuthError } from "@supabase/supabase-js";

export type LoginSchemaType = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginSchemaType) => {
  const { data, error } = await db.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};

export default function useLogin() {
  return useMutation(login, {
    cacheTime: 0,
    onError: (error: AuthError) => {
      throw new Error(error.message);
    },
  });
}
