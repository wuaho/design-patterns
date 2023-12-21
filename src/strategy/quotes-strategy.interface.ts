import { Quote } from "./quote.js";

export interface QuotesStrategy {
  getQuotes(price: number): Promise<Quote[]>;
}
