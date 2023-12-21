# Strategy

El patrón Strategy es un patrón de diseño de comportamiento que define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables (Premium Quotes y Cheap Quotes). Permite que el cliente (Agent Portal) elija el algoritmo apropiado en tiempo de ejecución sin modificar la estructura del código. Se compone de tres partes principales: el Contexto, que mantiene una referencia a la estrategia actual; la Estrategia, que define una interfaz común para todos los algoritmos; y las Implementaciones Concretas, que son las diferentes estrategias que se pueden intercambiar en el contexto. Esto proporciona flexibilidad al permitir que un objeto cambie su comportamiento sin cambiar su estructura.

```
➜  design-patterns git:(main) ✗ npm run start src/strategy/main.ts

> design-patterns@1.0.0 start
> ts-node-esm src/strategy/main.ts

Agent Portal: Quote Strategy is set to online (cheap) quoting.
Getting $300 quotes from online integrations
[
  { price: 1000, carrier: 'ING Direct' },
  { price: 300, carrier: 'Santalucia' }
]

Agent Portal: Quote Strategy is set to manual (premium) quoting.
Calling an Agent to get the best $300 quotes right now
[
  { price: 10000, carrier: 'The Hartford' },
  { price: 2000, carrier: 'CNA' }
]
```
