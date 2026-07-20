import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cixdgmsbijyrclbibwar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpeGRnbXNiaWp5cmNsYmlid2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0ODc2MjIsImV4cCI6MjEwMDA2MzYyMn0.He98eBzqSXE8EoT0ukoV5Zwnq73EM4m3DE0r2IaVvMM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
