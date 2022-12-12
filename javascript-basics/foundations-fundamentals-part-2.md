# Data types in JS

Hay 8 tipos

En JS se puede cambiar el tipo de dato que guarda una variable. Esto significa que JS es un lenguaje dinámico!

```
let message = "hello";
message = 123456;
```

En este caso, se cambio el tipo de dato que guarda la variable message. Por lo tanto, se esta utilizando la funcionalidad dinámica de JS.

## Number

Son los ints y floats normales. Además, también son los valores especiales Infinity, -Infinity y NaN. 

```
let x = (1 / 0) // Infinity
```

```
let x = "not a number"  - 20; // NaN
```

NaN es un valor que representa un error en el calculo. Se obtiene cuando se realiza una operación matemática indefinida. 

NaN es sticky/pegajoso. O sea, cualquier operación que se haga con NaN retornará NaN.

## BigInt

Number sólo puede guardar con precisión los números hasta (2^53-1) (9007199254740991) o -(2^53-1) (-9007199254740992). Cualquier número mayor/menor a eso será aproximado a los bordes. Por lo tanto, para guardar números mayores se utiliza BigInt. Para guardar un big int se agrega la letra "n" al final del número.

```
let x = 2173904219048219083902130214897128371289373n; // Es un big int
```

## Strings

Son pedazos de texto. Se pueden utilizar con 3 tipos de comillas:

'hola'
"hola"
``hola``

Las comillas simples y dobles cumplen la misma funcionalidad. Sin embargo, las comillas reversas son como los f-strings de python.

```
let str = "Hello";
let phrase = `can embed another ${str}`
```

## Boolean

Son los true o false.

## Null

Solamente son los null types, y el unico valor que puede tener es null. Representa nada/vacio o un valor desconocido.

## Undefined

Corresponde a un único valor, que es undefined. Los valores undefined aparecen cuando no se ha definido el valor de una variable.

## Objects and Symbols

Objects son las clases como en Python. Pueden albergar distintos tipos de datos en uno solo. 

Los symbols se utilizan para crear identificadores únicos para los objects.

### typeof

typeof es un operador que retorna el tipo de dato que es el operando. Es como type(), pero es un operador, no una funcion!

Por lo tanto, los 8 tipos de operadores que existen son:

- Number
- BigInt
- Strings
- Boolean
- Null
- Undefined
- Object
- Symbols


# Strings

Se pueden utilizar single/double quotes de forma similar a python. Tiene escape characters con \. Con los backticks se utilizan f strings basicamente. Los multi line strings se hacen con cualquier tipo de quote, ya que se respetan los saltos de linea.

let name = 'asdjoidfjoiwefji
klsdfudisfoiwef oaoa
'

/*
asdjoidfjoiwefji
klsdfudisfoiwef oaoa
*/

## Métodos de strings

### length

String.length => Te da el largo del string

### slice(beginning, end)

Te da el substring correspondiente a los parámetros dados a la función (Es como str[a: b])

### replace

Reemplaza la primera ocurrencia del string que se quiere cambiar dentro del string a cambiar. Retorna un nuevo string, y no cambia el string original.

```
let text = "Please visit Microsoft!";
let newText = text.replace('Microsoft', 'W3School');
```

### toUpperCase() toLowerCase()

Hace todo mayusculas o minusculas.

### trim()

Borra los espacios iniciales y finales


# Conditionals

Son los operadores de comparación.

\>, <, !=, ==, >=, <= y ===

Notar que al utilizar **==** los operandos se convierten en números. Por lo tanto, al evaluar la siguiente expresión:

```
0 == false; // true, a pesar de que sean distintos tipos de datos. Esto, porque false se transforma en Number().
```

Al utilizar **===** NO se hace un cambio de tipo previo a la comporación, por lo que en el caso anterior:

```
0 == false; // false, porque son 2 tipos de datos distintos.
```

## null y undefined

Recordemos que null significa la empty, vacio, etc... mientras que undefined se utiliza cuando aún no se ha definido un valor para una variable. Por lo tanto, cuando se utiliza un non-strict equal

null == undefined // false

Bueno, la cosa es que comparar o hacer operaciones booleanas con null y undefined es raro, asi que solamente hay que hacerlas cuando se esté seguro de lo que se está haciendo.


# Tasks

5 > 4
True

"apple" > "pineapple"
false

"2" > "12"
True

undefined == null
true

undefined === null
false

null == "\n0\n"
true

null === +"\n0\n"
false


# Conditional Statements

if/else/else if


## if

```
if (condition) {
    // execute;
}

if (hour < 18) {
    console.log("It's gonna be a great day!");
}
```

## else

```
if (condition) {
    ## execute1;
} else {
    ## execute2;
}
```

## else if

```
if (condition) {
    ## execute1;
} else if (condition) {
    ## execute2;
} else {
    ## execute3;
}
```

# Logical operators

Son || (OR), && (AND) y !(NOT)

Si un operando NO es booleano, entonces es convertido a booleano antes de ser evaluado.

Las expresiones booleanas son evaluadas hasta la expresión que la satisfaga. Ej:

## OR (||)
```
21 > 20 || true > false
```

La primera expresión es verdadera, por lo que la evaluación del OR termina ahí y retorna true. 

```
undefined || null || 1
```

La primera y segunda expresión son falsas, por lo que el algoritmo avanza hasta la última expresión. 1 es verdadero, por lo que la expresión booleana retorna true.

Este comportamiento permite realizar lo siguiente:

## Obtener el primer valor truthy de una lista

```
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
```

En caso de que ninguno de los argumentos fuera truthy, entonces alert mostraria "Anonymous"

## Short-circuit

```
true || alert("not printed");
false || alert("printed";
```

En este caso, solamente la segunda linea muestra un print. Esto, porque el primer argumento es false, y pasa hacia el segundo argumento y lo evalua!.

## AND (&&)

De forma similar a un OR, AND busca el primer valor falsy, para así poder retornar false. En caso que no encuentre ninguno, entonces retornará el último valor.


Ocupar if para bloques if, y nunca short-circuits para realizar esta operación!

# Tasks
```
alert( null || 2 || undefined );
```
Retorna 2

```
alert( alert(1) || 2 || alert(3) );
```

Alerta 1 -> Se llega a 2 -> Retorna 2 (Truthy) y termina la evaluación de la expresión booleana -> Alerta 2

```
alert( 1 && null && 2 );
```
Alerta null

```
alert( alert(1) && alert(2) );
```

Alert 1 -> Alert undefined

```
alert( null || 2 && 3 || 4 );
```

Alert 3

Write an if condition to check that age is between 14 and 90 inclusively.

```
let age;


if (age >= 14 && age <= 90) {
    //execute
}
```
