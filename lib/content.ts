export type Locale = "es" | "en";

export type StackCategory = {
  title: string;
  items: string[];
};

export type Project = {
  id: string;
  name: string;
  status: string;
  blurb: {
    es: string;
    en: string;
  };
  stack: string[];
  features: {
    es: string[];
    en: string[];
  };
};

export const content = {
  es: {
    nav: [
      { label: "Sobre mí", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Proyectos", href: "#projects" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      eyebrow: "Disponible para proyectos",
      title: "Desarrollo productos desde la lógica hasta la interfaz.",
      description:
        "Soy Jose Miguel Molina. Trabajo como desarrollador full-stack con una forma de hacer las cosas bastante práctica: entiendo el problema, construyo la base, y cuido que la experiencia final sea útil y fácil de usar.",
      ctaPrimary: "Contactar",
      ctaSecondary: "Ver GitHub",
      stats: [
        { value: "+4", label: "apps creadas" },
        { value: "2023", label: "inicio como dev" },
        { value: "Mallorca", label: "ubicación" },
      ],
    },
    about: {
      heading: "Sobre mí",
      intro:
        "Empecé en programación con un bootcamp que no me dio la base que necesitaba. Así que aprendí construyendo: resolviendo problemas reales, mejorando procesos y buscando soluciones que realmente funcionen.",
      body:
        "Hoy trabajo entre producto y desarrollo. Me interesa entender la necesidad, definir una estructura clara y construirla bien, sin perder de vista que al final importa cómo funciona para la gente que lo usa.",
      quickFacts: [
        { label: "Ubicación", value: "Mallorca, España" },
        { label: "Idiomas", value: "Español nativo · Inglés avanzado" },
        { label: "Enfoque", value: "Producto + backend + UX" },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
        },
        {
          title: "Backend",
          items: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "REST APIs"],
        },
        {
          title: "Infraestructura",
          items: ["Vercel", "Mapbox", "PostGIS", "Docker", "GitHub", "CI/CD"],
        },
      ] as StackCategory[],
    },
    projects: [
      {
        id: "logistic-ai",
        name: "Logistic-AI",
        status: "Backend listo · Frontend en desarrollo",
        blurb: {
          es: "Plataforma para optimizar rutas de reparto con IA, panel operativo y seguimiento real para clientes y conductores.",
          en: "Platform for optimizing delivery routes with AI, an operations dashboard, and live tracking for clients and drivers.",
        },
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
        features: {
          es: [
            "Planificación inteligente de rutas con coste y tiempos reales.",
            "Panel para gestionar flotas, operaciones y KPIs del negocio.",
            "Seguimiento en tiempo real para clientes y rutas activas.",
            "App móvil para que la ejecución de la ruta sea más clara y directa.",
          ],
          en: [
            "Smart route planning based on live operational data and delivery windows.",
            "Dashboard for managing fleets, operations and business KPIs.",
            "Live route tracking for both clients and active deliveries.",
            "Mobile companion app that makes route execution more straightforward.",
          ],
        },
      },
      {
        id: "micoche",
        name: "Micoche.es",
        status: "MVP en marcha",
        blurb: {
          es: "Marketplace para comprar y vender coches con una experiencia pensada para móvil y una navegación rápida y clara.",
          en: "Used-car marketplace built around a simple mobile-first experience and fast, clear discovery.",
        },
        stack: ["React Native", "Expo", "TypeScript", "Supabase"],
        features: {
          es: [
            "Listado y filtros para buscar coches de forma rápida.",
            "Detalle del anuncio con fotos, precio, kilometraje y datos clave.",
            "Flujo para contactar directamente con el vendedor desde la app.",
            "Diseño centrado en la conversión y la experiencia móvil.",
          ],
          en: [
            "Vehicle listings with quick search and useful filtering.",
            "Ad details with photos, price, mileage and the key specs that matter.",
            "Direct seller contact flow built into the experience.",
            "Mobile-first layout focused on conversion and usability.",
          ],
        },
      },
      {
        id: "mercado-nipon",
        name: "Mercado Nipón",
        status: "Marketplace en crecimiento",
        blurb: {
          es: "Marketplace de productos japoneses con catálogo, recomendaciones y una compra muy visual, clara y fácil de usar en móvil.",
          en: "Marketplace for Japanese products with a visual catalog, recommendations and a purchase flow designed to feel simple on mobile.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
        features: {
          es: [
            "Catálogo visual con categorías y productos bien presentados.",
            "Experiencia de compra pensada para navegación móvil y conversión.",
            "Estructura escalable para más categorías y nuevos productos.",
            "Diseño orientado a comunicar valor de forma rápida y reducir fricción.",
          ],
          en: [
            "Visual catalog with categories and product presentation built for quick browsing.",
            "Purchase flow designed to feel smooth and clear on mobile.",
            "Scalable structure ready for more categories and product growth.",
            "Design focused on communicating value quickly and reducing friction.",
          ],
        },
      },
      {
        id: "qrapido",
        name: "QRapido",
        status: "Producto validado y en crecimiento",
        blurb: {
          es: "Menús digitales con QR para restaurantes: sin apps, sin papel y con actualizaciones rápidas desde la web.",
          en: "QR-based digital menus for restaurants: no app required, no printed menus, and fast updates from the web.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        features: {
          es: [
            "Menús accesibles por QR con cambios instantáneos.",
            "Experiencia rápida y ligera para locales con mucho movimiento.",
            "Sin instalación de app ni dependencia de material impreso.",
            "Panel sencillo para gestionar categorías, precios y disponibilidad.",
          ],
          en: [
            "QR-based menus with instant changes and zero friction for diners.",
            "Fast, lightweight experience for busy restaurants and high-volume service.",
            "No app installation required and no printed materials to manage.",
            "Simple admin area for categories, pricing and availability.",
          ],
        },
      },
      {
        id: "aparcaya",
        name: "AparcaYA",
        status: "App móvil funcional",
        blurb: {
          es: "Aplicación de parking en tiempo real para Palma que detecta plazas libres a partir de señales colaborativas de otros usuarios.",
          en: "Real-time parking app for Palma that detects open spaces using collaborative signals from other users.",
        },
        stack: ["React Native", "Expo", "Supabase", "PostGIS", "Mapbox"],
        features: {
          es: [
            "Detección de plazas libres a partir de señales colaborativas.",
            "Mapa con ETA y guía para llegar al parking más cercano.",
            "Disponibilidad en tiempo real con filtros por zona y precio.",
            "Experiencia mobile-first pensada para decidir rápido.",
          ],
          en: [
            "Free-space detection using collaborative user signals.",
            "Map view with ETA and guidance to the nearest parking option.",
            "Real-time availability with filters by area and price.",
            "Mobile-first experience designed for quick decisions on the move.",
          ],
        },
      },
    ] as Project[],
    contact: {
      heading: "Contacto",
      methods: [
        { label: "Email", value: "j.molim@proton.me", href: "mailto:j.molim@proton.me" },
        { label: "Teléfono", value: "+34 684 417 307", href: "tel:+34684417307" },
        { label: "LinkedIn", value: "linkedin.com/in/jose-molina-morales", href: "https://www.linkedin.com/in/jose-molina-morales/" },
        { label: "GitHub", value: "github.com/josemiguelmolinam", href: "https://github.com/josemiguelmolinam" },
      ],
      cta: "Copiar contacto",
    },
    footer: {
      text: "Hecho con Next.js, TypeScript y un enfoque muy práctico.",
    },
  },
  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#stack" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Available for projects",
      title: "I build products from the logic layer to the interface.",
      description:
        "I’m Jose Miguel Molina. I work as a full-stack developer with a practical approach: I understand the problem, build the foundation, and make sure the final experience is useful and easy to use.",
      ctaPrimary: "Contact me",
      ctaSecondary: "View GitHub",
      stats: [
        { value: "4", label: "apps built" },
        { value: "2023", label: "dev journey" },
        { value: "Mallorca", label: "location" },
      ],
    },
    about: {
      heading: "About me",
      intro:
        "I started in programming with a bootcamp that didn’t give me the grounding I needed. So I learned by building: solving real problems, improving processes and creating things that actually work in practice.",
      body:
        "Today I work between product and development. I care about understanding the need, shaping a clear structure and building it well, without losing sight of how it feels for the people using it.",
      quickFacts: [
        { label: "Location", value: "Mallorca, Spain" },
        { label: "Languages", value: "Spanish native · English advanced" },
        { label: "Focus", value: "Product + backend + UX" },
      ],
    },
    stack: {
      heading: "Stack",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
        },
        {
          title: "Backend",
          items: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Supabase", "REST APIs"],
        },
        {
          title: "Infrastructure",
          items: ["Vercel", "Mapbox", "PostGIS", "Docker", "GitHub", "CI/CD"],
        },
      ] as StackCategory[],
    },
    projects: [
      {
        id: "logistic-ai",
        name: "Logistic-AI",
        status: "Backend ready · Frontend in progress",
        blurb: {
          es: "Plataforma para optimizar rutas de reparto con IA, panel operativo y seguimiento real para clientes y conductores.",
          en: "Platform for optimizing delivery routes with AI, an operations dashboard, and live tracking for clients and drivers.",
        },
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
        features: {
          es: [
            "Planificación inteligente de rutas con coste y tiempos reales.",
            "Panel para gestionar flotas, operaciones y KPIs del negocio.",
            "Seguimiento en tiempo real para clientes y rutas activas.",
            "App móvil para que la ejecución de la ruta sea más clara y directa.",
          ],
          en: [
            "Smart route planning based on live operational data and delivery windows.",
            "Dashboard for managing fleets, operations and business KPIs.",
            "Live route tracking for both clients and active deliveries.",
            "Mobile companion app that makes route execution more straightforward.",
          ],
        },
      },
      {
        id: "micoche",
        name: "Micoche.es",
        status: "MVP in motion",
        blurb: {
          es: "Marketplace para comprar y vender coches con una experiencia pensada para móvil y una navegación rápida y clara.",
          en: "Used-car marketplace built around a simple mobile-first experience and fast, clear discovery.",
        },
        stack: ["React Native", "Expo", "TypeScript", "Supabase"],
        features: {
          es: [
            "Listado y filtros para buscar coches de forma rápida.",
            "Detalle del anuncio con fotos, precio, kilometraje y datos clave.",
            "Flujo para contactar directamente con el vendedor desde la app.",
            "Diseño centrado en la conversión y la experiencia móvil.",
          ],
          en: [
            "Vehicle listings with quick search and useful filtering.",
            "Ad details with photos, price, mileage and the key specs that matter.",
            "Direct seller contact flow built into the experience.",
            "Mobile-first layout focused on conversion and usability.",
          ],
        },
      },
      {
        id: "mercado-nipon",
        name: "Mercado Nipón",
        status: "Marketplace growing",
        blurb: {
          es: "Marketplace de productos japoneses con catálogo, recomendaciones y una compra muy visual, clara y fácil de usar en móvil.",
          en: "Marketplace for Japanese products with a visual catalog, recommendations and a purchase flow designed to feel simple on mobile.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
        features: {
          es: [
            "Catálogo visual con categorías y productos bien presentados.",
            "Experiencia de compra pensada para navegación móvil y conversión.",
            "Estructura escalable para más categorías y nuevos productos.",
            "Diseño orientado a comunicar valor de forma rápida y reducir fricción.",
          ],
          en: [
            "Visual catalog with categories and product presentation built for quick browsing.",
            "Purchase flow designed to feel smooth and clear on mobile.",
            "Scalable structure ready for more categories and product growth.",
            "Design focused on communicating value quickly and reducing friction.",
          ],
        },
      },
      {
        id: "qrapido",
        name: "QRapido",
        status: "Validated product with early traction",
        blurb: {
          es: "Menús digitales con QR para restaurantes: sin apps, sin papel y con actualizaciones rápidas desde la web.",
          en: "QR-based digital menus for restaurants: no app required, no printed menus, and fast updates from the web.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        features: {
          es: [
            "Menús accesibles por QR con cambios instantáneos.",
            "Experiencia rápida y ligera para locales con mucho movimiento.",
            "Sin instalación de app ni dependencia de material impreso.",
            "Panel sencillo para gestionar categorías, precios y disponibilidad.",
          ],
          en: [
            "QR-based menus with instant changes and zero friction for diners.",
            "Fast, lightweight experience for busy restaurants and high-volume service.",
            "No app installation required and no printed materials to manage.",
            "Simple admin area for categories, pricing and availability.",
          ],
        },
      },
      {
        id: "aparcaya",
        name: "AparcaYA",
        status: "Functional mobile app",
        blurb: {
          es: "Aplicación de parking en tiempo real para Palma que detecta plazas libres a partir de señales colaborativas de otros usuarios.",
          en: "Real-time parking app for Palma that detects open spaces using collaborative signals from other users.",
        },
        stack: ["React Native", "Expo", "Supabase", "PostGIS", "Mapbox"],
        features: {
          es: [
            "Detección de plazas libres a partir de señales colaborativas.",
            "Mapa con ETA y guía para llegar al parking más cercano.",
            "Disponibilidad en tiempo real con filtros por zona y precio.",
            "Experiencia mobile-first pensada para decidir rápido.",
          ],
          en: [
            "Free-space detection using collaborative user signals.",
            "Map view with ETA and guidance to the nearest parking option.",
            "Real-time availability with filters by area and price.",
            "Mobile-first experience designed for quick decisions on the move.",
          ],
        },
      },
    ] as Project[],
    contact: {
      heading: "Contact",
      methods: [
        { label: "Email", value: "j.molim@proton.me", href: "mailto:j.molim@proton.me" },
        { label: "Phone", value: "+34 684 417 307", href: "tel:+34684417307" },
        { label: "LinkedIn", value: "linkedin.com/in/jose-molina-morales", href: "https://www.linkedin.com/in/jose-molina-morales/" },
        { label: "GitHub", value: "github.com/josemiguelmolinam", href: "https://github.com/josemiguelmolinam" },
      ],
      cta: "Copy contact",
    },
    footer: {
      text: "Built with Next.js, TypeScript and a hands-on product mindset.",
    },
  },
} as const;

export const defaultLocale: Locale = "es";
export const storageKey = "jose-portfolio-language";
