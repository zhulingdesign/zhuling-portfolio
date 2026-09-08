import Image from "next/image";
import YouMayAlsoLike from "../../components/YouMayAlsoLike";

const images = [
  "qyh2-01.webp",
  "qyh2-02.webp",
  "qyh2-03.webp",
  "qyh2-04.webp",
  "qyh2-05.webp",
  "qyh2-06.webp",
  "qyh2-07.webp",
  "qyh2-08.webp",
  "qyh2-09.webp",
];

export default function QYH2() {
  return (
    <main id="top" className="bg-white">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:px-16">
        {images.map((image, index) => (
          <Image
            key={image}
            src={`/projects/qyh-2/${image}`}
            alt={`FunDating 2.0 case study section ${index + 1}`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 1600px"
            className="block h-auto w-full"
            priority={index === 0}
          />
        ))}
      </div>

      <YouMayAlsoLike currentSlug="qyh-2" />
    </main>
  );
}