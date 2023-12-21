import { Contact } from "./contact.js";

export interface ContactIterator {
  getNext(): Contact;
  hasMore(): boolean;
}
