# Adapter

El patrón Adapter es un patrón estructural que permite que dos interfaces incompatibles (Salesforce y Epic) trabajen juntas. Funciona mediante la creación de un adaptador (Epic Adapter) que actúa como intermediario entre dos clases, convirtiendo la interfaz de una de ellas para que sea compatible con la otra. Esto permite la integración de componentes que de otra manera no podrían funcionar juntos, facilitando la reutilización de código existente y la interoperabilidad entre sistemas diferentes.

```
➜  design-patterns git:(main) npm run start src/adapter/main.ts

> design-patterns@1.0.0 start
> ts-node-esm src/adapter/main.ts

With my Salesforce Client, I can create policies
Create a new policy

But the Epic client is weird, I wanted to create receipts but doesnt work
.tpiecer wen a etaerC

Good thing that I have my epic adapter:
Adapter: (TRANSLATED) Create a new receipt.
```
