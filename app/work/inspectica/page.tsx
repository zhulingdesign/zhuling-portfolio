// app/work/inspectica/page.tsx
import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "inspectica_01.webp",
  "inspectica_02.webp",
  "inspectica_03.webp",
  "inspectica_04.webp",
  "inspectica_05.webp",
  "inspectica_06.webp",
  "inspectica_07.webp",
  "inspectica_08.webp",
  "inspectica_09.webp",
  "inspectica_10.webp",
  "inspectica_11.webp",
  "inspectica_12.webp",
  "inspectica_13.webp",
  "inspectica_14.webp",
  "inspectica_15.webp",
  "inspectica_16.webp",
  "inspectica_17.webp",
  "inspectica_18.webp",
  "inspectica_19.webp",
  "inspectica_20.webp",
];

export default function Inspectica() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/inspectica/${image}`}
            alt={`Inspectica case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="inspectica" />
    </main>
  );
}