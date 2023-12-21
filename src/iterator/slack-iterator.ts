import { ContactIterator } from "./contact-iterator.js";
import { Contact } from "./contact.js";
import { Slack } from "./slack.js";

export class SlackIterator implements ContactIterator {
  private slack: Slack;
  private team: string;

  private cache: Contact[];
  private currentPosition: number = 0;

  constructor(slack: Slack, team: string) {
    this.slack = slack;
    this.team = team;
  }

  getNext(): Contact {
    if (this.hasMore()) {
      const result = this.cache[this.currentPosition];
      this.currentPosition++;
      return result;
    }
  }

  hasMore(): boolean {
    this.lazyInit();
    return this.currentPosition < this.cache.length;
  }

  private lazyInit(): void {
    if (this.cache == null) {
      this.cache = this.slack.getContacts(this.team);
    }
  }
}
