# Template Method

El patrón Template Method es un patrón de diseño de comportamiento que define la estructura de un algoritmo (FileDataStealer) en una clase base pero permite que las subclases (PDFDataStealer, ExcelDataStealer) modifiquen partes de ese algoritmo sin cambiar su estructura general. El patrón sigue el principio de inversión de control, donde la clase base contiene un método template que define la secuencia de pasos del algoritmo y deja ciertos pasos abstractos o "ganchos" que las subclases deben implementar (prepareFileExtension, stealImportantMetadata y eraseMetadata ). Esto proporciona un esqueleto de algoritmo reutilizable en la clase base, permitiendo a las subclases personalizar partes específicas según sea necesario.