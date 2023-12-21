import { ContactIterator } from "./contact-iterator.js";
import { Contact } from "./contact.js";
import { ContactsSource } from "./contacts-source.interface.js";
import { SlackIterator } from "./slack-iterator.js";

export class Slack implements ContactsSource {
  private contacts: Contact[] = [];

  getContacts(team: string): Contact[] {
    return this.contacts.filter((contact) => contact.team === team);
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  getAgentPortalMembersIterator(): ContactIterator {
    return new SlackIterator(this, "Agent Portal");
  }

  getCheckoutMembersIterator(): ContactIterator {
    return new SlackIterator(this, "Checkout");
  }
}
