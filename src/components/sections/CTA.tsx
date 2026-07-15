import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Decorative circles */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/10" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full border border-white/10" />

      {/* Logo watermark */}
      <img
        src="/logo-symbol.svg"
        alt=""
        aria-hidden
        className="
          absolute
          right-0
          top-1/2
          w-[28rem]
          -translate-y-1/2
          opacity-5
          select-none
          pointer-events-none
        "
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary-light">
          Collaboration Starts Here
        </span>

        <h2 className="mt-8 text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          Let's build the next
          <span className="block text-primary-light">
            scientific innovation together.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
          Whether you're developing a biotechnology solution or an
          innovative cosmetic product, our multidisciplinary team is
          ready to support your project from concept to market.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-8
              py-4
              font-medium
              text-primary
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-background
            "
          >
            Start a Conversation

            <ArrowRight size={18} />
          </a>

          <a
            href="#about"
            className="
              rounded-full
              border
              border-white/20
              px-8
              py-4
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}