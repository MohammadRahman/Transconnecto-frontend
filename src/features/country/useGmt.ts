import { createContext } from "react";

interface GMTContextProps {
    gmt: string
}

export const GmtContext = createContext<GMTContextProps | undefined>(undefined)