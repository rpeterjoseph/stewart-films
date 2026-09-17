"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  const inputClasses =
    "w-full bg-transparent border-0 border-b border-line text-ink font-body text-lg py-2.5 px-0.5 transition-colors focus:outline-none focus:border-gold";
  const labelClasses =
    "block font-ui text-xs tracking-[0.15em] uppercase text-ink-muted mb-2.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name</label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className={labelClasses}>Wedding Date</label>
          <input id="date" name="date" type="date" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="package" className={labelClasses}>Package Interest</label>
          <select id="package" name="package" className={inputClasses}>
            <option value="essential">The Essential</option>
            <option value="signature">The Signature</option>
            <option value="heirloom">The Heirloom</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="venue" className={labelClasses}>Venue / Location</label>
        <input id="venue" name="venue" type="text" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Tell Us About Your Day</label>
        <textarea id="message" name="message" required rows={5} className={`${inputClasses} resize-y min-h-30`} />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 font-ui text-[13px] tracking-[0.2em] uppercase px-8 py-4 bg-gold text-[#14120f] border border-gold hover:bg-transparent hover:text-ink transition-colors"
      >
        Send Inquiry
      </button>

      <p className="text-xs text-ink-muted mt-4.5">
        We typically respond within 48 hours.
      </p>

      <p
        role="status"
        className={`font-ui text-[13px] text-gold mt-5 ${submitted ? "block" : "hidden"}`}
      >
        Thank you — your message has been sent. We will be in touch within 48 hours.
      </p>
    </form>
  );
}
