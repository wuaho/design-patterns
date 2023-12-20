import { ApplicationModeBuilder } from "./application-mode-builder.interface.js";
import { ApplicationMode } from "./application-mode.js";

export class Genesis implements ApplicationModeBuilder {
  private applicationMode: ApplicationMode;

  constructor() {
    this.reset();
  }
  setSreRepository(): void {
    this.applicationMode.parts.push("SRE Repository config");
  }
  configureConsul(): void {
    this.applicationMode.parts.push("Consul configuration");
  }
  configureCatalog(): void {
    this.applicationMode.parts.push("Catalog configuration");
  }

  reset(): void {
    this.applicationMode = new ApplicationMode();
  }

  getApplicationMode(): ApplicationMode {
    const result = this.applicationMode;
    this.reset();
    return result;
  }
}
