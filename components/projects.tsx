import { Boxes, Gamepad2, Bot } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const minecraftServers = [
  { year: "2019", name: "Zierohub" },
  { year: "2020", name: "ZeroSMP" },
  { year: "2020", name: "ZenhirdSMP" },
  { year: "2021", name: "Zierohub SMP S2" },
  { year: "2022", name: "Zierohub SMP S3" },
  { year: "2022", name: "V3lheiz" },
  { year: "2024", name: "Leviathan SMP S1 (Admin)" },
  { year: "2024", name: "Leviathan SMP S2 (Admin)" },
]

const growtopiaServers = [
  { year: "2025", name: "Zennith GT", note: "Private Server Growtopia" },
  {
    year: "2026 — Saat Ini",
    name: "SeventID",
    note: "Private Server Growtopia",
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Project History</SectionHeading>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Minecraft */}
          <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground">
            <div className="mb-5 flex items-center gap-2">
              <Boxes className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-lg font-semibold">
                Minecraft Servers
              </h3>
            </div>
            <ul className="space-y-2">
              {minecraftServers.map((s, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3"
                >
                  <span className="font-medium">{s.name}</span>
                  <span className="rounded-full bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {s.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Growtopia + Bots */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground">
              <div className="mb-5 flex items-center gap-2">
                <Gamepad2 className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold">
                  Growtopia Private Server
                </h3>
              </div>
              <ul className="space-y-3">
                {growtopiaServers.map((s, i) => (
                  <li
                    key={i}
                    className="rounded-lg border border-border bg-secondary px-4 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-semibold">
                        {s.name}
                      </span>
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">
                        {s.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                <h3 className="font-heading text-lg font-semibold">
                  Bot Projects
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                2020 — 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
