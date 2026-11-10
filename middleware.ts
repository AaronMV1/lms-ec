

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

// 1. Definimos la ruta de inicio de sesión como pública
const isPublicRoute = createRouteMatcher([
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/courses(.*)",
    "/cursos/:courseSlug",
    "/curso/:id",
    "/validacion(.*)"
])

export default clerkMiddleware(async (auth, req) => {
    // 2. Si la ruta NO es pública, protegemos el acceso automáticamente
    if (!isPublicRoute(req)) {
        await auth.protect()
    }
})

export const config = {

    matcher: [
        // Ejecuta el middleware en todas las rutas excepto en archivos estáticos e internos (_next)
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)",
        // Siempre ejecuta Clerk para las rutas de API o trpc
        "/(api|trpc)(.*)",
    ],

}
