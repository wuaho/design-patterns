import { Quote } from "./quote.js";
import { QuotesStrategy } from "./quotes-strategy.interface.js";

export class CheapQuotes implements QuotesStrategy {
  availableQuotes: Quote[];

  async getQuotes(price: number): Promise<Quote[]> {
    await this.sendApplicationToCarriers(price);
    return this.availableQuotes;
  }

  private async sendApplicationToCarriers(price: number): Promise<void> {
    console.log(`Getting $${price} quotes from online integrations`);
    await new Promise((r) => setTimeout(r, 2000));
    this.availableQuotes = [
      {
        price: 100,
        carrier: "Mapfre",
      },
      {
        price: 1000,
        carrier: "ING Direct",
      },
      {
        price: 300,
        carrier: "Santalucia",
      },
    ].filter((quote) => quote.price >= price);
  }
}
