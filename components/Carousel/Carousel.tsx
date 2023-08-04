import Image from "next/image";
import { useState } from "react";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */

// const collection = [
//   {
//     id: 1,
//     collectionTitle: "Featured Collection 1",
//     collectionDescription: "Collection Description 1",
//     imageLink: "/nft_placeholder_1.png",
//   },
//   {
//     id: 2,
//     collectionTitle: "Featured Collection 2",
//     collectionDescription: "Collection Description 2",
//     imageLink: "/nft_placeholder_2.png",
//   },
//   {
//     id: 3,
//     collectionTitle: "Featured Collection 3",
//     collectionDescription: "Collection Description 3",
//     imageLink: "/nft_placeholder_3.png",
//   },
//   {
//     id: 4,
//     collectionTitle: "Featured Collection 4",
//     collectionDescription: "Collection Description 4",
//     imageLink: "/nft_placeholder_4.png",
//   },
// ];

// type CollectionData = {
//   id: number;
//   collectionTitle: string;
//   collectionDescription: string;
//   imageLink: string;
// };

// type Props = {
//   collection: CollectionData;
// };

export default function Carousel() {
  return (
    <div className="carousel w-full max-w-7xl h-min md:h-96 flex flex-col-reverse md:flex-row rounded-2xl md:rounded-3xl overflow-hidden">
      <div className="left bg-white w-2/5 h-full flex items-left justify-center flex-col px-12 py-4">
        <span className="tag uppercase text-gray-400 text-xs">
          featured collection
        </span>
        <h2 className="collection-title font-bold text-4xl mb-4">
          Wild Monkeez
        </h2>
        <p className="description text-base leading-6 max-w-xs">
          Monkeez is a 4k collection of randomly generated NFTs on Base.
        </p>
        <button className="view-collection w-max px-8 py-4 bg-black text-white rounded-xl mt-8">
          View Collection
        </button>
      </div>
      <div className="right w-3/5 h-full relative">
        <Image
          src="/nft_placeholder.png"
          layout="fill"
          objectFit="cover"
          alt="..."
        />
      </div>
    </div>
  );
}
