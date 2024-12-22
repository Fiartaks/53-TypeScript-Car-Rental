import type { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "cbe9111332mshab02883c742656cp1f1d81jsn722495a01950",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
type FilterType = {
  make?: string;
  model?: string;
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const { make = "bmw", model='m3' } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}`,
    options
  );
  const data = await res.json();
  return data;
}
