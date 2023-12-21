# Factory Method

El patrón Factory Method es un patrón creacional que define una interfaz para la creación de objetos en una clase base (QuotesCreator) , pero permite a las subclases (GLQuotesCreator, WCQuotesCreator) alterar el tipo de objetos que se crearán. En lugar de crear directamente un objeto mediante un constructor, se utiliza un método de fábrica (Factory Method) que puede ser implementado de manera diferente en cada subclase. Esto proporciona flexibilidad al permitir que las subclases ajusten el proceso de creación de objetos según sus necesidades. El Factory Method es útil cuando una clase no puede anticipar la clase de objetos que debe crear, delegando esa decisión a las subclases.

```
npm run start src/factory-method/main.ts
```
