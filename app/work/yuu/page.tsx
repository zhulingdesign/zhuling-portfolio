// app/work/yuu/page.tsx
import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "yuu_01.webp",
  "yuu_02.webp",
  "yuu_03.webp",
  "yuu_04.webp",
  "yuu_05.webp",
  "yuu_06.webp",
  "yuu_07.webp",
  "yuu_08.webp",
  "yuu_09.webp",
  "yuu_10.webp",
  "yuu_11.webp",
  "yuu_12.webp",
];

export default function Yuu() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/yuu/${image}`}
            alt={`yuu Transaction UX case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="yuu" />
    </main>
  );
}