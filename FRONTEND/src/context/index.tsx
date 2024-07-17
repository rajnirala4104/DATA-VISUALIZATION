import { createContext } from "react";
import { dataSingleObject } from "../interface";

export const GraphDataContext = createContext<dataSingleObject[]>([])