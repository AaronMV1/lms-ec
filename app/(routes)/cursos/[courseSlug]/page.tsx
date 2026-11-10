import {getCourse} from "@/lib/courses";
import CourseDetail from "@/components/education/CourseDetail";
import {notFound} from "next/navigation";
export default async function Page({params}:{params:Promise<{courseSlug:string}>}){const {courseSlug}=await params;const course=getCourse(courseSlug);if(!course)notFound();return <CourseDetail course={course}/>;}
