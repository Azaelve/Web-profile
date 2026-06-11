import { MapPin, Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Tentang Saya</SectionHeading>

        <div className="grid gap-6 md:grid-cols-5">
          <div className="space-y-4 rounded-2xl border border-border bg-card p-6 text-card-foreground md:col-span-3">
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Saya berasal dari{" "}
              <span className="font-medium text-foreground">
                Malang, Jawa Timur
              </span>
              . Pernah mengelola 8 server Minecraft dari tahun 2019 hingga 2024.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Saat ini saya fokus mengembangkan private server Growtopia dan
              bekerja di Depo Galon Air Minum Puncak.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-card-foreground md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Briefcase className="h-4 w-4" />
              Pekerjaan Saat Ini
            </div>
            <p className="mt-4 font-heading text-lg font-semibold">
              Depo Galon Air Minum Puncak
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              Jl. Candi Mendut 25A, Malang, Jawa Timur
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
