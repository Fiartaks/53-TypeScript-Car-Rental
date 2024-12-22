import ReactSelect from "react-select";
import { makes } from "../../constants";
import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import type { OptionType } from "../../types";

//1.Bilesen
const SearchButton = ({ designs }: { designs: string }) => (
  <button className={`ml-3 z-10 ${designs}`}>
    <img src="/magnifying-glass.svg" width={40} height={40} />
  </button>
);
//2.bilesen
const SearchBar = () => {
  const [model, setModel] = useState<string>("");
  const [make, setMake] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  //benden istenen
  // const options = [
  //  { value: "bmw", label: "BMW" },
  //  { value: "audi", label: "Audi" },
  //  { value: "mercedes", label: "Mercedes" },
  //  { value: "volkswagen", label: "Volkswagen" },
  //];
  // //elimdeki
  //const makes = ["bmw", "audi", "mercedes"];

  //Select kutuphanesinin istedigi formata cevirmemiz gerekir bunu map ile yapabiliriz

  const options: OptionType[] = useMemo(
    () =>
      makes.map((make) => ({
        label: make,
        value: make,
      })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchParams({ make, model });
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          defaultInputValue={searchParams.get("make")!}
          onChange={(e) => e && setMake(e.value)}
          className=" w-full text-black"
          options={options}
        />
        <SearchButton designs="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img
          width={25}
          src="/model-icon.png"
          alt="arac"
          className="absolute ml-4"
        />
        <input
          defaultValue={searchParams.get("model")!}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setModel(e.target.value)
          }
          placeholder="orn:Civic"
          type="text"
          className="searchbar__input rounded text-black"
        />
        <SearchButton designs="sm:hidden" />
      </div>
      <SearchButton designs="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
