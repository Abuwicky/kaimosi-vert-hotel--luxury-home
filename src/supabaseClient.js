import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hzsjuuxbxkrqbyhcasmi.supabase.co"; // From your Supabase project
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6c2p1dXhieGtycWJ5aGNhc21pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MTg2NDYsImV4cCI6MjA4OTQ5NDY0Nn0.E7wI7o43fvCB3EbWKE6Q-qYr7OKZLpdR4C-p1RdhAhY"; // From your Supabase project

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
