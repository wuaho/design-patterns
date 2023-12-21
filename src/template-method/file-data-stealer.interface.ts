export abstract class FileDataStealer {
  stealClientFileData(): void {
    this.prepareFileExtension();
    this.openFile();
    this.readFile();
    this.eraseMetadata();
    this.stealImportantMetadata();
    this.closeFile();
  }

  protected openFile(): void {
    console.log("Opening the file");
  }

  protected readFile(): void {
    console.log("Reading the file");
  }

  protected closeFile(): void {
    console.log("Closing the file");
  }

  protected abstract prepareFileExtension(): void;

  protected abstract stealImportantMetadata(): void;

  protected eraseMetadata(): void {}
}
