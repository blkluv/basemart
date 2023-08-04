import Image from "next/image";

type Props = {
  collectionName: string;
  collectionImage: string;
  collectionPrice: number;
};

export default function Card({
  collectionName,
  collectionImage,
  collectionPrice,
}: Props) {
  return (
    <div className="max-w-md max-h-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-10 rounded:2xl" src={collectionImage} alt="" />
      </a>
      <div className="ml-10 pb-3 pt-1">
        <a href="#">
          <h5 className="mb-2 text-lg font-bold">{collectionName}</h5>
          <h5 className="text-xs tracking-tight text-gray-400 dark:text-white">
            Floor Price
          </h5>
        </a>
        <p className="text-base font-bold dark:text-gray-400">
          {collectionPrice} ETH
        </p>
      </div>
    </div>
  );
}
