import Image from "next/image";
import { useState, useEffect } from "react";

const collections = [
  {
    collectionName: "Wild Monkeez",
    collectionDescription:
      "Monkeez is a 4k collection of randomly generated NFTs on Base.",
    collectionImage: "/nft_placeholder.png",
    collectionLink: "https://twitter.com/monkeez",
  },
  {
    collectionName: "Insane Monkeez",
    collectionDescription:
      "Monkeez is a 4k collection of randomly generated NFTs on Base.",
    collectionImage: "/nft_placeholder.png",
    collectionLink: "/",
  },
  {
    collectionName: "Whoa Monkeez",
    collectionDescription:
      "Monkeez is a 4k collection of randomly generated NFTs on Base.",
    collectionImage: "/nft_placeholder.png",
    collectionLink: "/",
  },
  {
    collectionName: "What Monkeez",
    collectionDescription:
      "Monkeez is a 4k collection of randomly generated NFTs on Base.",
    collectionImage: "/nft_placeholder.png",
    collectionLink: "/",
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    let newSlide = active === collections.length - 1 ? 0 : active + 1;
    setActive(newSlide);
  };

  const prevSlide = () => {
    let newSlide = active === 0 ? collections.length - 1 : active - 1;
    setActive(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="carousel w-full max-w-7xl h-min md:h-96 flex flex-col-reverse md:flex-row rounded-2xl md:rounded-3xl overflow-hidden relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        {"<"}
      </button>
      {/* Text */}
      <div className="left bg-white w-2/5 h-full flex items-left justify-center flex-col px-12 py-4">
        <span className="tag uppercase text-gray-400 text-xs">
          Featured Collection
        </span>
        <h2 className="collection-title font-bold text-4xl mb-4">
          {collections[active].collectionName}
        </h2>
        <p className="description text-base leading-6 max-w-xs">
          {collections[active].collectionDescription}
        </p>
        <a
          href={collections[active].collectionLink}
          className="view-collection w-max px-8 py-4 bg-black text-white rounded-xl mt-8"
        >
          View Collection
        </a>
      </div>
      {/* Image */}
      <div className="right w-3/5 h-full relative">
        {collections.map((collection, index) => (
          <Image
            key={index}
            src={collection.collectionImage}
            layout="fill"
            objectFit="cover"
            alt={collection.collectionName}
            style={{
              opacity: index === active ? 1 : 0,
              transition: "opacity 1s",
            }}
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      >
        {">"}
      </button>
      {/* Pagination */}
      <div className="absolute bottom-0 flex justify-center w-full mt-8">
        {collections.map((_, index) => (
          <span
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-6 mx-1 rounded-full cursor-pointer ${
              index === active ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
