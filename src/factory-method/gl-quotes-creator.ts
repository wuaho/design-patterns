import { GLQuote } from "./gl-quote.js";
import { Quote } from "./quote.interface.js";
import { QuotesCreator } from "./quotes-creator.interface.js";

export class GLQuotesCreator extends QuotesCreator {
  factoryMethod(): Quote {
    return new GLQuote();
  }
}
