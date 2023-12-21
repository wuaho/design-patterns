import { DocumentsServiceProxy } from "./documents-service-proxy.js";
import { RailsDocumentsService } from "./rails-documents-service.js";

console.log(
  "Client: Executing the Rails Documents Service code without a proxy:"
);
const railsDocumentsService = new RailsDocumentsService();
console.log("First request takes 2 seconds");
console.log(await railsDocumentsService.getOpportunityDocuments());
console.log("Second request also takes 2 seconds");
console.log(await railsDocumentsService.getOpportunityDocuments());

console.log(
  "Client: Executing the Rails Documents Service code now with a proxy:"
);
const documentsServiceProxy = new DocumentsServiceProxy(railsDocumentsService);
console.log("First request takes 2 seconds");
console.log(await documentsServiceProxy.getOpportunityDocuments());
console.log("Second request has the documents cached so its really fast");
console.log(await documentsServiceProxy.getOpportunityDocuments());
