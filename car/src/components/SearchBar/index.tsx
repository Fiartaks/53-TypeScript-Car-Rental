import ReactSelect from "react-select";
import { makes } from "../../constants";

const SearchBar = () => {
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

  const options = makes.map((make) => ({
    label: make,
    value: make,
  }));

  return (
    <form>
      <div className="searchbar__item">
        <ReactSelect className=" w-full text-black" options={options} />
      </div>
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" alt="arac" className="absolute ml-4" />
        <input
          placeholder="orn:Civic"
          type="text"
          className="searchbar__input rounded text-black"
        />
      </div>
    </form>
  );
};
export default SearchBar;
