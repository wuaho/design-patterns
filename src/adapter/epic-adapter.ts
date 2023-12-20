import { Epic } from "./epic.js";
import { Salesforce } from "./salesforce.js";

export class EpicAdapter extends Salesforce {
  private adaptee: Epic;

  constructor(adaptee: Epic) {
    super();
    this.adaptee = adaptee;
  }

  public createReceipt(): string {
    const result = this.adaptee.createReceipt().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
