export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mb-10 inline-block">
      <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        {children}
      </h2>
      <span className="absolute -bottom-2 left-0 h-[3px] w-1/2 rounded-full bg-gradient-to-r from-primary to-transparent" />
    </div>
  )
}
