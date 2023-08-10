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
    <div className="h-fit bg-white shadow-md rounded-lg">
      <div className="relative w-80 h-52">
        <Image
          src={collectionImage}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
          className="rounded max-w-full h-auto align-middle border-none"
        />
      </div>
      <div className="p-4 flex flex-col h-40">
        <h2 className="text-lg font-semibold text-gray-800">
          {collectionName}
        </h2>
        <p className="text-sm text-gray-500 mt-auto">Floor Price</p>
        <p className="text-xl font-semibold text-black-600">
          {collectionPrice} ETH
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
