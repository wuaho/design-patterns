import { Quote } from "./quote.interface.js";

export abstract class QuotesCreator {
  public abstract factoryMethod(): Quote;

  public sendQuoteToCarrier(): string {
    const quote = this.factoryMethod();

    return quote.sendEmailToCarrier();
  }
}
