import { ExcelDataStealer } from "./excel-data-stealer.js";
import { FileDataStealer } from "./file-data-stealer.interface.js";
import { PDFDataStealer } from "./pdf-data-stealer.js";

function agentPortal(fileDataStealer: FileDataStealer) {
  fileDataStealer.stealClientFileData();
}

console.log(
  "Same Agent Portal code can work with different subclasses (PDFDataStealer):"
);
agentPortal(new PDFDataStealer());
console.log("");

console.log(
  "Same Agent Portal code can work with different subclasses (ExcelDataStealer):"
);
agentPortal(new ExcelDataStealer());
