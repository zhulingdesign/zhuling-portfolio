import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main id="top" className="bg-white">

      {/* Resume */}
      <section className="mx-auto w-full max-w-[760px] px-6 -mt-8">

        <a
          href="/resume/resume.pdf"
          target="_blank"
            rel="noopener noreferrer"
            aria-label="View or download Ling Zhu Resume"
            className="block cursor-pointer"
        >
         <Image
         src="/resume/resume.webp"
         alt="Ling Zhu Resume"
          width={1400}
          height={1800} 
          className="mx-auto h-auto w-full max-h-[68vh] object-contain transition-opacity duration-200 hover:opacity-90"
          priority
        />
    </a>
        <div className="mt-5 text-center">
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 w-[200px] items-center justify-center rounded-[4px] bg-neutral-900 text-sm text-white transition hover:bg-neutral-700"
          >
            View / Download Resume
          </a>
        </div>

      </section>

      {/* Contact */}
      <section className="mx-auto w-full max-w-[720px] px-6 pt-10 pb-20">

        <h2 className="mb-8 text-center text-xl font-normal text-neutral-500">
          Don't be shy, drop me a line :)
        </h2>

        <ContactForm />

      </section>

      {/* Back to Top */}
      <div className="pb-20 text-center">
        <a
          href="#top"
          className="text-sm text-neutral-400 transition hover:text-neutral-900"
        >
          ↑ Back to Top
        </a>
      </div>

    </main>
  );
}
