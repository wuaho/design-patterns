import { Slack } from "./slack.js";

const slack = new Slack();
slack.addContact({ name: "Asier", team: "Agent Portal" });
slack.addContact({ name: "Juanjo", team: "Agent Portal" });
slack.addContact({ name: "Toni", team: "Checkout" });
slack.addContact({ name: "Mar", team: "Agent Portal" });
slack.addContact({ name: "Fani", team: "Agent Portal" });
slack.addContact({ name: "Franc", team: "Checkout" });

const agentPortalMembersIterator = slack.getAgentPortalMembersIterator();

console.log("Agent Portal Members:");
while (agentPortalMembersIterator.hasMore()) {
  console.log(agentPortalMembersIterator.getNext());
}

console.log("");
console.log("Checkout Members:");
const checkoutMembersIterator = slack.getCheckoutMembersIterator();
while (checkoutMembersIterator.hasMore()) {
  console.log(checkoutMembersIterator.getNext());
}
