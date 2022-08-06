import { SearchIcon, SortAscendingIcon } from "@heroicons/react/solid";

export default function SearchInput() {
  return (
    <div>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            className="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md pr-10 sm:text-sm border-gray-300"
            placeholder="검색"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
