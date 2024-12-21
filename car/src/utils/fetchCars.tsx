import type { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "cbe9111332mshab02883c742656cp1f1d81jsn722495a01950",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars():Promise<CarType[]> {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m3`,
    options
  );
  const data = await res.json();
  return data;
}
