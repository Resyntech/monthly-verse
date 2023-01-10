export interface ProductState {
  products: Array<{
    code: string
    name: string
    grams: Array<number>
    capital: Array<number>
    profit: Array<number>
    quantity?: number
    image?: string
  }>
}
