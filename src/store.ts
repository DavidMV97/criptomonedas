import { create } from "zustand";
import { Cryptocurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCryptos } from "./services/CryptoServices";

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    fetchCryptos: () => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({ 
    cryptocurrencies: [],
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))        
    }
})))