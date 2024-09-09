import { FormEvent, useState } from "react";
import { useAppContext } from "./context";

export const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const searchValue = (e.target as HTMLFormElement).elements.namedItem(
      "search"
    ) as HTMLInputElement;
    if (!searchValue || !searchValue.value) return;
    setSearchTerm(searchValue.value);
  };

  return (
    <>
      <form
        className="relative flex shadow-lg rounded-2xl bg-primary-lighter h-[60px] items-center justify-between mb-4 md:h-[80px] md:mb-6"
        onSubmit={handleSubmit}
      >
        <img
          className="w-5 h-5 ml-4 md:h-6 md:w-6 md:ml-8"
          src="./assets/icon-search.svg"
          alt="Search icon"
        />
        <input
          className='w-4/5 pl-2 focus:outline-none bg-primary-lighter placeholder:text-secondary'
          id="search"
          type="text"
          name="search"
          placeholder="Search Github user"
        />
        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="bg-btn hover:bg-btn-hover text-white font-bold text-sm w-[84px] h-[46px] rounded-[10px] mr-2 md:mr-4 md:h-[50px] md:w-[106px] "
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};
