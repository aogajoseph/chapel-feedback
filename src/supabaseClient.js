import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ufgitaysjcyzqciewliu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZ2l0YXlzamN5enFjaWV3bGl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2OTUxMzMsImV4cCI6MjA1NzI3MTEzM30.2zVmSiz6JVOBZaOxVMvcDqPoXYuCv8BJzO7HJUNdb5w";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
