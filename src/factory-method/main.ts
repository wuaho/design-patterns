import { GLQuotesCreator } from "./gl-quotes-creator.js";
import { QuotesCreator } from "./quotes-creator.interface.js";
import { WCQuotesCreator } from "./wc-quotes-creator.js";

function formatQuoteSentToCarrier(quotesCreatorLogger: QuotesCreator): string {
  const messageToCarrier = quotesCreatorLogger.sendQuoteToCarrier();
  const newMessage = `${messageToCarrier}. Thank you for your wait.`;
  return newMessage;
}
const qlQuotesCreator = new GLQuotesCreator();

console.log(formatQuoteSentToCarrier(qlQuotesCreator));

const wcQuotesCreator = new WCQuotesCreator();

console.log(formatQuoteSentToCarrier(wcQuotesCreator));
