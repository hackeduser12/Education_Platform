import { getCourses } from "@/lib/supabase";
import CoursesClient from "./CoursesClient";
import CourseErrorFallback from "./CourseErrorFallback";

export default async function CoursesGrid() {
  try {
    const courses = await getCourses();
    return <CoursesClient courses={courses} />;
  } catch {
    return <CourseErrorFallback />;
  }
}
