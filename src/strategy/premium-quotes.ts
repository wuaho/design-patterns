import { Quote } from "./quote.js";
import { QuotesStrategy } from "./quotes-strategy.interface.js";

export class PremiumQuotes implements QuotesStrategy {
  availableQuotes: Quote[];

  async getQuotes(price: number): Promise<Quote[]> {
    await this.callAgent(price);
    return this.availableQuotes;
  }
  private async callAgent(price: number): Promise<void> {
    console.log(`Calling an Agent to get the best $${price} quotes right now`);
    await new Promise((r) => setTimeout(r, 5000));
    this.availableQuotes = this.getAgentQuotes(price);
  }

  private getAgentQuotes(price: number): Quote[] {
    return [
      {
        price: 10000,
        carrier: "The Hartford",
      },
      {
        price: 2000,
        carrier: "CNA",
      },
      {
        price: 100,
        carrier: "Chubb",
      },
    ].filter((quote) => quote.price >= price);
  }
}
