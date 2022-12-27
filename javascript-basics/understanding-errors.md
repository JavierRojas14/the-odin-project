# Errores

Constan de las siguientes partes: 
- Un tipo de error: Indica qué tipo de error (ej: ReferenceError)
- La descripción del error: Indica cuál fue el problema en específico (ej: c no está definida)
- La localización del error: Se indica el archivo y la linea en donde ocurrió el error. Por ejemplo: at script.js:4
- El call stack: Indica en qué función ocurrió el error. Por ejemplo:

![error](https://cdn.statically.io/gh/TheOdinProject/curriculum/284f0cdc998be7e4751e29e8458323ad5d320303/foundations/javascript_basics/understanding_errors/imgs/01.png)

Indica que el error ocurrio al llamar la función add, que fue llamada luego de haber llamado a la función print, donde la función print fue llamada en la linea 12 del archivo "script.js". 


# Tipos de Errores comunes

1. Syntax Error: Cuando se escribe erróneamente el código.
2. Reference Error: Ocurre cuando se esta utilizando una variable que NO está definida. 
3. Type Error: Cuando se utiliza un tipo de dato erróneo para algún tipo de operación u otros.


# Cómo resolver errores

1. Intenar resolverlo por motivos propios
2. Googlearlo
3. Debuggearlo
4. Usar console.log()


# Errors vs Warnings

Los errores y warning son distintos, ya que el primero detiene el programa, mientras que el segundo no. El primero aparece en rojo y el segundo en amarillo. El primero son errores que impiden el funcionamiento del programa, mientras que el segundo son advertencias sobre el funcionamiento, que no necesariamente detienen el flujo de este. 


# Knowledge Check

What are three reasons why you may see a TypeError?
- Se está utilizando un tipo de dato que es incorrecto para la utilización de una función. 
- Se intenta cambiar un tipo de dato inmutable. 
- Se utiliza un valor de forma inapropiada.

What is the key difference between an error and a warning?
- El error para el programa, mientras que el warning no

What is one method you can use to resolve an error?
- Googlearlo
