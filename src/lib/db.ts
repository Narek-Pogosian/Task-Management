import { Database } from "@/lib/types/db.types";
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL!;
const anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY!;
export const db = createClient<Database>(url, anon_key);
