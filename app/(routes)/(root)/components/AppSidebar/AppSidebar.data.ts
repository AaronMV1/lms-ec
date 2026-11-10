

import { BookOpen, ChartArea, GraduationCap, Home, Settings2, SquareTerminal, ShieldCheck } from "lucide-react";

export const routes = [

    {
        title: "Inicio",
        url: "/",
        icon: Home
    },
    {
        title: "Cursos",
        url: "/courses",
        icon: SquareTerminal
    },
    {
        title: "Mis Cursos",
        url: "/my-courses",
        icon: BookOpen
    },
    {
        title: "Validar certificados",
        url: "/validacion",
        icon: ShieldCheck
    },
    {
        title: "Ajustes",
        url: "/settings",
        icon: Settings2
    }

]

export const routesTeacher = [

    {
        title: "Cursos",
        url: "/teacher",
        icon: GraduationCap
    },
    {
        title: "Analíticas",
        url: "/teacher/analytics",
        icon: ChartArea
    },

]