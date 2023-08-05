import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex relative mb-3 items-center">
      <div className="absolute left-3 text-gray-500">
        <FaSearch />
      </div>
      <input
        type="search"
        className="peer block min-h-[auto] w-full rounded-full border-0 bg-white px-10 py-[0.32rem] pl-10 leading-[1.6] outline-none"
        id="exampleSearch2"
        placeholder="Search Collections"
      />
    </div>
  );
}
