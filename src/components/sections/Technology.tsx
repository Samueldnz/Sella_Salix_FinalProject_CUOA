import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const process = [
  {
    title: "Research",
    description:
      "Every innovation begins with scientific investigation, technical expertise and a deep understanding of market needs.",
    icon: FlaskConical,
  },
  {
    title: "Development",
    description:
      "Our multidisciplinary teams transform knowledge into scalable formulations and biotechnology solutions.",
    icon: Microscope,
  },
  {
    title: "Validation",
    description:
      "Rigorous testing and quality assurance ensure safety, performance and regulatory compliance.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "Validated solutions become products capable of generating long-term value for companies and consumers.",
    icon: Rocket,
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="bg-surface py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Technology
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-text lg:text-5xl">
            Technology guided by
            <span className="block text-primary">
              scientific precision.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-text-secondary">
            Our approach combines research, development and validation
            into a continuous innovation process that delivers reliable,
            scalable and market-ready solutions.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-24">
          {/* Desktop line */}

          <div className="absolute left-0 right-0 top-8 hidden h-px bg-border lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.title}
                  className="relative"
                >
                  {/* Circle */}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-primary/15 bg-background">
                    <Icon
                      className="text-primary"
                      size={28}
                    />
                  </div>

                  <span className="mt-6 block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-2xl font-light text-text">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-text-secondary">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}