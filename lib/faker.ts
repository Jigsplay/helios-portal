import { getAllTokens, getToken } from "@/config/tokens"
import { ValidatorProps } from "@/types/faker"
import { Token } from "@/types/Tokens"
import {
  Transaction,
  TransactionStatus,
  TransactionType
} from "@/types/Transactions"
import { faker } from "@faker-js/faker"

faker.seed(6)

export const generateRandomTransactions = (count: number): Transaction[] => {
  const transactions: Transaction[] = []

  const transactionTypes: TransactionType[] = [
    "bridge-out",
    "bridge-in",
    "governance-vote",
    "stake-in",
    "stake-out",
    "deposit",
    "withdraw"
  ]

  const statuses: TransactionStatus[] = ["pending", "completed", "failed"]
  const availableTokens = getAllTokens()

  for (let i = 0; i < count; i++) {
    const token = faker.helpers.arrayElement(availableTokens)

    const transaction: Transaction = {
      id: faker.string.uuid(),
      type: faker.helpers.arrayElement(transactionTypes),
      token,
      amount: Number(faker.finance.amount({ min: 0.1, max: 1000, dec: 4 })),
      date: faker.date.recent({ days: 30 }).toISOString(),
      status: faker.helpers.arrayElement(statuses)
    }

    transactions.push(transaction)
  }

  return transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export interface TvlData {
  token: Token
  amountLocked: number
}

export const generateRandomTvl = (): TvlData[] => {
  const tvlData: TvlData[] = []

  const nativeTokensConfig = [
    { symbol: "hls", min: 50, max: 5000000 },
    { symbol: "eth", min: 100, max: 80000000 },
    { symbol: "matic", min: 30, max: 30000000 },
    { symbol: "avax", min: 20, max: 25000000 },
    { symbol: "bnb", min: 40, max: 40000000 },
    { symbol: "sol", min: 10, max: 1000000 }
  ]

  nativeTokensConfig.forEach(({ symbol, min, max }) => {
    const token = getToken(symbol)
    if (token) {
      tvlData.push({
        token,
        amountLocked: Number(faker.finance.amount({ min, max, dec: 2 }))
      })
    }
  })

  return tvlData
}

export const generateRandomValidators = (count: number): ValidatorProps[] => {
  const validators: ValidatorProps[] = []

  for (let i = 0; i < count; i++) {
    const validator: ValidatorProps = {
      name: faker.company.name(),
      description: faker.lorem.sentence(),
      image: faker.image.url(),
      apyBoost: faker.number.int({ min: 1, max: 2 }),
      reputation: faker.number.int({ min: 90, max: 100 }),
      uptime: faker.number.int({ min: 1, max: 100 }),
      commission: faker.number.int({ min: 1, max: 100 })
    }

    validators.push(validator)
  }

  return validators
}
