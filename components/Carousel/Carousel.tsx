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
    let newSlide =
      active === collections.length - 1 ? 0 : active + 1;
    setActive(newSlide);
  };

  const prevSlide = () => {
    let newSlide =
      active === 0 ? collections.length - 1 : active - 1;
    setActive(newSlide);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="carousel px-4 container w-full h-[560px] md:h-96 flex flex-col-reverse md:flex-row overflow-visible relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 2xl:-left-8 m-auto text-4xl inset-y-1/2 cursor-pointer text-black z-20 bg-white hover:bg-gray-100 h-12 w-12 flex items-center justify-center border border-gray-400 rounded shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M14.707 18.364C14.8945 18.1765 14.9998 17.9222 14.9998 17.657C14.9998 17.3918 14.8945 17.1375 14.707 16.95L9.75699 12L14.707 7.05C14.8891 6.8614 14.9899 6.60879 14.9877 6.3466C14.9854 6.0844 14.8802 5.83359 14.6948 5.64818C14.5094 5.46277 14.2586 5.3576 13.9964 5.35532C13.7342 5.35305 13.4816 5.45384 13.293 5.636L7.63599 11.293C7.44852 11.4805 7.3432 11.7348 7.3432 12C7.3432 12.2652 7.44852 12.5195 7.63599 12.707L13.293 18.364C13.4805 18.5515 13.7348 18.6568 14 18.6568C14.2652 18.6568 14.5195 18.5515 14.707 18.364Z"
            fill="black"
          />
        </svg>
      </button>
      {/* Text */}
      <div className="left bg-white w-full md:w-2/5 h-full rounded-t-none rounded-l-2xl rounded-r-2xl md:rounded-l-3xl md:rounded-r-none flex items-left justify-center flex-col px-4 py-8 sm:px-12 md:py-4">
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
      <div className="right rounded-b-none rounded-r-2xl rounded-l-2xl md:rounded-r-3xl md:rounded-l-none overflow-hidden w-full md:w-3/5 h-full relative">
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
        className="bg-white right-0 2xl:-right-8 m-auto text-4xl inset-y-1/2 cursor-pointer text-black z-20 absolute h-12 w-12 flex items-center justify-center m-auto cursor-pointer text-black bg-white hover:bg-gray-100 border border-gray-400 rounded shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.29301 18.364C9.10554 18.1765 9.00023 17.9222 9.00023 17.657C9.00023 17.3918 9.10554 17.1375 9.29301 16.95L14.243 12L9.29301 7.05C9.11086 6.8614 9.01006 6.60879 9.01234 6.3466C9.01462 6.0844 9.11979 5.83359 9.30519 5.64818C9.4906 5.46277 9.74142 5.3576 10.0036 5.35532C10.2658 5.35305 10.5184 5.45384 10.707 5.636L16.364 11.293C16.5515 11.4805 16.6568 11.7348 16.6568 12C16.6568 12.2652 16.5515 12.5195 16.364 12.707L10.707 18.364C10.5195 18.5515 10.2652 18.6568 10 18.6568C9.73485 18.6568 9.48054 18.5515 9.29301 18.364Z"
            fill="black"
          />
        </svg>
      </button>
      {/* Pagination */}
      <div className="absolute -bottom-8 flex justify-center w-full">
        {collections.map((_, index) => (
          <span
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 w-24 mx-1 rounded-full cursor-pointer ${
              index === active ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
