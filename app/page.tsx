"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_ti0rq2k";
const EMAILJS_TEMPLATE_ID = "template_e8ox7xq";
const EMAILJS_PUBLIC_KEY = "xBJl0-2F-o6YgfvNS";
/* ---------- Reveal on scroll ---------- */
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Loader con caballo al galope ---------- */
function Loader({ done }: { done: boolean }) {
  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-carbon transition-all duration-700 ${done ? "pointer-events-none invisible opacity-0" : "opacity-100"
        }`}
    >
      <div className="gallop">
        <Image
          src="/logo.png"
          alt=""
          width={761}
          height={583}
          priority
          className="h-auto w-48"
        />
      </div>
      <svg viewBox="0 0 400 8" className="mt-6 w-48" fill="none">
        <path
          d="M4 4 H396"
          stroke="#e08a3c"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="track"
        />
      </svg>
    </div>
  );
}

const nav = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  // { label: "Clientes", href: "#clientes" },
  // { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const founders = [
  {
    name: "Sergio Belgrano",
    initials: "SB",
    photo: "/sergio.png",   // dejá "" si todavía no hay foto
    linkedin: "https://www.linkedin.com/in/sergio-belgrano-6989a513/",
  },
  {
    name: "Ignacio Ibarra García",
    initials: "II",
    photo: "/ignacio.png",  // dejá "" si todavía no hay foto
    linkedin:
      "https://www.linkedin.com/in/ignacio-ibarra-garc%C3%ADa-82b63718/",
  },
];

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.2H5.67v8.14h2.67zM7 9.09a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.25v-4.46c0-2.39-1.28-3.5-2.98-3.5-1.37 0-1.99.76-2.33 1.29V10.2h-2.67c.04.75 0 8.14 0 8.14h2.67v-4.55c0-.24.02-.48.09-.66.19-.48.63-.98 1.37-.98.96 0 1.35.74 1.35 1.81v4.38h2.5z" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.72 3.72 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.77.07-1.08.05-1.67.23-2.06.38-.52.2-.88.44-1.27.83-.39.39-.63.75-.83 1.27-.15.39-.33.98-.38 2.06-.06 1.26-.07 1.62-.07 4.77s.01 3.5.07 4.77c.05 1.08.23 1.67.38 2.06.2.52.44.88.83 1.27.39.39.75.63 1.27.83.39.15.98.33 2.06.38 1.26.06 1.62.07 4.77.07s3.5-.01 4.77-.07c1.08-.05 1.67-.23 2.06-.38.52-.2.88-.44 1.27-.83.39-.39.63-.75.83-1.27.15-.39.33-.98.38-2.06.06-1.26.07-1.62.07-4.77s-.01-3.5-.07-4.77c-.05-1.08-.23-1.67-.38-2.06-.2-.52-.44-.88-.83-1.27a3.4 3.4 0 0 0-1.27-.83c-.39-.15-.98-.33-2.06-.38-1.26-.06-1.62-.07-4.77-.07zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.14-2.06a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0z" />
    </svg>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Loader done={loaded} />

      {/* ---------- Nav ---------- */}
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-carbon/80 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
    <a href="#inicio" aria-label="Cheval.BTL — Inicio" onClick={() => setMenuOpen(false)}>
      <Image
        src="/logo-horizontal-sinfondo.png"
        alt="Cheval.BTL"
        width={1471}
        height={253}
        className="h-8 w-auto sm:h-10"
      />
    </a>

    {/* Links desktop */}
    <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-bone/70 sm:flex">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-orange-brand"
        >
          {item.label}
        </a>
      ))}
    </nav>

    {/* Botón hamburguesa (solo mobile) */}
    <button
      onClick={() => setMenuOpen((o) => !o)}
      aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={menuOpen}
      className="text-bone sm:hidden"
    >
      {menuOpen ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
          <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
        </svg>
      )}
    </button>
  </div>

  {/* Menú desplegable mobile */}
  {menuOpen && (
    <nav className="flex flex-col gap-1 border-t border-white/5 bg-carbon/95 px-6 py-4 backdrop-blur-md sm:hidden">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className="py-2 text-sm font-medium uppercase tracking-[0.2em] text-bone/80 transition-colors hover:text-orange-brand"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )}
</header>

      <main>
        {/* ---------- Hero ---------- */}
        {/* Cuando esté el reel: reemplazar el fondo por
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-40" src="/reel.mp4" /> */}
        <section
          id="inicio"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            src="/reel.mp4"
          />

          <button
            onClick={toggleMute}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            className="absolute bottom-8 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-carbon/60 text-bone backdrop-blur-md transition-colors hover:border-orange-brand hover:text-orange-brand"
          >
            {muted ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M11 5 6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 9l-6 6M17 9l6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path d="M11 5 6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[36rem] -translate-x-[75%] rounded-full bg-blue-brand/30 blur-[160px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-56 left-1/2 h-[32rem] w-[32rem] translate-x-[15%] rounded-full bg-orange-brand/10 blur-[160px]"
          />

          <div className="relative max-w-4xl pt-16">
            <p
              className="rise text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-brand sm:text-xs"
              style={{ animationDelay: "1.5s" }}
            >
              Eventos — Activaciones — Promociones
            </p>
            <h1
              className="rise mt-6 text-3xl font-bold uppercase leading-tight tracking-tight text-bone sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "1.65s" }}
            >
              Somos una nueva agencia y productora integral.
            </h1>
            <p
              className="rise mt-6 text-lg font-light text-bone/80 sm:text-2xl"
              style={{ animationDelay: "1.85s" }}
            >
              Creamos y ejecutamos momentos de alto impacto.
            </p>

            <svg
              aria-hidden
              viewBox="0 0 560 40"
              className="rise mx-auto mt-8 w-64 sm:w-80"
              style={{ animationDelay: "2s" }}
              fill="none"
            >
              <path
                d="M10 30 C 150 30, 250 6, 550 14"
                stroke="#e08a3c"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="draw"
                style={{ animationDelay: "2.1s" }}
              />
            </svg>

            <p
              className="rise mt-8 text-sm font-medium uppercase tracking-[0.3em] text-blue-soft sm:text-base"
              style={{ animationDelay: "2.15s" }}
            >
              Desarrollamos historias que emocionan la experiencia marca.
            </p>
            <p
              className="rise mt-8 text-[8px] uppercase tracking-[0.3em] text-gray-300 sm:text-[9px]"
              style={{ animationDelay: "2.15s" }}
            >
              Estos trabajos fueron ejecutados conformando y liderando
              equipos en agencias anteriores, propias y de terceros.
            </p>
          </div>

          <a
            href="#quienes-somos"
            aria-label="Bajar a Quiénes somos"
            className="rise absolute bottom-8 text-bone/40 transition-colors hover:text-orange-brand"
            style={{ animationDelay: "2.4s" }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-7 w-7 animate-bounce"
            >
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </section>

        {/* ---------- Quiénes somos ---------- */}
        <section id="quienes-somos" className="relative px-6 py-28">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-brand">
                Quiénes somos
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-xl font-light leading-relaxed text-bone sm:text-2xl">
                Trabajamos más de 25 años en las principales agencias del mercado, creando y ejecutando experiencias de alto impacto para las mejores marcas.
              </p>
            </Reveal>
            {/* <Reveal delay={200}>
              <p className="mt-6 text-lg font-light leading-relaxed text-bone/70">
                Creamos y diseñamos estrategias innovadoras, enfocados en la
                excelencia de la ejecución.
              </p>
            </Reveal> */}
            <Reveal delay={300}>
              <p className="mt-6 border-l-2 border-orange-brand pl-5 text-lg font-normal italic leading-relaxed text-blue-soft">
                Creamos y diseñamos estrategias innovadoras, enfocados en la
                excelencia de la ejecución.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={i * 120}>
                  <div className="group flex items-center gap-5 rounded-2xl border border-white/5 bg-graphite p-6 transition-colors hover:border-orange-brand/40">
                    {/* Reemplazar por <Image src="/sergio.jpg" .../> cuando estén las fotos */}
                    {f.photo ? (
                      <Image
                        src={f.photo}
                        alt={f.name}
                        width={64}
                        height={64}
                        className="h-16 w-16 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-brand text-lg font-semibold text-bone">
                        {f.initials}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="font-semibold text-bone">{f.name}</p>
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-sm text-blue-soft transition-colors hover:text-orange-brand"
                      >
                        <LinkedInIcon className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Clientes / Proyectos ---------- */}
        {/* <section className="px-6 pb-28">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {[
              { id: "clientes", label: "Clientes" },
              { id: "proyectos", label: "Proyectos" },
            ].map((s, i) => (
              <Reveal key={s.id} delay={i * 120}>
                <div
                  id={s.id}
                  className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-graphite/50 px-6 py-16 text-center scroll-mt-24"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-brand">
                    {s.label}
                  </p>
                  <p className="mt-4 text-2xl font-bold uppercase tracking-wide text-bone/30">
                    Próximamente
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section> */}

        {/* ---------- Contacto ---------- */}
        <section id="contacto" className="px-6 pb-28 scroll-mt-24">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <p className="text-center text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-brand">
                Contacto
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-center text-lg font-light text-bone/80">
                Contanos tu proyecto y armemos juntos la próxima historia.
              </p>
            </Reveal>

            <Reveal delay={200}>
              {status === "sent" ? (
                <p className="mt-10 rounded-2xl border border-orange-brand/40 bg-graphite p-8 text-center text-bone">
                  ¡Gracias! Recibimos tu consulta y te vamos a responder a la brevedad.
                </p>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="mt-10 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="nombre"
                      required
                      placeholder="Nombre"
                      className="w-full rounded-xl border border-white/10 bg-graphite px-5 py-3.5 text-bone placeholder:text-bone/35 focus:border-orange-brand focus:outline-none"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full rounded-xl border border-white/10 bg-graphite px-5 py-3.5 text-bone placeholder:text-bone/35 focus:border-orange-brand focus:outline-none"
                    />
                  </div>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Tu consulta"
                    className="w-full rounded-xl border border-white/10 bg-graphite px-5 py-3.5 text-bone placeholder:text-bone/35 focus:border-orange-brand focus:outline-none"
                  />
                  {status === "error" && (
                    <p className="text-sm text-orange-brand">
                      No pudimos enviar tu consulta. Probá de nuevo o escribinos a info@chevalbtl.com.ar.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-xl bg-orange-brand px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-carbon transition-colors hover:bg-orange-brand/85 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Enviando…" : "Enviar consulta"}
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 text-center text-sm text-bone/50">
                O escribinos a{" "}
                <a
                  href="mailto:info@chevalbtl.com.ar"
                  className="text-orange-brand transition-colors hover:text-bone"
                >
                  info@chevalbtl.com.ar
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-bone/50">
            Seguinos
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/cheval.btl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Cheval.BTL"
              className="text-bone/60 transition-colors hover:text-orange-brand"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/cheval-btl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Cheval.BTL"
              className="text-bone/60 transition-colors hover:text-blue-500"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            {/* YouTube: descomentar cuando exista el canal
            <a href="https://www.youtube.com/@chevalbtl" target="_blank" rel="noopener noreferrer" aria-label="YouTube de Cheval.BTL" className="text-bone/60 transition-colors hover:text-orange-brand">
              <YouTubeIcon className="h-6 w-6" />
            </a> */}
          </div>
          <p className="text-[11px] font-light tracking-wide text-bone/30">
            © {new Date().getFullYear()} Cheval.BTL — www.chevalbtl.com.ar
          </p>
        </div>
      </footer>
    </>
  );
}
