# Migración Angular → Next.js

Se conservaron `app/layout.tsx`, `AppSidebar`, `Navbar`, `Footer`, Clerk y los componentes shadcn existentes.

## Incorporado
- Catálogo con búsqueda, filtros y cuatro cursos de Angular.
- Fichas de cursos, resultados de aprendizaje y contacto WhatsApp.
- Aula con tres videos y evaluación de ejemplo.
- Inscripción de demostración y listado de mis cursos mediante localStorage (no persiste entre dispositivos).
- Validación de formato de certificados (no hay API de verificación en Angular).
- Imágenes de la aplicación original.
- Redirecciones de rutas Angular originales.

## Pendiente para producción
- Base de datos y API para cursos, matrículas, progreso y certificados.
- Vincular las matrículas al usuario autenticado de Clerk.
- Reemplazar videos de muestra por contenido real.
- Implementar verificación de certificados con backend.
- Probar Clerk con claves de entorno del propietario.

## Ejecución
`npm install` y `npm run dev`. Configurar las variables de Clerk según el README original.


## Actualización: Hero y Footer público
Se replicó el Hero de Angular en la portada `/` con su imagen, iconos, texto, botón de desplazamiento y métricas. Se replicó el Footer público con logos, redes, sedes y enlaces de contacto. El Footer compartido original de Next.js permanece intacto. Las rutas de cursos, autenticación y layout se conservaron.

## Actualización: acceso público a los detalles de cursos
- `/courses`, `/cursos/[courseSlug]`, `/curso/[id]` y `/validacion` son públicos en Clerk middleware.
- El botón de inscripción solicita iniciar sesión si el visitante no está autenticado, y vuelve al detalle después de iniciar sesión.
- La inscripción demo continúa sin cobro; se almacena por usuario de Clerk en el navegador (localStorage).
- El aula requiere sesión autenticada desde el servidor. Para producción, verificar también matrícula/pago en el servidor antes de entregar contenido.
- No se implementó pasarela de pago porque no hay integración de Stripe ni precios transaccionales configurados.
