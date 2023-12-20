import { Quote } from "./quote.interface.js";

export class GLQuote implements Quote {
  sendEmailToCarrier(): string {
    return "Email sent to CHUBB with the GL quote";
  }
}
