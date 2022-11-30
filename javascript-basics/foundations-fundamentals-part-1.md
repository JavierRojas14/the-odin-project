El script de JavaScript se pone en el tag body de un HTML.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Sin embargo, también se puede hacer un archivo externo para linkear el script de JavaScript, muy al estilo del archivo CSS.


```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script src="javascript.js"></script>
</body>
</html>
```

# Variables en JavaScript

En JavaScript las variables se declaran y se asignan!

Para declarar una variable, existen var y let.

Se recomienda utilizar **let!**

```
let variable;
```

Posteriormente, se puede asignar un valor a la variable ya declara

```
let variable;
variable = "Soy un string";
```

Ahora, ambos pasos se pueden unir y hacerlo todo en una línea.

```
let variable = "Soy un string";
```

# Ahora solamente se utiliza **let** para declarar variables! Luego veremos para que existía var. 

Con let se puede reasginar el valor de una variable cuantas veces se quiera!

```
let message;
message = "Hello";
message = "Bye";
```
Ahora, NO se puede volver a declarar una misma variable!

```
let message = "This";
let message = "That";
```

Esto genera una excepción!

# Nombre de variables

1. Se utiliza camelCase para variables que tienen más de una palabra.

# Declaración const

Hay otra forma de declarar una variable, y es con la keyword **const**. Este tipo de variable solamente se puede declarar una vez (igual que let), y no se puede reasignar (distinto a let). 

```
const myBirthday = '18.04.1902';
myBirthday = '22.2.2222';
```

Esto generaría un error!

- UPPERCASE constants: Son constantes que se sabe su valor antes de ejecutar el programa. Ej: 

```
const COLOR_ORANGE = "#FF7F00";
```

En este caso, son const que deben ir (o la convención es que) en mayúsculas y con snake case. 

- lowercase constants: Son valores constantes que no cambian, pero que se calculan durante la ejecución del programa.

```
const pageLoadTime = /* time taken by a webpage to load */;
```

# Declaración de variables - Buenas prácticas

Crear una nueva variable no genera problemas de performance, por esto es mejor declarar muchas, a ocupar una y reasignarla constantemente!.

Deben ser descriptivas

# Números

El operador ++ incrementa en 1 a la variable INPLACE.

```
let x = 5;
x++;
console.log(x) -> 6
```

En JavaScript no existen los float, int o sub divisiones de números. En JavaScript todo número es float64

Para los operadores de JS, antes de realizar la operación siempre se intentará convertir un string a número. Por lo tanto, esto funciona:

```
let x = "20";
let y = "10";

let operacion = x / y; -> 2
```

Casi todos los operadores funcionan igual que en Python, SIN EMBARGO, el operador = es un operador como cualquier otro. Por lo tanto, tiene precedencia, importancia y se evalúa igual que los operadores como +, -, /, *. Además, retorna el valor asignado!

**Todos los operadores de JS retornan un valor** Por ejemplo: 

4 + 9 -> RETORNA 13
11 - 3 -> RETORNA 8

Ahora, como = es también un operador, también retorna los valores.


```
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
```

En primer lugar, se evalúa la expresión a = b + 1 -> 3. Por lo tanto, en este caso se declara y se asigna el valor de 3 a la variable a. Además, esta operación retorna el valor 3, por lo que la expresión de c queda:

let c = 3 - 3;

O sea, a = 3 y c = 0!

Ahora, no hay que escribir código así por favor!


# Incrementar/decrementar por 1

Se utiliza el operador ++ y el operador --.

```
let counter = 2;
counter++;
alert(counter); // 3
```

Y con decrement es lo mismo. 

Ahora, este operador se puede poner antes o después de la variable. 

counter++ o ++counter;

Estos se diferencian en el valor que retornan!

```
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
```

En la forma prefix, se retorna el valor actualizado.

```
let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
```

Mientras que en la forma postfix, se retorna el valor antiguo.

Cabe destacar que ambos incrementan a la variable counter en 1, sin embargo, el valor que retornan es distinto.

Una linea, una acción

"" + 1 + 0 // "10"
"" - 1 + 0 // 
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2

Con el operador unario + se convierte a número cualquier cosa. Es como 
un int(x).

En JS es +"20" -> 20