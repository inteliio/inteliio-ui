export default function AboutInteliio() {
  return (
    <section className="relative w-full bg-[#303841] py-28 overflow-hidden" style={{ textAlign: "left", margin: "30px 0 40px 0" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#303841] via-[#46515e] to-[#1e2329] opacity-90" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-semibold text-[#ff5722] mb-10" style={{ marginBottom: 28 }}>
          About Inteliio
        </h2>

        <p
          className="text-2xl md:text-2xl leading-relaxed max-w-4xl"
          style={{
            lineHeight: 1.8,
            fontWeight: 300,
          }}>
          Founded in 2025 by experienced professionals from the IT industry, <span style={{ fontWeight: 500, color: "#ff7e55" }}>Inteliio</span> was created with a mission to bridge technology and design. Our team combines deep technical expertise with creative vision to help businesses grow through
          modern, scalable, and intelligent digital solutions. We focus on crafting digital products and experiences that are functional, visually engaging, and built for lasting impact.
        </p>
      </div>
    </section>
  );
}
