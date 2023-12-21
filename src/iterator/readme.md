# Iterator

El patrón Iterator es un patrón de diseño de comportamiento que proporciona una interfaz uniforme para acceder secuencialmente a elementos de una colección sin exponer su representación interna (Contact Iterator). Permite recorrer una colección de objetos sin exponer los detalles de su implementación (Slack Iterator), proporcionando métodos estándar como getNext() para obtener el siguiente elemento y hasMore() para verificar si hay más elementos. Esto facilita la iteración sobre diferentes tipos de colecciones de manera consistente y sin conocer la estructura interna de cada una.

```
➜  design-patterns git:(main) ✗ npm run start src/iterator/main.ts

> design-patterns@1.0.0 start
> ts-node-esm src/iterator/main.ts

Agent Portal Members:
{ name: 'Asier', team: 'Agent Portal' }
{ name: 'Juanjo', team: 'Agent Portal' }
{ name: 'Mar', team: 'Agent Portal' }
{ name: 'Fani', team: 'Agent Portal' }

Checkout Members:
{ name: 'Toni', team: 'Checkout' }
{ name: 'Franc', team: 'Checkout' }
```
