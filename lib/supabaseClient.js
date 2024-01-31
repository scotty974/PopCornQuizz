import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://zqrwhjvkhwbasevsokak.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcndoanZraHdiYXNldnNva2FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY2MDcwNjcsImV4cCI6MjAyMjE4MzA2N30.roKr0J4NsLyHKLYJc1aPug5qlP4Zs6QP9ZbmVxsCQeQ"
const supabase = createClient(supabaseUrl, supabaseKey)

 export default supabase