import { Quote } from "./quote.interface.js";

export class WCQuote implements Quote {
  sendEmailToCarrier(): string {
    return "Email sent to THE HARTFORD with the WC quote";
  }
}
