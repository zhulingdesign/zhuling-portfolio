// app/work/qyh-1/page.tsx
import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "qyh1_01.webp",
  "qyh1_02.webp",
  "qyh1_03.webp",
  "qyh1_04.webp",
  "qyh1_05.webp",
  "qyh1_06.webp",
];

export default function QYH1() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/qyh-1/${image}`}
            alt={`FunDating 1.0 case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="qyh-1" />
    </main>
  );
}