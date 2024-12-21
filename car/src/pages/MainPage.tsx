import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import type { CarType } from "../types";
import { div, h1 } from "framer-motion/client";
import Card from "../components/Card";

const MainPage = () => {
  //useState biden state dde tutacagimiz verinin tipnini ister
  //Bizde gereniric yardimiyla bir CarType dizisi ya da null tipinide olacagini beliirttik.
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, []);

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text.container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin Arabaları Keşfet</p>
        </div>
        {/* Filtreleme Alani */}

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>

        {/* Araba Listesi 
        
        1)Veri nullsa henbuz api den cevap gelmemsitior
        2)isError true ise api den cevap alinirken hata olusmustur.
        3)Veri bos dizisiyose4 aranan kriterelere uygun elaman bulunamamistir 
        */}

        {!cars ? (
          <div className="warn-container">
            <h2>yukleniyor...</h2>
          </div>
        ) : isError ? (
          <div className="warn-container">
            <h2>uzgunuz verileri alirken bir hata olustu</h2>
          </div>
        ) : cars.length < 1 ? (
          <div className="warn-container">
            <h2>Aradiginiz kriterlere uygun araba bulunmadi</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
export default MainPage;
