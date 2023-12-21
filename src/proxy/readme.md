# Proxy

El patrón Proxy (DocumentsServiceProxy) es un patrón estructural que actúa como un sustituto o intermediario para controlar el acceso a un objeto (RailsDocumentsService). Proporciona una capa adicional de control al introducir un objeto proxy que puede manejar operaciones antes o después de que se realice la solicitud al objeto real (en este caso metemos una caché en el proxy). Esto es útil para implementar funcionalidades como el control de acceso, la carga diferida, o la gestión de recursos. El proxy tiene la misma interfaz que el objeto real, permitiendo que sea utilizado de manera transparente en su lugar.

```
npm run start src/proxy/main.ts
```
