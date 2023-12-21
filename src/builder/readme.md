# Builder

El patrón Builder separa la construcción de un objeto complejo de su representación, permitiendo la creación flexible de diferentes variantes mediante un proceso paso a paso. Involucra un Builder (Genesis) abstracto, un ConcreteBuilder (ApplicationModeBuilder) que ensambla partes específicas, un Director que coordina la construcción sin conocer detalles y un Producto final. Es útil para objetos con estructuras complejas al simplificar la creación de representaciones diversas del mismo objeto.

```
➜  design-patterns git:(main) ✗ npm run start src/builder/main.ts

> design-patterns@1.0.0 start
> ts-node-esm src/builder/main.ts

Appmode for D2C:
Application Mode parts: SRE Repository config, Consul configuration, Catalog configuration

Appmode for Okteto:
Application Mode parts: SRE Repository config, Consul configuration
```
