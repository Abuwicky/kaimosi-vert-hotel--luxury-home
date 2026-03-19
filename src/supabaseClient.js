import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzsjuuxbxkrqbyhcasmi.supabase.co"; // From your Supabase project
const supabaseAnonKey = "sb_publishable_xrXhcBYT86o23TyHJxcrcg_a5NQ3MeD"; // From your Supabase project

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
