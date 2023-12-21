import { AgentPortal } from "./agent-portal.js";
import { CheapQuotes } from "./cheap-quotes.js";
import { PremiumQuotes } from "./premium-quotes.js";

console.log("Agent Portal: Quote Strategy is set to online (cheap) quoting.");
const agentPortal = new AgentPortal(new CheapQuotes());
const clientBudget = 300;

console.log(await agentPortal.getQuotesForMyOpportunity(clientBudget));

console.log("");
console.log("Agent Portal: Quote Strategy is set to manual (premium) quoting.");
agentPortal.setQuotesStrategy(new PremiumQuotes());

console.log(await agentPortal.getQuotesForMyOpportunity(clientBudget));
