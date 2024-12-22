import type { MouseEventHandler } from "react";

export type ButtonPropsType = {
  disabled?: boolean;
  designs?: string;
  btnType?: "submit" | "reset" | "button"; //string literaldir
  title: string;
  rIcon?: string;
  //tiklanma olayinda calisir
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

//apiden gelen arac veisibnin tipi
export interface CarType {
  city_mpg: number;
  class: string;
  combination_mpg: 25;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity" | "4wd";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
}

export type   OptionType = {
  value: string;
  label: string;
};