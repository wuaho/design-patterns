import { ContactIterator } from "./contact-iterator.js";

export interface ContactsSource {
  getAgentPortalMembersIterator(): ContactIterator;
  getCheckoutMembersIterator(): ContactIterator;
}
