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
      title: "Desarrollador full-stack, todo lo que sé lo aprendí construyendo cosas reales.",
      description:
        "Soy Jose Miguel Molina, desarrollador full-stack autodidacta, aprendí resolviendo problemas reales en vez de ejercicios de clase, y hoy eso se traduce en aplicaciones completas, pensadas para que quien las use no tenga que pensárselo dos veces.",
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
        "Aprendo mejor construyendo que estudiando, siempre ha sido así, cada aplicación que he hecho nació de un problema real que necesitaba existir, no de un ejercicio de práctica.",
      body:
        "Esto cambia la forma en que te enfrentas al código. No vale con que funcione “más o menos”, tiene que funcionar de verdad para alguien que lo va a usar de verdad. Con el tiempo, eso se convirtió en mi forma de trabajar: primero entiendo bien el problema, luego levanto una base sólida y, sobre todo, me aseguro de que la experiencia final sea clara y fácil de usar.",
      quickFacts: [
        { label: "Ubicación", value: "Mallorca, España" },
        { label: "Idiomas", value: "Español nativo · Inglés avanzado" },
        { label: "Enfoque", value: "Producto + backend + UX" },
      ],
    },
    stack: {
      heading: "Tecnologías",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Supabase", "REST APIs"],
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
          es: "Nació de ver cómo empresas de reparto llevaban todo a mano, Excel, llamadas, WhatsApp. Construí una plataforma para centralizarlo: gestión de pedidos, rutas optimizadas, panel operativo completo y seguimiento en tiempo real tanto para el cliente como para el conductor.",
          en: "It started from seeing how delivery businesses were handling everything by hand, Excel, calls, WhatsApp. I built a platform to bring it all together: order management, optimized routes, a complete operations dashboard, and live tracking for both the customer and the driver.",
        },
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
        features: {
          es: [
            "Gestión completa de pedidos, desde que el cliente lo crea hasta que se entrega.",
            "Rutas calculadas por distancia y tiempos reales, no asignadas a ojo.",
            "Un panel para llevar flota, operaciones y KPIs del negocio sin saltar entre herramientas.",
            "Cliente y conductor ven la ruta y el estado del pedido en vivo, sin tener que llamar.",
            "App móvil pensada para el conductor en plena ruta: clara, directa, sin distracciones.",
          ],
          en: [
            "Complete order management, from the moment the customer creates it until delivery.",
            "Routes calculated by distance and real-time conditions, not assigned by guesswork.",
            "A single dashboard to manage fleet, operations and business KPIs without jumping between tools.",
            "Customers and drivers can see the route and order status live without calling anyone.",
            "A mobile app built for drivers on the road: clear, direct, and distraction-free.",
          ],
        },
      },
      {
        id: "micoche",
        name: "Micoche.es",
        status: "MVP en marcha",
        blurb: {
          es: "Buscar coche de segunda mano en España suele ser scrollear anuncios aburridos uno a uno, sin saber si merece la pena parar a mirar. Micoche.es lo plantea distinto: una experiencia tipo swipe para descubrir coches de un vistazo, con toda la info clave a mano y un flujo de publicación pensado para que vender el tuyo no sea un dolor de cabeza.",
          en: "Looking for a second-hand car in Spain usually means endlessly scrolling through dull listings one by one, without knowing whether it is worth stopping to look at. Micoche.es does it differently: a swipe-style experience to discover cars at a glance, with all the key information in hand and a publishing flow designed so selling yours is not a headache.",
        },
        stack: ["React Native", "Expo", "TypeScript", "Supabase"],
        features: {
          es: [
            "Descubre coches con swipe, tipo match, en vez de listas interminables que hay que revisar una a una.",
            "Chat integrado entre comprador y vendedor, con notificaciones al momento para no perder ninguna conversación.",
            "Publicar un anuncio es rápido: hasta con OCR para sacar los datos de la matrícula automáticamente.",
            "Favoritos y alertas para avisarte en cuanto aparezca el coche que estás buscando.",
            "Perfiles de usuario y autenticación propia, pensados para dar confianza entre comprador y vendedor.",
          ],
          en: [
            "Discover cars with a swipe, match-style flow instead of endless lists you have to review one by one.",
            "Built-in chat between buyer and seller, with instant notifications so you never miss a conversation.",
            "Publishing an ad is fast, even with OCR to extract registration details automatically.",
            "Favorites and alerts to let you know as soon as the car you want appears.",
            "User profiles and built-in authentication designed to create trust between buyer and seller.",
          ],
        },
      },
      {
        id: "mercado-nipon",
        name: "Mercado Nipón",
        status: "Marketplace en crecimiento",
        blurb: {
          es: "Un e-commerce de verdad, no una demo de productos japoneses (snacks, ingredientes, belleza) con todo lo que necesita una tienda para funcionar en serio, pagos reales, facturas, seguimiento de envío y un panel de admin desde el que gestionarlo todo sin tocar código.",
          en: "A real e-commerce platform, not a demo of Japanese products (snacks, ingredients, beauty) with everything a store needs to work properly: real payments, invoices, shipping tracking and an admin panel to manage it all without touching code.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
        features: {
          es: [
            "Catálogo con categorías, filtros y búsqueda pensado para encontrar el producto rápido.",
            "Checkout completo con pagos reales: Redsys, PayPal, Bizum y transferencia.",
            "Pedidos con seguimiento y factura en PDF generada automáticamente.",
            "Favoritos, reseñas y valoraciones para que la compra genere confianza.",
            "Panel de administración propio para gestionar productos, pedidos, cupones y ofertas sin depender de nadie.",
          ],
          en: [
            "Catalog with categories, filters and search built to help people find products quickly.",
            "Full checkout with real payments: Redsys, PayPal, Bizum and bank transfer.",
            "Orders with tracking and automatic PDF invoice generation.",
            "Favorites, reviews and ratings to build trust in the buying experience.",
            "Own admin panel to manage products, orders, coupons and offers without depending on anyone.",
          ],
        },
      },
      {
        id: "qrapido",
        name: "QRapido",
        status: "Producto validado y en crecimiento",
        blurb: {
          es: "Empezó como la idea de quitarle al restaurante la carta de papel, y acabó siendo un sistema completo de operación: el cliente pide desde el móvil escaneando un QR, cocina ve el pedido al instante, el camarero gestiona mesas y cobros, y el dueño lleva todo el negocio desde un panel con soporte para varios restaurantes a la vez.",
          en: "It started as the idea of replacing the paper menu in a restaurant, and ended up becoming a complete operating system: the customer orders from their phone by scanning a QR code, the kitchen sees the order instantly, the waiter manages tables and payments, and the owner runs the whole business from a dashboard with support for multiple restaurants at once.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        features: {
          es: [
            "El cliente escanea, pide y paga desde el móvil, con extras y división de cuenta incluidos.",
            "Cocina recibe cada pedido en tiempo real, con fotos y alérgenos, y marca los platos según van saliendo.",
            "El camarero controla mesas, pedidos y cobros desde un panel pensado para el ritmo de un servicio real.",
            "Panel de administración para menú, personal, caja y reportes del restaurante.",
            "Preparado como SaaS multi-restaurante: suscripciones con Stripe y gestión centralizada de varios locales.",
          ],
          en: [
            "The customer scans, orders and pays from their phone, with extras and bill splitting included.",
            "The kitchen receives each order in real time, with photos and allergens, and marks dishes as they come out.",
            "The waiter manages tables, orders and payments from a dashboard designed for the pace of real service.",
            "Admin panel for menu, staff, cash and restaurant reports.",
            "Built as a multi-restaurant SaaS: Stripe subscriptions and centralized management for several locations.",
          ],
        },
      },
      {
        id: "aparcaya",
        name: "AparcaYA",
        status: "App móvil funcional",
        blurb: {
          es: "Esta salió de la rabia de dar vueltas y vueltas buscando aparcamiento en Palma sin encontrar nada. AparcaYA funciona como un parking social, cuando alguien deja una plaza, la comparte, y la app la marca en el mapa al instante para que otro conductor cercano la pille antes de que desaparezca. Se calcula la ruta y el tiempo estimado de llegada, así que no vas a ciegas, sabes si merece la pena ir a por ella o seguir buscando.",
          en: "This came out of the frustration of circling around Palma looking for parking without finding anything. AparcaYA works like a social parking system: when someone leaves a space, they share it, and the app marks it on the map instantly so another nearby driver can grab it before it disappears. The route and ETA are calculated so you are not driving blind; you know whether it is worth going for it or continuing to look.",
        },
        stack: ["React Native", "Expo", "Supabase", "PostGIS", "Mapbox"],
        features: {
          es: [
            "Plazas que aparecen y desaparecen del mapa en tiempo real, según lo que comparten otros usuarios.",
            "Ruta y ETA calculados con Mapbox hasta la plaza más cercana, no un mapa estático.",
            "Sistema de Karma para premiar a quien comparte plazas, no solo a quien las busca.",
            "Notificaciones y geofencing para avisarte si hay una plaza libre cerca de donde vas.",
            "Pensada para decidir en dos segundos desde el coche, sin distraerte del volante.",
          ],
          en: [
            "Spaces appear and disappear on the map in real time based on what other users share.",
            "Routes and ETA are calculated with Mapbox to the nearest available space, not a static map.",
            "A karma system rewards people who share parking spaces, not just those who look for them.",
            "Notifications and geofencing to alert you when there is a free space near your route.",
            "Designed to help you decide in under two seconds from inside the car, without distracting you from driving.",
          ],
        },
      },
    ] as Project[],
    contact: {
      heading: "Contacto",
      methods: [
        { label: "Email", href: "mailto:j.molim@proton.me" },
      ],
      cv: {
        label: "Currículum Vitae",
        href: "/cv.pdf",
        cta: "Descargar CV",
      },
      cta: "Contactar",
    },
    footer: {
      text: "Hecho con Next.js, TypeScript y un enfoque muy práctico.",
      email: "j.molim@proton.me",
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
      title: "Full-stack developer, everything I know I learned by building real things.",
      description:
        "I’m Jose Miguel Molina, a self-taught full-stack developer. I learned by solving real problems instead of classroom exercises, and today that translates into complete applications designed so the people using them never have to think twice.",
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
        "I learn better by building than by studying. It has always been that way: every app I’ve made came from a real problem that needed to exist, not from a practice exercise.",
      body:
        "This changes the way you approach code. It’s not enough for it to work “more or less”; it has to work properly for someone who is actually going to use it. Over time, that became my way of working: first I understand the problem well, then I build a solid foundation and, above all, I make sure the final experience is clear and easy to use.",
      quickFacts: [
        { label: "Location", value: "Mallorca, Spain" },
        { label: "Languages", value: "Spanish native · English advanced" },
        { label: "Focus", value: "Product + backend + UX" },
      ],
    },
    stack: {
      heading: "Technologies",
      groups: [
        {
          title: "Frontend",
          items: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
        },
        {
          title: "Backend",
          items: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Supabase", "REST APIs"],
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
          es: "Nació de ver cómo empresas de reparto llevaban todo a mano, Excel, llamadas, WhatsApp. Construí una plataforma para centralizarlo: gestión de pedidos, rutas optimizadas, panel operativo completo y seguimiento en tiempo real tanto para el cliente como para el conductor.",
          en: "It started from seeing how delivery businesses were handling everything by hand, Excel, calls, WhatsApp. I built a platform to bring it all together: order management, optimized routes, a complete operations dashboard, and live tracking for both the customer and the driver.",
        },
        stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Next.js"],
        features: {
          es: [
            "Gestión completa de pedidos, desde que el cliente lo crea hasta que se entrega.",
            "Rutas calculadas por distancia y tiempos reales, no asignadas a ojo.",
            "Un panel para llevar flota, operaciones y KPIs del negocio sin saltar entre herramientas.",
            "Cliente y conductor ven la ruta y el estado del pedido en vivo, sin tener que llamar.",
            "App móvil pensada para el conductor en plena ruta: clara, directa, sin distracciones.",
          ],
          en: [
            "Complete order management, from the moment the customer creates it until delivery.",
            "Routes calculated by distance and real-time conditions, not assigned by guesswork.",
            "A single dashboard to manage fleet, operations and business KPIs without jumping between tools.",
            "Customers and drivers can see the route and order status live without calling anyone.",
            "A mobile app built for drivers on the road: clear, direct, and distraction-free.",
          ],
        },
      },
      {
        id: "micoche",
        name: "Micoche.es",
        status: "MVP in motion",
        blurb: {
          es: "Buscar coche de segunda mano en España suele ser scrollear anuncios aburridos uno a uno, sin saber si merece la pena parar a mirar. Micoche.es lo plantea distinto: una experiencia tipo swipe para descubrir coches de un vistazo, con toda la info clave a mano y un flujo de publicación pensado para que vender el tuyo no sea un dolor de cabeza.",
          en: "Looking for a second-hand car in Spain usually means endlessly scrolling through dull listings one by one, without knowing whether it is worth stopping to look at. Micoche.es does it differently: a swipe-style experience to discover cars at a glance, with all the key information in hand and a publishing flow designed so selling yours is not a headache.",
        },
        stack: ["React Native", "Expo", "TypeScript", "Supabase"],
        features: {
          es: [
            "Descubre coches con swipe, tipo match, en vez de listas interminables que hay que revisar una a una.",
            "Chat integrado entre comprador y vendedor, con notificaciones al momento para no perder ninguna conversación.",
            "Publicar un anuncio es rápido: hasta con OCR para sacar los datos de la matrícula automáticamente.",
            "Favoritos y alertas para avisarte en cuanto aparezca el coche que estás buscando.",
            "Perfiles de usuario y autenticación propia, pensados para dar confianza entre comprador y vendedor.",
          ],
          en: [
            "Discover cars with a swipe, match-style flow instead of endless lists you have to review one by one.",
            "Built-in chat between buyer and seller, with instant notifications so you never miss a conversation.",
            "Publishing an ad is fast, even with OCR to extract registration details automatically.",
            "Favorites and alerts to let you know as soon as the car you want appears.",
            "User profiles and built-in authentication designed to create trust between buyer and seller.",
          ],
        },
      },
      {
        id: "mercado-nipon",
        name: "Mercado Nipón",
        status: "Marketplace growing",
        blurb: {
          es: "Un e-commerce de verdad, no una demo de productos japoneses (snacks, ingredientes, belleza) con todo lo que necesita una tienda para funcionar en serio, pagos reales, facturas, seguimiento de envío y un panel de admin desde el que gestionarlo todo sin tocar código.",
          en: "A real e-commerce platform, not a demo of Japanese products (snacks, ingredients, beauty) with everything a store needs to work properly: real payments, invoices, shipping tracking and an admin panel to manage it all without touching code.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
        features: {
          es: [
            "Catálogo con categorías, filtros y búsqueda pensado para encontrar el producto rápido.",
            "Checkout completo con pagos reales: Redsys, PayPal, Bizum y transferencia.",
            "Pedidos con seguimiento y factura en PDF generada automáticamente.",
            "Favoritos, reseñas y valoraciones para que la compra genere confianza.",
            "Panel de administración propio para gestionar productos, pedidos, cupones y ofertas sin depender de nadie.",
          ],
          en: [
            "Catalog with categories, filters and search built to help people find products quickly.",
            "Full checkout with real payments: Redsys, PayPal, Bizum and bank transfer.",
            "Orders with tracking and automatic PDF invoice generation.",
            "Favorites, reviews and ratings to build trust in the buying experience.",
            "Own admin panel to manage products, orders, coupons and offers without depending on anyone.",
          ],
        },
      },
      {
        id: "qrapido",
        name: "QRapido",
        status: "Validated product with early traction",
        blurb: {
          es: "Empezó como la idea de quitarle al restaurante la carta de papel, y acabó siendo un sistema completo de operación: el cliente pide desde el móvil escaneando un QR, cocina ve el pedido al instante, el camarero gestiona mesas y cobros, y el dueño lleva todo el negocio desde un panel con soporte para varios restaurantes a la vez.",
          en: "It started as the idea of replacing the paper menu in a restaurant, and ended up becoming a complete operating system: the customer orders from their phone by scanning a QR code, the kitchen sees the order instantly, the waiter manages tables and payments, and the owner runs the whole business from a dashboard with support for multiple restaurants at once.",
        },
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        features: {
          es: [
            "El cliente escanea, pide y paga desde el móvil, con extras y división de cuenta incluidos.",
            "Cocina recibe cada pedido en tiempo real, con fotos y alérgenos, y marca los platos según van saliendo.",
            "El camarero controla mesas, pedidos y cobros desde un panel pensado para el ritmo de un servicio real.",
            "Panel de administración para menú, personal, caja y reportes del restaurante.",
            "Preparado como SaaS multi-restaurante: suscripciones con Stripe y gestión centralizada de varios locales.",
          ],
          en: [
            "The customer scans, orders and pays from their phone, with extras and bill splitting included.",
            "The kitchen receives each order in real time, with photos and allergens, and marks dishes as they come out.",
            "The waiter manages tables, orders and payments from a dashboard designed for the pace of real service.",
            "Admin panel for menu, staff, cash and restaurant reports.",
            "Built as a multi-restaurant SaaS: Stripe subscriptions and centralized management for several locations.",
          ],
        },
      },
      {
        id: "aparcaya",
        name: "AparcaYA",
        status: "Functional mobile app",
        blurb: {
          es: "Esta salió de la rabia de dar vueltas y vueltas buscando aparcamiento en Palma sin encontrar nada. AparcaYA funciona como un parking social, cuando alguien deja una plaza, la comparte, y la app la marca en el mapa al instante para que otro conductor cercano la pille antes de que desaparezca. Se calcula la ruta y el tiempo estimado de llegada, así que no vas a ciegas, sabes si merece la pena ir a por ella o seguir buscando.",
          en: "This came out of the frustration of circling around Palma looking for parking without finding anything. AparcaYA works like a social parking system: when someone leaves a space, they share it, and the app marks it on the map instantly so another nearby driver can grab it before it disappears. The route and ETA are calculated so you are not driving blind; you know whether it is worth going for it or continuing to look.",
        },
        stack: ["React Native", "Expo", "Supabase", "PostGIS", "Mapbox"],
        features: {
          es: [
            "Plazas que aparecen y desaparecen del mapa en tiempo real, según lo que comparten otros usuarios.",
            "Ruta y ETA calculados con Mapbox hasta la plaza más cercana, no un mapa estático.",
            "Sistema de Karma para premiar a quien comparte plazas, no solo a quien las busca.",
            "Notificaciones y geofencing para avisarte si hay una plaza libre cerca de donde vas.",
            "Pensada para decidir en dos segundos desde el coche, sin distraerte del volante.",
          ],
          en: [
            "Spaces appear and disappear on the map in real time based on what other users share.",
            "Routes and ETA are calculated with Mapbox to the nearest available space, not a static map.",
            "A karma system rewards people who share parking spaces, not just those who look for them.",
            "Notifications and geofencing to alert you when there is a free space near your route.",
            "Designed to help you decide in under two seconds from inside the car, without distracting you from driving.",
          ],
        },
      },
    ] as Project[],
    contact: {
      heading: "Contact",
      methods: [
        { label: "Email", href: "mailto:j.molim@proton.me" },
      ],
      cv: {
        label: "Curriculum Vitae",
        href: "/cv.pdf",
        cta: "Download CV",
      },
      cta: "Contact",
    },
    footer: {
      text: "Built with Next.js, TypeScript and a hands-on product mindset.",
      email: "j.molim@proton.me",
    },
  },
} as const;

export const defaultLocale: Locale = "es";
export const storageKey = "jose-portfolio-language";
