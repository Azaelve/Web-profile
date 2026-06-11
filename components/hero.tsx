import { ArrowRight, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Server Enthusiast &amp; Developer
          </span>

          <h1 className="mt-6 font-heading text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            V3lheiz
          </h1>
          <p className="mt-3 font-heading text-xl font-medium text-primary sm:text-2xl">
            Private Server Developer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dari mengelola 8 server Minecraft hingga sekarang fokus pada Private
            Server Growtopia. Sedang belajar programming dan bekerja di Malang.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Lihat Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://myanimelist.net"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              My Anime List
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
