import { ApplicationModeBuilder } from "./application-mode-builder.interface.js";

export class Director {
  private applicationModeBuilder: ApplicationModeBuilder;

  public setApplicationModeBuilder(
    applicationModeBuilder: ApplicationModeBuilder
  ): void {
    this.applicationModeBuilder = applicationModeBuilder;
  }

  public buildOktetoApplicationMode(): void {
    this.applicationModeBuilder.setSreRepository();
    this.applicationModeBuilder.configureConsul();
  }

  public buildD2CApplicationMode(): void {
    this.applicationModeBuilder.setSreRepository();
    this.applicationModeBuilder.configureConsul();
    this.applicationModeBuilder.configureCatalog();
  }
}
