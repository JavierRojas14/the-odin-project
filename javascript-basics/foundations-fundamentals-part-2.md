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


Ocupar if para bloques if, y nunca short-circuits para realizar esta operación

## NOT (!)

Para utilizar el operador NOT se utiliza el signo de exclamación !. En primer lugar, convierte el operando en boolean, y luego retorna el boolean invertido.

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


# Comparisons

Recordar que al comparar dos valores, a través de los operadores ==, convierte los operandos a números.

null y undefined sólo son iguales entre ellos con non-strict equality


# Tasks

Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.

```
let age;

if !(age >= 14 && age <= 90) {
    //execute
}
```

```
let age;

if (age < 14 || age > 90) {
    //execute
}
```

Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

if(-1) Se ejecuta
if(0) No se ejecuta
if (1) Se ejecuta


# Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
The schema:


let decision = prompt()
if (decision) {
    if (decision == "Admin") {
        password = prompt()
        if (password) {
            if (password == "TheMaster") {
                alert('Welcome!');

            } else {
                alert('Wrong password');
            }

        } else {
            alert('Canceled');
        }

    } else {
        alert("I don't know you");
    }

} else {
    alert('Canceled');
}


# Switch statements

Si tengo una lista de opciones, es mejor a veces ocupar el switch operator

switch (expression) {
    case choice1:
      //execute
      break;
    
    case choice2:
      //execute
      break;
    
    default:
      //execute
}

Por ejemplo:

```
const choice = document.querySelector('select');
let content;

switch (choice) {
    case 'sunny':
      content = 'go without a coat';
      break;

    case 'rainy':
      content = 'go with a coat';
      break;

    case 'cloudy':
      content = 'go with a coat';
      break;

    case 'snowing':
      content = 'go with a coat';
      break;
}

```

# Operador ternario o conditional

Tiene la sintaxis condition ? run this code : run this code instead;. Se utiliza cuando solamente hay dos opciones de cosas para correr.


const greeting = isBirthday
  ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
  : 'Good morning Mrs. Smith.';


Sin embargo, hay veces que se utilizan secuencias de ?
```
let age = 18;

let message = (age < 3) ? 'You're super little':
              (age < 18) ? 'Hello':
              (age < 100) ? 'Greetings!' :
              'What an unusual age!';

alert(message); // 'Greetings!'
```

La secuencia anterior se ejecuta de la siguiente forma:

1. Se declara la variable age y se asigna el valor 18
2. Se evalua (age < 3), lo que da false, por lo que el operador condicional salta a su 3er operando (age < 18 ? 'Hello')
3. Se evalua (age < 18), lo que da false, por lo que nuevamente se salta al 3er operando
4. Se evalua (age < 100), lo que da true, por lo que salta al 2do operando, y da 'Greetings!'
5. Se asigna el valor 'Greetings!' a message.

Sin embargo, esto se hace con ifs, y no es recomendado hacerlo con operadores condicionales!


# Tasks

Will alert be shown?

```
if ("0") {
  alert( 'Hello' );
}
```
Si se va a mostrar, ya que es un non-empty string


The name of JavaScript
importance: 2
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”


let userDecision = prompt();

if (userDecision === "ECMAScript") {
    alert("Right!");

} else {
    alert("You don't know? ECMAScript!");
}

Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.


let number = Number(prompt());

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}


let result = (a + b < 4) ? 'Below': 'Over';

Rewrite 'if..else' into '?'
importance: 5
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}


let message = (login == 'Employee') ? 'Hello':
              (login == 'Director') ? 'Greetings':
              (login == '') ? 'No login':
              ''; 


# Knowledge Check

What are the eight data types in JavaScript?
Number, String, BigInt, Boolean, null, undefined, object, symbol

Which data type is NOT primitive?
Object, ya que es un conjunto de datos

What is the relationship between null and undefined?
null solamente es non-strict igual a undefined y vice versa. Null corresponde a zero, vacio, mientras que undefined es la ausencia de dfinición de un valor

What is the difference between single, double, and backtick quotes for strings?
Single y double son lo mismo, y las backtick permiten ingresar f strings

What is the term for embedding variables/expressions in a string?
No recuerdo

Which type of quote lets you embed variables/expressions in a string?
La backquote (`)

How do you embed variables/expressions in a string?
`${var}`

How do you escape characters in a string?
Con \

What is the difference between the slice/substring/substr string methods?
Slice pide un rango, pero es no inclusivo con el final del rango. Substring pide un rango, pero es inclusivo con el final del rango

What are the three logical operators and what do they stand for?
AND (&&), OR (||), NOT (!)

What are the comparison operators?
Son >, >=, <, <=, == y ===

What are truthy and falsy values?
Son valores que al ser convertidos a booleanos dan true (para truthy) o false (para falsy)

What are the falsy values in JavaScript?
0, null, undefined, "", NaN y false


What are conditionals?
Son bloques de codigos que se ejecutan solamente cuando se cumple/no se cumple una expresión 

What is the syntax for an if/else conditional?
if (condition) {
  // execute
} else {
  // execute
}


What is the syntax for a switch statement?

switch (variableForSwitch) {
  case 1:
    //execute
    break;
  
  case 2:
    //execute
    break;

  default;
} 
What is the syntax for a ternary operator?
condition ? execute if true: execute if false


What is nesting?
Corresponde a la presencia de bloques de código dentro de otros bloques de código