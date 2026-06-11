import { MapPin, Globe } from "lucide-react"

const domains = ["zexs.my.id", "sevent.dev"]

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-sm font-semibold text-primary-foreground">
                V3
              </span>
              <span className="font-heading text-lg font-semibold tracking-tight">
                V3lheiz
              </span>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Malang, Jawa Timur — Depo Galon Air Minum Puncak, Jl. Candi Mendut
              25A
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Connect with me</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Reach out through my private server communities and projects.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">My Domains</h3>
            <ul className="mt-4 space-y-2">
              {domains.map((domain) => (
                <li key={domain}>
                  <a
                    href={`https://${domain}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Globe className="h-4 w-4" />
                    {domain}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; 2026 V3lheiz &bull; All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
