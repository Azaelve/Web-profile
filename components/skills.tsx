import { Boxes, Gamepad2, Code2, Braces, Sparkles } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const skills = [
  {
    icon: Boxes,
    title: "Minecraft Server",
    label: "Management",
  },
  {
    icon: Gamepad2,
    title: "Growtopia PS",
    label: "Private Server",
  },
  {
    icon: Code2,
    title: "PHP",
    label: "Backend",
  },
  {
    icon: Braces,
    title: "JavaScript + CSS",
    label: "Frontend",
  },
  {
    icon: Sparkles,
    title: "Lua",
    label: "Sedang Belajar",
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>Skills &amp; Learning</SectionHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center text-card-foreground transition-colors hover:border-primary/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <skill.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-heading font-semibold">{skill.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
