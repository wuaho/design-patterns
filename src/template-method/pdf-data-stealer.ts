import { FileDataStealer } from "./file-data-stealer.interface.js";

export class PDFDataStealer extends FileDataStealer {
  protected prepareFileExtension(): void {
    console.log("PDFDataStealer says: file format is now PDF");
  }

  protected stealImportantMetadata(): void {
    console.log("PDFDataStealer says: stealing PDF title and main paragraphs");
  }
}
