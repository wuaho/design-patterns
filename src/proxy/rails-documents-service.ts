import { DocumentsService } from "./documents-service.interface.js";

export class RailsDocumentsService implements DocumentsService {
  public async getOpportunityDocuments(): Promise<string[]> {
    console.log("Looking for Opportunity documents, this might take a while");
    await new Promise((r) => setTimeout(r, 2000));
    return ["doc_uuid_1", "doc_uuid_2", "doc_uuid_3"];
  }
}
