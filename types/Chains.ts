import type { ChainId } from "@/config/constants"
import type { Token } from "./Tokens"

export interface Chain {
  id: ChainId
  chainId: number
  name: string
  color: string
  iconName: string
}

export interface ChainWithTokens extends Chain {
  tokens: Token[]
}
