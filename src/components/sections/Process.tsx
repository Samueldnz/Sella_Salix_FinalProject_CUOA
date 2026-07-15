import {
  Search,
  Beaker,
  TestTube,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the client's objectives, challenges and opportunities to define the best scientific strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Scientific Assessment",
    description:
      "Technical evaluation, feasibility studies and identification of the most suitable biotechnology and cosmetic approaches.",
    icon: Beaker,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Formulation, prototyping and iterative development supported by multidisciplinary expertise.",
    icon: TestTube,
  },
  {
    number: "04",
    title: "Validation",
    description:
      "Performance verification, quality control and regulatory compliance before product delivery.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "From production readiness to continuous technical support, ensuring long-term success.",
    icon: PackageCheck,
  },
];

export function Process() {
  return (
    <section id="process" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-text lg:text-5xl">
            From concept to
            <span className="block text-primary">
              market-ready solutions.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-text-secondary">
            Every project follows a structured scientific workflow,
            ensuring transparency, precision and consistent results
            throughout the development journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-16">
            {process.map((step, index) => {
              const Icon = step.icon;
              const reverse = index % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`relative grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`rounded-3xl border border-border bg-surface p-8 shadow-sm ${
                      reverse ? "lg:text-right" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-light text-text">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-text-secondary">
                      {step.description}
                    </p>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-background lg:left-1/2">
                    <Icon size={24} className="text-primary" />
                  </div>

                  <div />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
