import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CraftPhotography" },
      {
        name: "description",
        content:
          "Begin your enquiry with CraftPhotography. Wedding, pre-wedding, maternity, baby shower, birthday and family photography across India.",
      },
      { property: "og:title", content: "Contact CraftPhotography" },
      {
        property: "og:description",
        content: "Tell us about your celebration — we reply within 48 hours.",
      },
    ],
  }),
  component: ContactPage,
});

const eventTypes = [
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Maternity",
  "Baby Shower",
  "Birthday",
  "Family Portrait",
  "Event",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Let's Begin"
        title="Tell us about your"
        italic="celebration."
        subtitle="Share a few details and we'll be in touch within 48 hours with a tailored proposal."
      />

      <section className="bg-charcoal px-6 pb-32 pt-20 text-[var(--cream)] md:px-16 md:pb-48 md:pt-32">
        <div className="mx-auto grid max-w-[1300px] gap-20 md:grid-cols-12 md:gap-24">
          <Reveal direction="left" className="md:col-span-4">
            <p className="eyebrow text-[var(--beige)]">
              <span className="hairline mr-3 bg-[var(--beige-deep)]" />
              Studio
            </p>
            <h2 className="mt-8 text-4xl text-[var(--cream)] md:text-5xl">
              Reach out
              <br />
              <em className="italic text-[var(--beige)]">directly.</em>
            </h2>
            <div className="mt-14 space-y-6 text-sm">
              <Detail label="Email" value={BRAND.email} />
              <Detail label="Phone" value={BRAND.phone} />
              <Detail label="Studio" value={BRAND.studio} />
              <Detail label="Instagram" value={BRAND.instagramHandle} />
              <Detail label="Available" value="Across India & worldwide" />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15} className="md:col-span-8">
            {submitted ? (
              <div className="border border-[var(--cream)]/20 p-14 text-center">
                <p className="eyebrow text-[var(--beige)]">Thank You</p>
                <h3 className="mt-6 font-serif text-4xl text-[var(--cream)] md:text-5xl">
                  Your enquiry is on its way.
                </h3>
                <p className="mx-auto mt-8 max-w-md leading-[1.85] text-[var(--cream)]/75">
                  We'll be in touch within 48 hours with a tailored proposal.
                </p>
              </div>
            ) : (
              <form
                className="space-y-8"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid gap-8 md:grid-cols-2">
                  <SelectField label="Event Type" name="eventType" options={eventTypes} />
                  <Field label="Event Date" name="date" type="date" />
                </div>
                <Field label="Location" name="location" placeholder="City, venue or destination" />
                <Field
                  label="Tell us about your celebration"
                  name="message"
                  textarea
                />
                <button type="submit" className="btn-luxe-outline w-full justify-center">
                  Send Enquiry <span aria-hidden>→</span>
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--cream)]/15 pb-5">
      <div className="eyebrow text-[var(--beige)]">{label}</div>
      <div className="mt-2 text-[var(--cream)]">{value}</div>
    </div>
  );
}

const inputCls =
  "w-full border-0 border-b border-[var(--cream)]/30 bg-transparent py-4 text-[var(--cream)] placeholder-[var(--cream)]/40 outline-none transition-colors focus:border-[var(--beige)] [color-scheme:dark]";

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-[var(--beige)]">
        {label}
        {required && <span className="ml-1 text-[var(--cream)]/40">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          className={`${inputCls} resize-none`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className={inputCls}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="eyebrow text-[var(--beige)]">{label}</span>
      <select name={name} className={inputCls} defaultValue="">
        <option value="" disabled className="bg-charcoal text-[var(--cream)]/60">
          Select an event type
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-charcoal text-[var(--cream)]">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
