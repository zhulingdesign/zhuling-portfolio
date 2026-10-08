"use client";

import {
  useForm,
  ValidationError,
} from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mbgjzvjl");

  if (state.succeeded) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-neutral-700">
          Thanks! Your message has been sent.
        </p>

        <p className="mt-2 text-sm text-neutral-400">
          I’ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm text-neutral-700"
        >
          Name *
        </label>

        <input
          id="name"
          type="text"
          name="name"
          required
          placeholder="Your Name..."
          className="h-12 w-full rounded-[4px] border border-neutral-300 px-4 text-[15px] outline-none transition placeholder:text-neutral-400 focus:border-neutral-700"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm text-neutral-700"
        >
          Email Address *
        </label>

        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="Your Email Address..."
          className="h-12 w-full rounded-[4px] border border-neutral-300 px-4 text-[15px] outline-none transition placeholder:text-neutral-400 focus:border-neutral-700"
        />

        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm text-neutral-700"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          required
          placeholder="Your Message..."
          className="h-[140px] w-full resize-none rounded-[4px] border border-neutral-300 px-4 py-3 text-[15px] outline-none transition placeholder:text-neutral-400 focus:border-neutral-700"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-500"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex h-11 w-[200px] items-center justify-center rounded-[4px] bg-neutral-900 text-sm text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>

      <ValidationError
        errors={state.errors}
        className="text-sm text-red-500"
      />
    </form>
  );
}
