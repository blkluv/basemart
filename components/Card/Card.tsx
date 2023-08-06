import Image from "next/image";

type Props = {
  collectionName: string;
  collectionImage: string;
  collectionPrice: number;
};

const CardComponent: React.FC<Props> = ({
  collectionName,
  collectionImage,
  collectionPrice,
}) => {
  return (
    <div className="h-96 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-80 h-52">
        <Image
          src={collectionImage}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
          className="rounded max-w-full h-auto align-middle border-none"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          {collectionName}
        </h2>
        <p className="text-sm text-gray-500 mt-1">Floor Price</p>
        <p className="text-xl font-semibold text-black-600">
          {collectionPrice} ETH
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
