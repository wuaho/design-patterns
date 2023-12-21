import { Quote } from "./quote.js";
import { QuotesStrategy } from "./quotes-strategy.interface.js";

export class AgentPortal {
  private quotesStrategy: QuotesStrategy;

  constructor(quotesStrategy: QuotesStrategy) {
    this.quotesStrategy = quotesStrategy;
  }

  setQuotesStrategy(quotesStrategy: QuotesStrategy) {
    this.quotesStrategy = quotesStrategy;
  }

  async getQuotesForMyOpportunity(price: number): Promise<Quote[]> {
    const result = await this.quotesStrategy.getQuotes(price);
    return result;
  }
}
