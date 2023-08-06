import type { NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  const images = [
    "/nft_placeholder.png",
    "/hero-asset.png",
    "/nft_placeholder.png",
    "/nft_placeholder.png",
  ];
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="w-full max-w-5xl h-min md:h-96 mt-10">
        <div>
          <h2 className="text-xl font-semibold">Trending Collections</h2>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <Card
            collectionName="Village Creatures"
            collectionPrice={5}
            collectionImage="/placeholder_1.png"
          />
          <Card
            collectionName="Himalaya"
            collectionPrice={5}
            collectionImage="/placeholder_2.png"
          />
          <Card
            collectionName="Nakimigos"
            collectionPrice={5}
            collectionImage="/placeholder_3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
