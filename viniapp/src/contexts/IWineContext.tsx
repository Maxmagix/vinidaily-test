import { WineType } from "./WineType";

export interface IWineContext {
  wines: WineType[] | null,
  getWines: TGetWines,
};

export type TGetWines = (name: string) => void;

export const defaultWineValue: IWineContext = {
  wines: [],
  getWines: () => {},
};