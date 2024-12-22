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
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const {
    make = "bmw",
    model = "m3",
    limit = "5",
    fuel_type = "",
    year = "",
  } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&modelFamily=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,
    options
  );
  const data = await res.json();
  return data;
}
