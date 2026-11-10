import CourseCatalog from "@/components/education/CourseCatalog";
import { EducationHero } from "@/components/education/EducationHero";
import { EducationPublicFooter } from "@/components/education/EducationPublicFooter";
import "@/components/education/education-landing.css";
export default function Page(){return <><EducationHero/><section id="sectioncourses"><CourseCatalog hideBanner/></section><EducationPublicFooter/></>}
