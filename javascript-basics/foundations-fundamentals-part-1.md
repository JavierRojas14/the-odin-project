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


# "unary", "binary", "operand"

Los **operand** son los operandos, que son a los que se les aplica el operador. Ej:

```
1 + 2 // Aquí hay 2 operandos y 1 operador 
```

Un operador es unario cuando solamente esta al lado de 1 operando. Ej:

```
+1 -> Aqui hay 1 operando y es 1 operador unario
```

Un operador es binario cuando esta al lado de 2 operando. Ej:

```
1 + 2 // 2 operando y 1 operador binario
```

# String concatenation with binary +

Si se suman 2 strings, entonces estos se concatenaran!

```
let s = "Hola" + "soy" + "Javier"; => "HolasoyJavier"
alert(s); "HolasoyJavier"
```

Ahora, si se suman diversos tipos de datos, pero existe por lo menos 1 string, **entonces todos se convertiran a string**!

```
let s = "1" + 2;
let z = 1 + "4";
alert(s); // "12"
alers(z); // "14"
```

Ahora, para operaciones más complejas:

```
alert(2 + 2 + '1'); => "41" y no "221". Esto, porque se ejecuta secuencialmente!
```

```
alert('1' + 2 + 2); => "122" y no "14". Nuevamente, porque se ejecuta secuencialmente
```

Solamente el operador + funciona de esta forma, todos los demas funcionan solamente con números y convertiran el string a número.

# Numeric conversion, unary +

El unario + convierte todo tipo de dato a número (exceptuando los que ya son números).

```
let x = 2;
+x; // 2
```

```
let x = True;
+x; // 1
```

Es como si se le aplicara Number(...) a cualquier tipo de dato, pero mucho más corto.


Ahora, un caso mas complejo:

```
let apples = "2";
let oranges = "3";

alert(apples + oranges); // "23"
alert(+apples + +oranges); // 5
```

# Operator precedence

Hay un orden de ejecución para cada uno de los tipos de operadores! Los unarios son los que tienen más prioridad (por eso el ejercicio anterior funcionó)

# Assignement o asignar un valor a una variable

Solamente se puede hacer con una variable mutable (ej, una declarada con let). Es un operador, por lo que retorna un valor. Tiene muy baja prioridad en la precedencia de operadores, por lo que siempre se ejecutan las operaciones y luego la asignación!

# Increment/Decrement

Es un tipo especial de operador, y solamente funciona en variables (++5 no funciona). Incrementa/decrementa en 1 una variable!

```
let x = 5;
x++; //
alert(x); // 6
```
```
let x = 6;
x--;
alert(x) // 5
```

Este tipo de operador se puede poner antes o despues de la variable. Sin embargo, ambos incrementan el valor de la variable. Pero la diferencia reside en el valor que retorna 

```
let a = 1;
a++; // Retorna 1
++a; // Retorna 3
alert(a); // 3
```

Cuando se utiliza a++, primero se retorna el valor de la variable previo al incremento, y luego se incremente. Cuando se utiliza ++a, primero se suma 1 a la variable, y luego se retorna el valor incrementado!

```
let counter = 1;
let a = ++counter; 
let b = counter++;
alert(a); 2
alert(b); 2
alert(counter); 3
```

# Comas

Es el operador con la menor precedencia (incluso menos que =). Permite evaluar diversas expresiones matemáticas, pero solamente la última es retornada

```
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)
```

A veces se ocupan en cosas como estas:
```
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```

## Tasks

### 1.1
```
let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
```

a y b serian 2, c seria 2 y d seria 1

### 1.2
```
let a = 2;

let x = 1 + (a *= 2);
```

a seria 4
x seria 5

### 1.3

```
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
```
"" + 1 + 0 => "10"
"" - 1 + 0 => -1
true + false => 1
6 / "3" => 2
"2" * "3" => 6
4 + 5 + "px" => "9px"
"$" + 4 + 5 => "$45"
"4" - 2 => 2






