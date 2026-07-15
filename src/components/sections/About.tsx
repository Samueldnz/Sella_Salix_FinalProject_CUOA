import {
  Atom,
  FlaskConical,
  Leaf,
  Microscope,
} from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Biotechnology",
    description:
      "Scientific knowledge applied to innovative and high-performance solutions.",
  },
  {
    icon: Atom,
    title: "Cosmetic Innovation",
    description:
      "Advanced formulations designed to combine efficacy, safety and market value.",
  },
  {
    icon: Microscope,
    title: "Research & Development",
    description:
      "Continuous development supported by technical expertise and laboratory precision.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Responsible innovation focused on long-term environmental and business impact.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-surface py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            About Nexofarm
          </span>

          <h2 className="mt-5 text-4xl font-light leading-tight text-text lg:text-5xl">
            Science, innovation and expertise working together.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-text-secondary">
            <p>
              Nexofarm connects biotechnology and cosmetic science
              to transform research into products that create real
              value for companies and consumers.
            </p>

            <p>
              Our multidisciplinary approach combines scientific
              knowledge, innovation and market understanding,
              enabling the development of reliable, efficient and
              future-oriented solutions.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="grid gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                key={pillar.title}
                className="
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-md
                "
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon
                    size={24}
                    className="text-primary"
                  />
                </div>

                <h3 className="mt-6 text-xl font-medium text-text">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-text-secondary">
                  {pillar.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}