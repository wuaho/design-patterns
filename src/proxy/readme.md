# Proxy

El patrón Proxy (DocumentsServiceProxy) es un patrón estructural que actúa como un sustituto o intermediario para controlar el acceso a un objeto (RailsDocumentsService). Proporciona una capa adicional de control al introducir un objeto proxy que puede manejar operaciones antes o después de que se realice la solicitud al objeto real (en este caso metemos una caché en el proxy). Esto es útil para implementar funcionalidades como el control de acceso, la carga diferida, o la gestión de recursos. El proxy tiene la misma interfaz que el objeto real, permitiendo que sea utilizado de manera transparente en su lugar.

```
➜  design-patterns git:(main) ✗ npm run start src/proxy/main.ts

> design-patterns@1.0.0 start
> ts-node-esm src/proxy/main.ts

Client: Executing the Rails Documents Service code without a proxy:
First request takes 2 seconds
Looking for Opportunity documents, this might take a while
[ 'doc_uuid_1', 'doc_uuid_2', 'doc_uuid_3' ]
Second request also takes 2 seconds
Looking for Opportunity documents, this might take a while
[ 'doc_uuid_1', 'doc_uuid_2', 'doc_uuid_3' ]
Client: Executing the Rails Documents Service code now with a proxy:
First request takes 2 seconds
Looking for Opportunity documents, this might take a while
[ 'doc_uuid_1', 'doc_uuid_2', 'doc_uuid_3' ]
Second request has the documents cached so its really fast
[ 'doc_uuid_1', 'doc_uuid_2', 'doc_uuid_3' ]
```
