import { ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const stats = [
  { value: "530", label: "Completed" },
  { value: "6,941", label: "Episodes" },
  { value: "610", label: "Total" },
]

export function Anime() {
  return (
    <section id="anime" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Anime Life</SectionHeading>

        <div className="rounded-2xl border border-border bg-card p-8 text-card-foreground">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-secondary p-6 text-center"
              >
                <p className="font-heading text-4xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://myanimelist.net"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Kunjungi MyAnimeList
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
