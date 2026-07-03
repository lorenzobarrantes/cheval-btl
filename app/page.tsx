import Image from "next/image";

const servicios = [
  "Producción integral",
  "Eventos",
  "Promociones",
  "Activaciones",
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Ambiente: dos luces suaves, teal y naranja, como iluminación de escenario */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-[70%] rounded-full bg-teal-brand/15 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[30rem] w-[30rem] translate-x-[10%] rounded-full bg-orange-brand/10 blur-[140px]"
      />

      <div className="relative flex w-full max-w-xl flex-col items-center">
        <div className="rise" style={{ animationDelay: "0.1s" }}>
          <Image
            src="/logo.png"
            alt=""
            width={480}
            height={315}
            priority
            className="h-auto w-72 sm:w-96"
          />
        </div>

        {/* Trazo naranja que se dibuja, eco de la crin del caballo */}
        <svg
          aria-hidden
          viewBox="0 0 560 40"
          className="mt-2 w-64 sm:w-80"
          fill="none"
        >
          <path
            d="M10 30 C 150 30, 250 6, 550 14"
            stroke="#e08a3c"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="draw"
          />
        </svg>

        <h1
          className="rise mt-10 text-sm font-semibold uppercase tracking-[0.5em] text-bone sm:text-base"
          style={{ animationDelay: "0.35s" }}
        >
          Próximamente
        </h1>

        <p
          className="rise mt-5 max-w-md text-sm font-light leading-relaxed text-teal-soft sm:text-base"
          style={{ animationDelay: "0.55s" }}
        >
          Estamos preparando nuestro nuevo sitio. Mientras tanto, seguimos
          haciendo lo que mejor sabemos hacer.
        </p>

        <ul
          className="rise mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-bone/60 sm:text-xs"
          style={{ animationDelay: "0.75s" }}
        >
          {servicios.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden className="text-orange-brand">
                  |
                </span>
              )}
              {s}
            </li>
          ))}
        </ul>
      </div>

      <footer
        className="rise absolute bottom-6 text-[11px] font-light tracking-wide text-bone/35"
        style={{ animationDelay: "0.95s" }}
      >
        © {new Date().getFullYear()} Cheval.BTL
      </footer>
    </main>
  );
}
