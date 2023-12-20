import { EpicAdapter } from "./epic-adapter.js";
import { Epic } from "./epic.js";
import { Salesforce } from "./salesforce.js";

const client = new Salesforce();

console.log("With my Salesforce Client, I can create policies");
console.log(client.createPolicy());
console.log("");

const epic = new Epic();
console.log(
  "But the Epic client is weird, I wanted to create receipts but doesnt work"
);
console.log(epic.createReceipt());
console.log("");

const epicAdapter = new EpicAdapter(epic);
console.log("Good thing that I have my epic adapter:");
console.log(epicAdapter.createReceipt());
console.log("");
