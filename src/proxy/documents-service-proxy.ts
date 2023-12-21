import { DocumentsService } from "./documents-service.interface.js";
import { RailsDocumentsService } from "./rails-documents-service.js";

export class DocumentsServiceProxy implements DocumentsService {
  private documentsService: RailsDocumentsService;
  private cachedDocuments: string[];

  constructor(documentsService: RailsDocumentsService) {
    this.documentsService = documentsService;
  }

  async getOpportunityDocuments(): Promise<string[]> {
    if (!this.cachedDocuments) {
      this.cachedDocuments =
        await this.documentsService.getOpportunityDocuments();
    }
    return this.cachedDocuments;
  }
}
