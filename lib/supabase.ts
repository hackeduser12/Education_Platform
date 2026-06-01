import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

export type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
};

export function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseKey, 
    // {
    // realtime: {
      // transport: WebSocket,
    // },
  // }
);
}

export async function getCourses(): Promise<Course[]> {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase error:", error.message);
    throw new Error(error.message);
  }

  return data ?? [];
}
