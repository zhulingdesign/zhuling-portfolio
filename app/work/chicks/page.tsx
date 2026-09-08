// app/work/chicks/page.tsx
import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "chicks_01.webp",
  "chicks_02.webp",
  "chicks_03.webp",
  "chicks_04.webp",
  "chicks_05.webp",
  "chicks_06.webp",
  "chicks_07.webp",
  "chicks_08.webp",
  "chicks_09.webp",
];

export default function Chicks() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/chicks/${image}`}
            alt={`Chicks case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="chicks" />
    </main>
  );
}