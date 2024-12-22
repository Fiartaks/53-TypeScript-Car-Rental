//Aracin fotograflari url lerini olusturcaz

import { colors } from "../constants";
import { CarType } from "../types";

export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL("http://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model);
  url.searchParams.append('zoomType', 'fullscreen')


 if(angle) {
    url.searchParams.append('angle', angle)
 }

//renk her url olustuguinda rastgele bir renk belirlemek 
const idx = Math.floor( Math.random() * colors.length);

url.searchParams.append('paintId', colors[idx])

 //olusturdugujmujz url i fonksiyionun cagirdigi yere dondur
  return url.href;

};
