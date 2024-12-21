//Aracin fotograflari url lerini olusturcaz

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
//olusturdugujmujz url i fonksiyionun cagirdigi yere dondur
  return url.href;

};
