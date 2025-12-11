import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gdicjbthsluyfgbhxrsp.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkaWNqYnRoc2x1eWZnYmh4cnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0NzU2MjQsImV4cCI6MjA4MTA1MTYyNH0.02sqSMNSIJ-DOCpeVmiOii5CFQlOrSqJs63LqrDUtIo";
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
