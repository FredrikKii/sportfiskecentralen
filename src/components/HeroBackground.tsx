export default function HeroBackground() {
  return (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-br from-forest-dark via-charcoal to-charcoal"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, #2a5244 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e3d32 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />
    </>
  )
}
