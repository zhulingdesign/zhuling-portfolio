import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default function Home() {
  return (
    <main id="top" className="bg-white">

      {/* Projects */}
      <section className="mx-auto w-full max-w-[1440px] px-5 pb-24 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group block"
            >
              <Image
                src={project.cover}
                alt={project.title}
                width={900}
                height={600}
                className="block h-auto w-full"
              />

              <h2 className="mt-4 text-[18px] font-normal text-neutral-700 sm:text-[19px] lg:text-[20px]">
                {project.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}