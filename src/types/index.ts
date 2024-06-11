z
import { z } from "zod";
import { CryptoCurrencyResponseSchema, CryptoPriceSchema, CurrencySchema, pairSchema } from "../schema/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema >
export type Cryptocurrency = z.infer< typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof pairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>