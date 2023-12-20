import { Quote } from "./quote.interface.js";
import { QuotesCreator } from "./quotes-creator.interface.js";
import { WCQuote } from "./wc-quote.js";

export class WCQuotesCreator extends QuotesCreator {
  factoryMethod(): Quote {
    return new WCQuote();
  }
}
