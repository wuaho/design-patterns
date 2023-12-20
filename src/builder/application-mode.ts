export class ApplicationMode {
  public parts: string[] = [];

  public listParts(): void {
    console.log(`Application Mode parts: ${this.parts.join(", ")}\n`);
  }
}
