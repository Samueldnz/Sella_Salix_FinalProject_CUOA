import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@nexofarm.com",
    href: "mailto:contact@nexofarm.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+41 00 000 0000",
    href: "tel:+41000000000",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Switzerland",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Fri · 08:00 – 18:00",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-surface py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
            Contact
          </span>

          <h2 className="mt-5 text-4xl font-light leading-tight text-text lg:text-5xl">
            Let's start a
            <span className="block text-primary">
              scientific conversation.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-text-secondary">
            Whether you are exploring a biotechnology project,
            cosmetic innovation or strategic collaboration,
            our team is ready to help.
          </p>

          <div className="mt-12 space-y-6">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon
                      className="text-primary"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-text-secondary">
                      {item.title}
                    </p>

                    <p className="mt-1 text-lg text-text">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  className="block transition hover:opacity-80"
                >
                  {content}
                </a>
              ) : (
                <div key={item.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-border bg-background p-8 shadow-sm lg:p-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-text"
              >
                Company
              </label>

              <input
                id="company"
                type="text"
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-text"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-border
                  bg-white
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            <button
              type="submit"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-primary
                px-8
                py-4
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-primary-hover
              "
            >
              Send Message

              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}