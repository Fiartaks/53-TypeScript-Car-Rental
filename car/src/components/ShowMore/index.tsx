import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

const ShowMore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  //1-) URL de limit paramatresi yoksa ekranda 5 raafc vardir
  //2-) URL de limit parametresi varsa, tiklaninca 5 fazlasi

  //url den limit paramteresi al 
  const limit = Number(searchParams.get('limit')) || 5;

  const handleLimit = () => {
  //yeni liimiti belirle
 const newLimit =String (limit + 5)
  //parametreleri guncelle
  //ama eski paramatrelerin uzerine ekle
  searchParams.set('limit', newLimit)
  setSearchParams(searchParams);
  
  }
  return (
    <div className="w-full flex-center gap-5 my-10">
      {
        limit<30 && (
          <CustomButton handleClick={handleLimit} title="Daha Fazla" />

        )
      }
    </div>
  );
};
export default ShowMore;
