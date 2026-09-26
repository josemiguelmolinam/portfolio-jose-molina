# Jose Miguel Molina | Portfolio

Portfolio profesional de Jose Miguel Molina como desarrollador full-stack, construido con Next.js, TypeScript y Tailwind CSS.

## Tecnologías

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- SEO y accesibilidad básicos

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Despliegue en Vercel

1. Haz push de este repositorio a GitHub.
2. Entra en Vercel y selecciona "Add New Project".
3. Importa el repositorio.
4. Vercel detectará automáticamente Next.js y usará la configuración correcta.
5. En la sección de Build & Development Settings, deja estos valores por defecto:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Haz deploy.

## Dominio propio

1. En Vercel, ve a la pestaña "Domains".
2. Añade tu dominio personalizado.
3. Configura los registros DNS del proveedor según lo indicado por Vercel.
4. Espera la propagación DNS y valida el dominio.

## Personalización

Los textos principales, stack y proyectos están centralizados en:

- `lib/content.ts`
- `components/portfolio-page.tsx`

Si quieres cambiar datos personales, proyectos o idioma, edita esos archivos.
