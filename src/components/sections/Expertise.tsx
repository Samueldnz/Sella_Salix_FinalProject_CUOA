import {
  ArrowRight,
  Dna,
  Sparkles,
  Check,
} from "lucide-react";

const expertise = [
  {
    title: "Biotechnology",
    description:
      "Advanced scientific solutions that transform research into innovative products, processes and technologies.",
    icon: Dna,
    features: [
      "Research & Development",
      "Laboratory Innovation",
      "Scientific Validation",
      "Industrial Applications",
    ],
  },
  {
    title: "Cosmetic Science",
    description:
      "High-performance cosmetic development combining efficacy, sustainability and consumer experience.",
    icon: Sparkles,
    features: [
      "Advanced Formulations",
      "Dermocosmetics",
      "Performance Ingredients",
      "Market-Oriented Innovation",
    ],
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-background py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Our Expertise
          </span>

          <h2 className="mt-5 text-4xl font-light tracking-tight text-text lg:text-5xl">
            Two expertises.
            <br />
            <span className="text-primary">
              One scientific mindset.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-text-secondary">
            We integrate biotechnology and cosmetic science to
            accelerate innovation, ensuring precision,
            sustainability and real market impact.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {expertise.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-border
                  bg-surface
                  p-10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-lg
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon
                    className="text-primary"
                    size={30}
                  />
                </div>

                <h3 className="mt-8 text-3xl font-light text-text">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-text-secondary">
                  {item.description}
                </p>

                <ul className="mt-10 space-y-4">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                        <Check
                          size={14}
                          className="text-primary"
                        />
                      </div>

                      <span className="text-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="
                    mt-12
                    inline-flex
                    items-center
                    gap-2
                    font-medium
                    text-primary
                    transition-all
                    group-hover:gap-3
                  "
                >
                  Learn More

                  <ArrowRight size={18} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}