import React, { createContext, useState } from "react";

import {IWineContext, defaultWineValue, TGetWines} from './IWineContext.tsx';
import { WineType } from "./WineType.tsx";

export const WineContext = createContext<IWineContext>(defaultWineValue);

const ip = 'http://localhost:8080/api/'

export const WineProvider: React.FC<any> = ({ children }) => {
  const [wines, setWines] = useState<WineType[]>([]);

  const getWines: TGetWines = async (name: string) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };
    const response = await fetch(`${ip}wine?name=${name}`, requestOptions)
    if (!response.ok) {
      throw new Error('Wines coud not be requested!')
    } else {
      response.json().then((data) => {
        console.log(data);
        setWines(data);
      });
    }
  }

  return (
    <WineContext.Provider value={{
        wines,
        getWines
    }}>
        {children}
    </WineContext.Provider>
  );
};