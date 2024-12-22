import Select from "react-select";
import type { OptionType } from "../../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface CustomProps {
  title: string;
  paramName: string;
  options: OptionType[];
}

const CustomFilter = ({ title, paramName, options }: CustomProps) => {
  const [selected, setSelected] = useState<OptionType | null>(null);
  const [params, setParams] = useSearchParams();
  //Secilen filtreye gore URL guncelle

  useEffect(() => {
    //URL'deki secili paramtreyi al

    if(selected?.value){
      params.set(paramName, selected?.value.toLowerCase());
    }else{
      //Value su yoksa URL den parametyreyi kaldir
      params.delete(paramName);
    }
    //degisikligi URL aktar
    setParams(params);

  }, [selected]);

  const defaultValue ={
    label:params.get(paramName),
    value:params.get(paramName)
  }


  return (
    <div className="text-black w-fit">
      <Select
      defaultValue={defaultValue}
        onChange={(e) => setSelected(e)}
        placeholder={title}
        className="min-w-[100px]"
        options={options}
      />
    </div>
  );
};
export default CustomFilter;
