import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";

type YouMayAlsoLikeProps = {
  currentSlug: string;
};

export default function YouMayAlsoLike({
  currentSlug,
}: YouMayAlsoLikeProps) {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );

  const recommendedProjects = [1, 2, 3].map((offset) => {
    const index = (currentIndex + offset) % projects.length;
    return projects[index];
  });

  return (
    <section className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 lg:px-16">
      <h2 className="mb-10 text-center text-3xl font-medium">
        You may also like
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {recommendedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group"
          >
            <Image
              src={project.cover}
              alt={project.title}
              width={800}
              height={520}
              className="h-auto w-full"
            />

            <h3 className="mt-4 text-center text-lg">
              {project.title}
            </h3>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#top"
          className="text-neutral-400 hover:text-neutral-900"
        >
          ↑ Back to Top
        </a>
      </div>
    </section>
  );
}