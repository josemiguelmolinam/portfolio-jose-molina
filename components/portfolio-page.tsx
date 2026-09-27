"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { content, defaultLocale, storageKey, type Locale, type Project } from "@/lib/content";

const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function LanguageToggle({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 p-1">
      <button
        type="button"
        onClick={() => onChange("es")}
        aria-label="Cambiar a Español"
        className={`flex items-center justify-center rounded-full p-1.5 transition-all ${
          locale === "es" 
            ? "bg-[#2a3036] shadow-sm ring-1 ring-[#f3b84d]/40" 
            : "opacity-50 hover:opacity-100 hover:bg-white/5"
        }`}
      >
        <img src="https://flagcdn.com/w40/es.png" width="22" height="15" alt="Español" className="rounded-[2px] object-cover" />
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-label="Switch to English"
        className={`flex items-center justify-center rounded-full p-1.5 transition-all ${
          locale === "en" 
            ? "bg-[#2a3036] shadow-sm ring-1 ring-[#f3b84d]/40" 
            : "opacity-50 hover:opacity-100 hover:bg-white/5"
        }`}
      >
        <img src="https://flagcdn.com/w40/gb.png" width="22" height="15" alt="English" className="rounded-[2px] object-cover" />
      </button>
    </div>
  );
}

function ProjectVisual({ projectId, onImageClick }: { projectId: string; onImageClick?: (index: number) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75; 
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  switch (projectId) {
    case "logistic-ai":
      return (
        <div className="relative h-full min-h-[200px] w-full overflow-hidden bg-[#0d1316] sm:min-h-[220px] lg:min-h-[240px]">
          <Image
            src="/logistic-ai.png"
            alt="Logistic-AI project preview"
            fill
            className="object-cover object-left"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-0"/>
        </div>
      );
    case "aparcaya":
      return (
        <div className="group relative h-full min-h-[200px] w-full overflow-hidden bg-[#0d1316] sm:min-h-[220px] lg:min-h-[240px]">
          <Image
            src="/aparcaya-mockup.jpg"
            alt="Aparcaya project preview"
            fill
            className="object-cover object-center transition-all duration-700 ease-in-out group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-0"/>
        </div>
      );
    case "micoche":
      return (
        <div className="relative flex h-full min-h-[200px] w-full items-center justify-center overflow-hidden bg-[#0d1316] sm:min-h-[220px] lg:min-h-[240px]">
          <div ref={scrollRef} className="flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-14 py-4 [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center gap-4 sm:gap-6">
              {[
                "/micoche-2.jpg",
                "/micoche-3.jpg",
                "/micoche-4.jpg",
                "/micoche-5.jpg",
                "/micoche-8.png",
                "/micoche-6.jpg",
                "/micoche-7.jpg",
                "/micoche-1.jpg",
              ].map((src, idx) => (
                <div 
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); onImageClick?.(idx); }}
                  className="relative aspect-[9/19.5] h-[170px] shrink-0 snap-center overflow-hidden rounded-[1rem] border-[3px] border-[#1f262a] bg-black shadow-2xl transition-transform hover:scale-[1.02] sm:h-[190px] lg:h-[210px] cursor-zoom-in"
                >
                  <Image
                    src={src}
                    alt={`Micoche mobile screenshot ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90px, 110px"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Subtle gradient fades for the edges to indicate scrollability */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0d1316] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0d1316] to-transparent sm:w-24" />
          
          {/* Navigation Buttons */}
          <button
            onClick={(e) => scroll('left', e)}
            className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:left-4 sm:h-10 sm:w-10"
            aria-label="Anterior captura"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button
            onClick={(e) => scroll('right', e)}
            className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 sm:right-4 sm:h-10 sm:w-10"
            aria-label="Siguiente captura"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      );
    case "qrapido":
      return (
        <div className="relative h-full min-h-[200px] w-full overflow-hidden bg-[#0d1316] sm:min-h-[220px] lg:min-h-[240px]">
          <Image
            src="/Qrapido.png"
            alt="QRapido product preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-0"/>
        </div>
      );
    case "mercado-nipon":
      return (
        <div className="relative h-full min-h-[200px] w-full overflow-hidden bg-[#0d1316] sm:min-h-[220px] lg:min-h-[240px]">
          <Image
            src="/mercado-nipon.png"
            alt="Mercado Nipón product preview"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-0"/>
        </div>
      );
    default:
      return null;
  }
}

// Map of project id → image src for lightbox
const projectImages: Record<string, string[]> = {
  "logistic-ai": ["/logistic-ai.png"],
  "qrapido": ["/Qrapido.png"],
  "mercado-nipon": ["/mercado-nipon.png"],
  "micoche": [
    "/micoche-2.jpg",
    "/micoche-3.jpg",
    "/micoche-4.jpg",
    "/micoche-5.jpg",
    "/micoche-8.png",
    "/micoche-6.jpg",
    "/micoche-7.jpg",
    "/micoche-1.jpg",
  ],
};

function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const features = project.features[locale];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = projectImages[project.id] || [];
  const hasLightbox = images.length > 0;
  const currentImgSrc = images[currentImgIndex];
  const compactStatus =
    project.id === "logistic-ai"
      ? locale === "es"
        ? "Backend · Frontend"
        : "Backend · Frontend"
      : project.status;

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => { 
      if (e.key === "Escape") closeLightbox(); 
      if (e.key === "ArrowLeft" && images.length > 1) {
        setCurrentImgIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
      }
      if (e.key === "ArrowRight" && images.length > 1) {
        setCurrentImgIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
      }
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, images.length]);

  return (
    <>
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="panel flex h-full flex-col overflow-hidden bg-[#0d1316]/90"
    >
      <div className="border-b border-white/10 bg-[#10171a]/90 p-4 sm:p-5">
        <div className="flex w-full items-center justify-between gap-2">
          <span className="mono min-w-0 truncate text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3b84d] sm:text-[11px]">{project.name}</span>

          {project.id === "aparcaya" ? (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#facc15]/35 bg-[#facc15]/10 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.14em] text-[#facc15] animate-pulse whitespace-nowrap sm:text-[7.5px]">
              <FontAwesomeIcon icon={faPersonDigging} style={{ color: "#f3b84d", width: "11px", height: "11px" }} />
              {locale === "es" ? "En proceso" : "In progress"}
            </span>
          ) : (
            <span className="inline-flex shrink-0 items-center rounded-full border border-[#f3b84d]/35 bg-[#f3b84d]/8 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.14em] text-[#f7d69a] whitespace-nowrap sm:text-[7.5px]">
              {compactStatus}
            </span>
          )}
        </div>
      </div>
      <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
        <div className="space-y-5">
          <div className="space-y-3">
            <h3 className="text-[clamp(1.6rem,4vw,2.2rem)] font-semibold leading-[1.04] tracking-[-0.06em] text-[#f5f1ea]">{project.name}</h3>
            <p className="text-base leading-7 text-[#c8c2bb] sm:text-[1.02rem]">{project.blurb[locale]}</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#141b1d] px-2.5 py-1.5"
              >
                <span className="flex h-4 w-4 items-center justify-center text-[#f3b84d]">{techIcon(item, "sm")}</span>
                <span className="text-[9px] uppercase tracking-[0.14em] text-[#e8e2dc]">{item}</span>
              </span>
            ))}
          </div>
          <ul className="space-y-3 text-[0.98rem] leading-7 text-[#ded8d1]">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#f3b84d]" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`h-full overflow-hidden rounded-xl border border-white/8 bg-[#0d1316] ${hasLightbox && project.id !== 'micoche' ? "cursor-zoom-in" : ""}`}
          onClick={() => {
            if (hasLightbox && project.id !== 'micoche') {
              setCurrentImgIndex(0);
              setLightboxOpen(true);
            }
          }}
          title={hasLightbox && project.id !== 'micoche' ? "Click para ampliar" : undefined}
        >
          <ProjectVisual 
            projectId={project.id} 
            onImageClick={(idx) => { 
              setCurrentImgIndex(idx); 
              setLightboxOpen(true); 
            }} 
          />
        </div>
      </div>
    </motion.article>

    {/* ── Lightbox ─────────────────────────────── */}
    <AnimatePresence>
      {lightboxOpen && currentImgSrc && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close button at top right of the screen */}
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Cerrar imagen"
            className="absolute right-4 top-4 sm:right-8 sm:top-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md shadow-lg transition-all hover:scale-105 hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          <motion.div
            key="lightbox-img"
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex max-h-[90vh] max-w-[92vw] flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={currentImgSrc}
                alt={`${project.name} preview`}
                width={1400}
                height={900}
                className="block max-h-[90vh] w-auto object-contain"
                priority
              />
            </div>
            
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => (prev > 0 ? prev - 1 : images.length - 1)); }}
                  className="absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/90"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(prev => (prev < images.length - 1 ? prev + 1 : 0)); }}
                  className="absolute -right-12 sm:-right-16 top-1/2 -translate-y-1/2 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/90"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentImgIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/40'}`} />
                  ))}
                </div>
              </>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}


function techIcon(name: string, size: "sm" | "md" = "md"): React.ReactNode {
  const cls = size === "sm" ? "block h-4 w-4 shrink-0" : "block h-5 w-5 shrink-0";
  switch (name) {
    case "Next.js":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-label="Next.js">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.052.54-.052.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      );
    case "React":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-label="React">
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
          <circle cx="12" cy="12" r="1.8" fill="#61DAFB"/>
        </svg>
      );
    case "React Native":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" aria-label="React Native">
          <rect x="1" y="3" width="13" height="18" rx="2" stroke="#61DAFB" strokeWidth="1.2"/>
          <ellipse cx="7.5" cy="12" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="7.5" cy="12" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 7.5 12)"/>
          <ellipse cx="7.5" cy="12" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 7.5 12)"/>
          <circle cx="7.5" cy="12" r="1.1" fill="#61DAFB"/>
          <circle cx="19" cy="7" r="3" fill="#61DAFB" opacity="0.85"/>
          <path d="M18 7h2M19 6v2" stroke="#0b0d0f" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );
    case "TypeScript":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-label="TypeScript">
          <rect width="24" height="24" rx="3" fill="#3178C6"/>
          <path fill="#fff" d="M13.11 15.574v1.733c.281.144.614.253.999.327.384.074.79.111 1.217.111.415 0 .808-.042 1.177-.126a2.87 2.87 0 0 0 .965-.406 2.01 2.01 0 0 0 .656-.727c.162-.303.243-.665.243-1.086 0-.3-.044-.563-.133-.789a1.947 1.947 0 0 0-.378-.612 2.906 2.906 0 0 0-.59-.48 6.245 6.245 0 0 0-.763-.392 8.2 8.2 0 0 1-.543-.258 2.49 2.49 0 0 1-.37-.247.964.964 0 0 1-.213-.272.647.647 0 0 1-.07-.306c0-.1.022-.19.065-.273a.595.595 0 0 1 .192-.214.972.972 0 0 1 .312-.139 1.58 1.58 0 0 1 .42-.05c.113 0 .232.008.357.026.126.017.252.045.38.085.127.04.25.09.368.151.119.06.228.13.326.209v-1.62a4.127 4.127 0 0 0-.845-.215 6.3 6.3 0 0 0-.976-.07c-.41 0-.797.046-1.163.137a2.82 2.82 0 0 0-.952.425 2.051 2.051 0 0 0-.645.742c-.158.303-.237.66-.237 1.073 0 .532.143.981.429 1.348.286.367.72.674 1.302.922.214.092.412.183.593.272.18.09.334.182.462.277.128.095.228.2.3.314a.694.694 0 0 1 .11.38c0 .106-.02.201-.062.286a.554.554 0 0 1-.186.218 1.006 1.006 0 0 1-.322.142 1.735 1.735 0 0 1-.46.055c-.299 0-.592-.054-.878-.163a3.293 3.293 0 0 1-.805-.44zM9.5 13.05H11.5v-1.3H6v1.3h2v6.2h1.5v-6.2z"/>
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={cls} viewBox="0 0 128 128" aria-label="JavaScript">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
          <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
        </svg>
      );
    case "Tailwind":
    case "Tailwind CSS":
      return (
        <svg className={cls} viewBox="0 0 128 128" aria-label="Tailwind CSS">
          <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/>
        </svg>
      );
    case "Framer Motion":
      return (
        <svg className="block h-5.5 w-5.5 shrink-0" viewBox="0 0 128 128" aria-label="Framer Motion">
          <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z" fill="#ffffff"/>
        </svg>
      );
    case "Node.js":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-label="Node.js">
          <path fill="#539E43" d="M11.998 24a2.04 2.04 0 0 1-1.014-.27l-3.22-1.916c-.482-.27-.246-.365-.087-.42.641-.223.77-.274 1.452-.663.072-.04.166-.025.24.017l2.475 1.472c.09.048.216.048.298 0l9.654-5.576c.09-.05.147-.154.147-.26V7.614c0-.11-.057-.21-.15-.265L12.14 1.78a.302.302 0 0 0-.297 0L2.192 7.35a.307.307 0 0 0-.154.265v11.15c0 .106.058.21.155.26l2.645 1.53c1.435.717 2.313-.128 2.313-.977V8.475c0-.156.124-.278.28-.278h1.22c.153 0 .278.122.278.278v11.103c0 1.912-1.042 3.01-2.855 3.01-.557 0-.997 0-2.224-.605L1.01 20.49A2.047 2.047 0 0 1 0 18.73V7.614c0-.726.386-1.4 1.01-1.764l9.654-5.58a2.1 2.1 0 0 1 2.025 0l9.654 5.58A2.047 2.047 0 0 1 24 7.614V18.73c0 .725-.387 1.4-1.01 1.763l-9.654 5.578a2.04 2.04 0 0 1-1.013.27l-.325-.341zm2.973-7.685c-4.228 0-5.113-1.942-5.113-3.573 0-.155.124-.278.28-.278h1.243c.138 0 .254.1.275.236.188 1.27.747 1.91 3.319 1.91 2.042 0 2.91-.463 2.91-1.548 0-.626-.246-1.09-3.42-1.402-2.653-.264-4.293-.848-4.293-2.967 0-1.955 1.647-3.12 4.41-3.12 3.1 0 4.638 1.077 4.83 3.387a.28.28 0 0 1-.072.211.276.276 0 0 1-.204.09h-1.25a.278.278 0 0 1-.271-.222c-.303-1.34-.041-2.22-3.037-2.22-1.82 0-2.586.636-2.586 1.545 0 .64.317 1.054 3.34 1.296 2.686.24 4.357.815 4.357 3.068-.009 2.118-1.764 3.387-4.733 3.387h.015z"/>
        </svg>
      );
    case "PostgreSQL":
      return (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg"
          alt="PostgreSQL"
          className="block h-6 w-6 shrink-0 object-contain"
        />
      );
    case "Prisma":
      return (
        <svg className="block h-5.5 w-5.5 shrink-0" viewBox="0 0 128 128" aria-label="Prisma">
          <path fill="#d4af37" d="M66.457.014a6.308 6.308 0 0 0-5.812 3.028l-47.87 78.072a6.379 6.379 0 0 0 .048 6.748l23.568 37.186a6.387 6.387 0 0 0 7.22 2.683l68.012-20.407a6.37 6.37 0 0 0 3.96-8.765l-43.72-94.85A6.298 6.298 0 0 0 66.46.014Zm1.795 23.95a2.348 2.348 0 0 1 2.448 1.433l30.16 69.784a2.39 2.39 0 0 1-1.512 3.241l-46.996 14.024a2.39 2.39 0 0 1-3.024-2.76l16.83-83.812a2.353 2.353 0 0 1 2.099-1.91z"/>
        </svg>
      );
    case "Supabase":
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-label="Supabase">
          <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.003-14.419z" fill="#3ECF8E"/>
          <path d="M12.1 22.964c.015.986 1.26 1.41 1.874.637l9.262-11.651c1.093-1.377.113-3.405-1.646-3.405h-9.579L12.1 22.964z" fill="#3ECF8E" opacity=".6"/>
        </svg>
      );
    case "REST APIs":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="#f3b84d" strokeWidth="1.5" aria-label="REST API">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
        </svg>
      );
    case "Vercel":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="white" aria-label="Vercel">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      );
    case "Docker":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="#2496ED" aria-label="Docker">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/>
        </svg>
      );
    case "GitHub":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="white" aria-label="GitHub">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    case "Mapbox":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="#4264FB" aria-label="Mapbox">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.696 14.943c-4.103 4.103-11.433 2.794-11.433 2.794S4.94 10.421 9.057 6.304c2.281-2.281 6.061-2.187 8.45.189s2.471 6.168.189 8.45zm-4.319-7.91l-1.174 2.416-2.416 1.174 2.416 1.174 1.174 2.416 1.174-2.416 2.416-1.174-2.416-1.174-1.174-2.416z"/>
        </svg>
      );
    case "PostGIS":
      return (
        <img
          src="/pngegg.png"
          alt="PostGIS"
          className="block h-5.5 w-5.5 shrink-0 object-contain"
        />
      );
    case "CI/CD":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="#f3b84d" strokeWidth="1.5" aria-label="CI/CD">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
        </svg>
      );
    case "Expo":
    case "Expo Go":
      return (
        <svg className={cls} viewBox="0 0 128 128" preserveAspectRatio="xMidYMid meet" fill="none" aria-label="Expo Go">
          <path d="M60.654 48.883c1.051-1.534 2.197-1.727 3.127-1.727s2.475.193 3.527 1.727C75.556 60.12 89.173 82.512 99.22 99.035c6.555 10.767 11.586 19.043 12.622 20.095 3.874 3.952 9.189 1.489 12.278-2.995 3.039-4.412 3.88-7.512 3.88-10.817 0-2.253-44.052-83.515-48.486-90.28C75.25 8.534 73.856 6.89 66.56 6.89h-5.469c-7.28 0-8.331 1.644-12.599 8.148C44.058 21.803 0 103.065 0 105.313c0 3.31.847 6.41 3.892 10.822 3.088 4.484 8.403 6.947 12.278 2.99 1.03-1.053 6.061-9.323 12.615-20.095 10.047-16.518 23.62-38.91 31.874-50.153z" fill="#ffffff"/>
        </svg>
      );
    default:
      return <span className="text-[#f3b84d] text-xs font-bold">{name.slice(0, 2).toUpperCase()}</span>;
  }
}

export function PortfolioPage() {
  const shouldReduceMotion = useReducedMotion();
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactRevealed, setContactRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLocale = window.localStorage.getItem(storageKey) as Locale | null;
    if (savedLocale === "es" || savedLocale === "en") {
      setLocale(savedLocale);
      return;
    }

    window.localStorage.setItem(storageKey, defaultLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const t = content[locale];
  const projectsHeading = locale === "es" ? "Proyectos" : "Projects";
  const portfolioLabel = locale === "es" ? "Portafolio" : "Portfolio";
  const stackCategoryIcon = (title: string) => {
    // Frontend → monitor / pantalla
    if (title === "Frontend") return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    );
    // Backend → cilindro / base de datos
    if (title === "Backend") return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
      </svg>
    );
    // Infraestructura → nube
    if (title === "Infraestructura" || title === "Infrastructure") return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    );
    return <span className="text-xs font-bold">•</span>;
  };
  const heroPanel = locale === "es"
    ? {
        focus: "Enfoque",
        ready: "Listo para construir",
        stack: "Stack",
        delivery: "Entrega",
        eta: "ETA",
        routes: "Rutas",
        status: "Estado",
        live: "En vivo",
        workflow: "Flujo",
        build: "Construcción",
        data: "Datos",
        model: "Modelado",
        api: "API",
        ui: "UI",
        available: "Disponible",
      }
    : {
        focus: "Focus",
        ready: "Ready to build",
        stack: "Stack",
        delivery: "Delivery",
        eta: "ETA",
        routes: "Routes",
        status: "Status",
        live: "Live",
        workflow: "Workflow",
        build: "Build",
        data: "Datos",
        model: "Modeled",
        api: "API",
        ui: "UI",
        available: "Available",
      };

  const handleCopy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedValue(value);
      window.setTimeout(() => setCopiedValue(null), 1500);
    } catch {
      setCopiedValue(null);
    }
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(243,184,77,0.12),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(243,184,77,0.08),_transparent_30%)]" />
      <div className="relative min-h-screen overflow-x-hidden">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8">
            <div className="flex items-center justify-between gap-2 rounded-[1.5rem] border border-white/8 bg-[#121a1d]/90 px-3 py-2 shadow-[0_14px_30px_rgba(0,0,0,0.22)] sm:px-4">
              <a href="#top" className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3" aria-label="Inicio">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[#f3b84d]/20 bg-[#0a0f12] ring-1 ring-white/5 transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/IMG_0043-fondo-gris.png"
                    alt="Jose Miguel Molina"
                    fill
                    className="object-cover"
                    sizes="40px"
                    priority
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="truncate text-[1.02rem] font-semibold leading-none text-[#f5f1ea]">Jose Miguel Molina</div>
                  <div className="mt-1 flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-[#b7b0a6]">
                    <span className="truncate">Full-stack</span>
                  </div>
                </div>
              </a>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                <div className="hidden sm:flex">
                  <LanguageToggle locale={locale} onChange={setLocale} />
                </div>

                <button
                  type="button"
                  aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                  aria-expanded={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-[#151d21] text-[#f5f1ea] transition-colors hover:border-[#f3b84d]/30 hover:text-[#f3b84d] md:hidden"
                >
                  <span className="relative block h-4 w-4">
                    <span className={`absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-current transition-all ${mobileMenuOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0"}`} />
                    <span className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded-full bg-current transition-all ${mobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`absolute left-0 top-3 block h-0.5 w-4 rounded-full bg-current transition-all ${mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0"}`} />
                  </span>
                </button>
              </div>
            </div>

          </div>

          {mobileMenuOpen && (
            <div className="border-t border-white/10 bg-[#0b0d0f]/95 md:hidden">
              <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3" aria-label="Navegación principal móvil">
                {t.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-full border border-white/8 bg-[#111820] px-3 py-2 text-left text-[10px] uppercase tracking-[0.16em] text-[#d9d2ca] transition-colors hover:border-[#f3b84d]/35 hover:text-[#f3b84d]"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-1">
                  <LanguageToggle locale={locale} onChange={setLocale} />
                </div>
              </nav>
            </div>
          )}
        </header>

        <main id="top" className="mx-auto max-w-6xl px-3 pb-20 sm:px-6 lg:px-8">
          <motion.section
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pb-12 pt-16 sm:pt-20"
          >
            <div className="w-full text-left">

              <h1 className="mt-6 max-w-[14ch] text-[1.9rem] font-semibold leading-[0.94] tracking-[-0.06em] text-[#f3efe7] sm:max-w-[15ch] sm:text-[2.7rem] lg:max-w-[17ch] lg:text-[3.3rem] lg:leading-[0.88]">
                {t.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-6 text-[#d0cac2] sm:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-8 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <a
                  href="#contact"
                  onClick={() => setContactRevealed(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-[999px] border border-white/10 bg-white/3 px-3 py-2.5 text-[11px] font-medium leading-none text-[#f5f1ea] transition-colors hover:border-[#f3b84d]/40 hover:text-[#f3b84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b84d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0f] sm:px-5 sm:py-3 sm:text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                  <span className="inline-flex items-center leading-none">{t.hero.ctaPrimary}</span>
                </a>
                <a
                  href="https://github.com/josemiguelmolinam"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[999px] border border-white/10 bg-white/3 px-3 py-2.5 text-[11px] font-medium leading-none text-[#f5f1ea] transition-colors hover:border-[#f3b84d]/40 hover:text-[#f3b84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b84d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0f] sm:px-5 sm:py-3 sm:text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  <span className="inline-flex items-center leading-none">{t.hero.ctaSecondary}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/josemolinam/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-[999px] border border-white/10 bg-white/3 px-3 py-2.5 text-[10.5px] font-medium leading-none text-[#f5f1ea] transition-colors hover:border-[#f3b84d]/40 hover:text-[#f3b84d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b84d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0f] sm:px-5 sm:py-3 sm:text-[13px]"
                >
                  <GrLinkedinOption className="mt-0 h-[15px] w-[15px] shrink-0 sm:h-[17px] sm:w-[17px]" />
                  <span className="inline-flex items-center leading-none">LinkedIn</span>
                </a>
              </div>

              <ul className="mt-10 grid max-w-xl grid-cols-3 gap-2 sm:gap-4">
                {t.hero.stats.map((stat) => {
                  const statIcon: Record<string, React.ReactNode> = {
                    "apps creadas": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
                    "apps built":   <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
                    "inicio como dev": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
                    "dev journey":     <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
                    "ubicación": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                    "location": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                  };
                  const icon = statIcon[stat.label.toLowerCase()] ?? statIcon[stat.label] ?? null;
                  return (
                    <li key={stat.label} className="flex flex-col justify-center rounded-xl sm:rounded-2xl border border-white/10 bg-[#111519]/60 p-2.5 sm:p-3.5 transition-colors hover:bg-[#111519]/80">
                      <div className="flex items-center gap-1.5 sm:gap-2.5">
                        {icon && <div className="text-[#f3b84d] [&>svg]:h-3.5 [&>svg]:w-3.5 sm:[&>svg]:h-4 sm:[&>svg]:w-4">{icon}</div>}
                        <span className="mono text-sm sm:text-base font-semibold text-[#f3efe7]">{stat.value}</span>
                      </div>
                      <div className="mt-1 sm:mt-1.5 text-[8px] sm:text-[9.5px] uppercase tracking-[0.05em] sm:tracking-[0.15em] text-[#9a958e] leading-[1.2] sm:leading-normal">{stat.label}</div>
                    </li>
                  );
                })}
              </ul>
            </div>

          </motion.section>

          <motion.section
            id="about"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="py-12"
          >
            <div className="panel overflow-hidden">
              <div className="flex flex-col gap-0 lg:grid lg:grid-cols-[300px_1fr] lg:items-stretch">
                {/* Foto — columna izquierda compacta */}
                <div className="relative w-full shrink-0">
                  <div className="relative h-[260px] w-full lg:h-full lg:min-h-[340px]">
                    <Image
                      src="/IMG_0043-fondo-gris.png"
                      alt="Jose Miguel Molina"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "65% 15%" }}
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                  </div>
                </div>

                {/* Contenido — columna derecha */}
                <div className="flex flex-1 flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
                  <div>
                    <span className="eyebrow">{t.about.heading}</span>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#f5f1ea]">{t.about.heading}</h2>
                  </div>

                  <div className="space-y-4 lg:max-w-[62ch]">
                    <p className="text-[14px] leading-7 text-[#d4cfc7] sm:text-[15px]">{t.about.intro}</p>
                    <p className="text-[14px] leading-7 text-[#d4cfc7] sm:text-[15px]">{t.about.body}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {t.about.quickFacts.map((fact) => {
                      const factIcon: Record<string, React.ReactNode> = {
                        "Ubicación": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                        "Location":  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>,
                        "Idiomas":   <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"/></svg>,
                        "Languages": <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9"/></svg>,
                        "Enfoque":   <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>,
                        "Focus":     <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#f3b84d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>,
                      };
                      return (
                        <div key={fact.label} className="rounded-2xl border border-white/10 bg-[#0f161a] p-3.5 transition-colors hover:border-[#f3b84d]/25">
                          <div className="flex items-center gap-2">
                            {factIcon[fact.label]}
                            <div className="mono text-[9px] uppercase tracking-[0.22em] text-[#f3b84d]">{fact.label}</div>
                          </div>
                          <div className="mt-2 text-sm font-medium leading-5 text-[#f5f1ea]">{fact.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            id="stack"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="py-8"
          >
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">{t.stack.heading === "Tecnologías" ? "Tecnologías" : "Stack"}</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {t.stack.groups.map((group) => (
                <div key={group.title} className="panel p-5 sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f3b84d]/25 bg-[#f3b84d]/8 text-[#f3b84d]">
                      {stackCategoryIcon(group.title)}
                    </span>
                    <h3 className="mono text-[10px] uppercase tracking-[0.22em] text-[#f3b84d]">{group.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-[#0d1418] px-3 py-2.5 transition-colors hover:border-[#f3b84d]/20 hover:bg-[#101b21]"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center" aria-hidden="true">
                          {techIcon(item)}
                        </span>
                        <span className="text-[12px] font-medium text-[#ddd8d0]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="py-14"
          >
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow px-4 py-1.5 text-[11px] sm:text-[12px]">{projectsHeading}</span>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {t.projects.map((project) => (
                <ProjectCard key={project.id} project={project} locale={locale} />
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="py-14"
          >
            <div className="mb-5 flex items-center justify-start">
              <span className="eyebrow px-3 py-1 text-[10px] sm:px-4 sm:py-1.5 sm:text-[12px]">{t.contact.heading}</span>
            </div>

            <div className="rounded-[1.15rem] border border-white/8 bg-[#0d1115]/80 p-2.5 shadow-[0_10px_20px_rgba(0,0,0,0.15)] ring-1 ring-white/4 sm:p-3">
              <button
                type="button"
                onClick={() => setContactRevealed((prev) => !prev)}
                className={`inline-flex w-fit items-center justify-center gap-2 rounded-full border px-2.5 py-2 text-[8.5px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-200 sm:px-3 sm:py-2.25 sm:text-[9px] ${
                  contactRevealed
                    ? "border-[#f3b84d]/55 bg-[#f3b84d]/12 text-[#f7d89a] shadow-[0_0_0_1px_rgba(243,184,77,0.15)]"
                    : "border-[#f3b84d]/30 bg-[#f3b84d]/8 text-[#f3b84d] hover:border-[#f3b84d]/45 hover:bg-[#f3b84d]/12"
                }`}
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
                  <path d="m5 7 7 5 7-5" />
                </svg>
                {contactRevealed ? (locale === "es" ? "Ocultar" : "Hide") : (locale === "es" ? "Mostrar contacto" : "Show contact")}
              </button>

              <AnimatePresence initial={false}>
                {contactRevealed && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4 grid gap-2 sm:grid-cols-2"
                    role="list"
                  >
                    {t.contact.methods.map((method, i) => {
                      const icons: Record<string, React.ReactNode> = {
                      Email: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m4 7 8 6 8-6" />
                        </svg>
                      ),
                      Teléfono: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.34 1.95.63 2.88a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.2-1.29a2 2 0 0 1 2.11-.45c.93.29 1.9.5 2.88.63A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      ),
                      Phone: (
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.34 1.95.63 2.88a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.2-1.29a2 2 0 0 1 2.11-.45c.93.29 1.9.5 2.88.63A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      ),
                      LinkedIn: (
                        <GrLinkedinOption className="h-5 w-5" />
                      ),
                      GitHub: (
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.45 7.9 10.97.6.1.8-.25.8-.56v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.8 1.4 3.5 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.5.1-3.1 0 0 1-.3 3.2 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.2 2.8.1 3.1.8.8 1.3 2 1.3 3.2 0 4.5-2.8 5.5-5.5 5.8.4.4.8 1.2.8 2.4v3.6c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                        </svg>
                      ),
                    };
                    return (
                      <div
                        key={method.label}
                        role="listitem"
                        className="group relative flex flex-col gap-3 rounded-2xl border border-white/8 bg-[#111820]/90 p-3 transition-all duration-200 hover:border-[#f3b84d]/20 hover:bg-[#121b22] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-4"
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#f3b84d]/18 bg-[#f3b84d]/8 text-[#f3b84d] transition-colors group-hover:border-[#f3b84d]/35 group-hover:bg-[#f3b84d]/12">
                            <span className="flex items-center justify-center leading-none">
                              {icons[method.label] ?? String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="mono text-[8px] uppercase tracking-[0.22em] text-[#f3b84d] sm:text-[9px]">{method.label}</div>
                            <a
                              href={method.href}
                              target={method.href.startsWith("http") ? "_blank" : undefined}
                              rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                              className="mt-0.5 block break-all text-sm font-medium text-[#f0ece4] transition-colors hover:text-[#f3b84d]"
                            >
                              {method.value}
                            </a>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(method.value)}
                          aria-label={`Copiar ${method.label}`}
                          className={`shrink-0 self-start rounded-full border px-3 py-2 text-[8px] uppercase tracking-[0.18em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3b84d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d0f] sm:self-auto sm:px-3.5 sm:text-[9px] ${
                            copiedValue === method.value
                              ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-300"
                              : "border-white/10 bg-[#0d1316] text-[#d0cac2] hover:border-[#f3b84d]/35 hover:text-[#f3b84d]"
                          }`}
                        >
                          {copiedValue === method.value ? "✓ Copiado" : t.contact.cta}
                        </button>
                      </div>
                    );
                  })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.section>
        </main>

        <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-[#f3b84d]/3">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

            {/* Fila inferior */}
            <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-[#635f59]">
                © {new Date().getFullYear()} Jose Miguel Molina
              </p>

              <p className="mono flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#4f4c46] sm:text-[9.5px]">
                {locale === "es" ? "Diseñado y construido desde Mallorca" : "Designed & built from Mallorca"}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="-translate-x-0.5 -translate-y-0.5 h-5 w-5 text-[#f3b84d]"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animation: "heartbeat 1.5s ease-in-out infinite" }}
                >
                  <path d="M12 20.5c-2.9-2.17-8.5-6.3-8.5-11.02A4.31 4.31 0 0 1 7.8 5.2c1.5 0 2.88.65 3.7 1.8.82-1.15 2.2-1.8 3.7-1.8a4.31 4.31 0 0 1 4.3 4.28c0 4.72-5.6 8.85-8.5 11.02Z" />
                </svg>
              </p>

              <a
                href="#top"
                className="group flex items-center gap-2 rounded-full border border-[#f3b84d]/25 bg-[#f3b84d]/6 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-[#f3b84d] transition-all hover:border-[#f3b84d]/50 hover:bg-[#f3b84d]/12 hover:shadow-[0_0_16px_rgba(243,184,77,0.18)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 transition-transform group-hover:-translate-y-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                {locale === "es" ? "Volver arriba" : "Back to top"}
              </a>
            </div>
          </div>

          <style>{`
            @keyframes heartbeat {
              0%   { transform: scale(1); }
              14%  { transform: scale(1.28); }
              28%  { transform: scale(1); }
              42%  { transform: scale(1.18); }
              56%  { transform: scale(1); }
              100% { transform: scale(1); }
            }
          `}</style>
        </footer>
      </div>
    </>
  );
}
