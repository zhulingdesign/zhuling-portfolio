import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "oneplus_01.webp",
];

export default function OnePlus() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/oneplus/${image}`}
            alt={`OnePlus UX/UI case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="oneplus" />
    </main>
  );
}