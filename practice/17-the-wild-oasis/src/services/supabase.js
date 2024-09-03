import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lwcnaxjpnmtwubcbdyuk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Y25heGpwbm10d3ViY2JkeXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjEzNTIsImV4cCI6MjA0MDQzNzM1Mn0.KVSjUpwv6wzQbmXStRpFUdmugNLdQllmSc35bO6lsmE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
