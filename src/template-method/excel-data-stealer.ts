import { FileDataStealer } from "./file-data-stealer.interface.js";

export class ExcelDataStealer extends FileDataStealer {
  protected prepareFileExtension(): void {
    console.log("ExcelDataStealer says: file format is now EXCEL");
  }

  protected stealImportantMetadata(): void {
    console.log("ExcelDataStealer says: stealing Excel main cells");
  }

  protected eraseMetadata(): void {
    console.log("ExcelDataStealer says: erased Metadata from the file");
  }
}
