# Funciones

Las funciones son bloques de códigos reutilizables. Si la función es parte de un objeto, entonces se llama método. También se pueden llamar funciones dentro de otras funciones.

Los parametros son las variables definidas dentro de una función al ser creada. Los argumentos son los valores que se le pasan a una función cuando es utilizada.

En JS se pueden utilizar los parametros default. O sea:

```
function hello(parametro1 = 'Javier') {
    console.log(`Hola ${parametro1}`)
}
```

## Funciones anónimas

La mayoría de funciones se crean de la forma:

```
function myFunction() {
    alert('hello');
}
```

Sin embargo, se pueden crear funciones anónimas sin nombre:

```
(function () {
    alert('hello');
})
```

Las funciones anónimas son lo mismo que las lambda functions!

Ahora, una utilización es la siguiente:

```
textBox.addEventListener('keydown', function(event) {
    console.log(`You pressed "${event.key}".`)
})
```

## Funciones flechas

Las funciones flechas (arrow functions) son otra notación para las funciones anónimas!

En ves de escribir function(event) se puede escribir (event) =>. Por ejemplo:

```
textBox.addEventListener('keydown', (event) => {
    console.log();
})
```

Ahora, si la función solamente tiene una linea, entonces se pueden omitir los corchetes curvos:

```
textBox.addEventListener('keydown', (event) => console.log());

```

Ahora, si la función solamente acepta 1 parámetro, se puede omitir el paréntesis de los parámetros:

```
textBox.addEventListener('keydown', event => console.log());
```

Si la función retorna solamente 1 valor, entonces se puede omitir el return (como en python)!

```
const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]
```

Ej:

```
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener('keydown', (event) => output.textContent = `You pressed "${event.key}".`);
```

# Scope de funciones

El scope de una función corresponde al compartimiento que sea crea dentro de una función. Esto significa que las variables y otras cosas definidas dentro de este compartimento solamente se pueden acceder desde este, y no desde fuera. 

# Return Values

Son los valores que retorna una función al ser utilizada. Se definen dentro de la función con:

```
function asd() {
    return 1;
}
```

Hay funciones que no retornan nada!

# Nombres de funciones

Hay una convención en el nombre de funciones, donde la primera palabra es un verbo que describe vagamente lo que hace la función, y la segunda palabra es el sujeto/objeto

## Una función - una acción

Es muy buena práctica que una función solamente haga la acción que está definida en su nombre. Ejemplos de malas funciones son:

getAge -> Si retorna la edad, pero también la imprime. Que la imprima es mala práctica, ya que eso no está definido en su nombre

createForm -> Sería malo si modifica el form
checkPermission -> Sería malo si es que muestra en pantalla si se dio o no el permiso (solo debería retornar si es que se hay permiso o no)

Es mejor crear varias funciones, que finalmente auto describen el código, ya que su nombre y funciones son descriptivas y faciles de leer.

# Repaso

Bueno, como repaso hay que ver todo lo que se vió la clase pasada. Se vió todo lo relacionado a funciones en JavaScript. Pasando por los siguientes topicos:

## Declaración

function nameHere(parameters, separated, by, coma) {
    do;
}

## Parametros y argumentos

Los parametros son las variables definidas en la declaración de la función. Los argumentos son los valores que se dan a estas variables cuando se utiliza la función dentro del código.

## Scope

Corresponde al compartimiento que se genera dentro del bloque de la función. Todo lo definido dentro de este bloque solamente es accesible por el código dentro del bloque.

## Arrow functions

Son formas de definir lambda functions.

(argumento) => {
    doThis;
}

## Default parameters

Son los valores por defecto de una función, en caso que el usuario deje sin definir algún argumento de la función.

## Return

Permite retornar un valor desde la función.

# Buenas prácticas de funciones

- Nombre: El nombre debe llevar 2 palabras, donde la primera es un verbo descriptivo de lo que hace la función, mientras la segunda es el sujeto de la función.
- Cantidad de acciones: La función debe hacer exactamente 1 cosa, y que esa cosa este definida por su nombre
- Ocupar solo variables locales: Es mejor siempre utilizar variables locales en vez de globales.


# Funciones como valores

En JS cada función en verdad es un valor que es guardado en una variable. O sea:

```
function sayHi() {
    alert('Hi');
}
```

Lo que en verdad hace es primero declarar una función, y luego asignar este valor a una variable llamada "sayHi". Por lo tanto, la siguiente expresión es equivalente:

```
let sayHi = function() {
    alert('Hi');
};
```

Primero se define una función, y luego es asignada a la variable sayHi!

Debido a que una función es un valor, este se puede copiar a nuevas variables.

```
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)
```

# Repaso

Debido a que una función es simplemente un valor, existen 2 tipos de formas para escribir una función:

## Declaración de función (Function Declaration)

Corresponde a la expresión que hemos estado viendo hasta ahora:

function name(parameters) {
    // do;
}

## Expresión de función (Function Expression)

let name = function() {
    ##do;
};

Debido a que la expresión de una función es como definir una variable, su ejecución se realiza cuando aparece en el código. Las Function Declaration al ser una forma "especial" de definir una función, estas son ejecutadas antes de cualquier parte del código.


# Function Callbacks

Debido a que las funciones son valores, estos pueden ser pasados como argumentos en una función.

```
function ask(question, funcIfYes, funcIfNo) {
    if (confirm(question)) {
        funcIfYes();
    } else {
        funcIfNo();
    };
}
```

Ahora, se pueden utilizar funciones anónimas para hacer más conciso el código anterior:

```
function ask(question, funcIfYes, funcIfNo) {
    if (confirm(question)) {
        funcIfYes();
    } else {
        funcIfNo();
    };
}

ask(
    'Do you agree'?,
    function() {alert('You Agreed.');},
    function() {alert('You canceled the execution.');}
)
```

En este caso, en ves de definir las funciones y asignarlos a una variable, simplemente se utilizaron las expresiones de funciones (funcion anónima en este caso).


# Reglas de oro

Utilizar siempre que se pueda Function Declarations, ya que son más versatiles y robustas al momento de definirlas (se definen al inicializar el código, independiente de dónde residan dentro de este). Las implicaciones de lo anterior permiten lo siguiente:

```
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

Muy python tho

Las Function Expressions son definidas cuando el código llega a estas. 

Por lo tanto, hay 2 formas de definir funciones, function declarations y function expressions. Se prefiere la mayoria de las veces las function declarations. Las function expressions se utilizan en casos particulares (por ej, usualmente cuando se utilizan funciones anonimas)


# Arrow Functions 2.0

Es una forma mas concisa se crear function expressions. Son de la forma:

```
let func = (arg1, arg2, ..., argN) => expression;
```

Y es equivalente a decir:

```
let func = function(arg1, arg2, ..., argN) {
    return expression;
};
```

Por ejemplo:

```
let sum = (a, b) => a + b;

// En ves de

let sum = function(a, b) {
    return a + b;
};
```

Si solo tiene 1 parametro la función, entonces se pueden omitir los parentesis:

```
let sumOne = n => n + 1;
```

Para hacer multi line arrows se utilizan curly parentesis:
```
let sum = (a, b) => {
    let result = a + b;
    return result;
};
```

Y ahi hay que dejar expreso el return!

Por lo tanto, hay 2 formas de arrow functions:

## Con curly braces

```
let func = (...args) => {
    return something;
}
```

## Sin curly braces

```
let func = (...args) => something;
```

# Call Stack

Cuando se ejecutan funciones en JS, se crea un Call Stack, donde se van apilando las llamadas de funciones. Este stack se va rellenando cada vez que se ejecuta/entra a una funcion, y salen las funciones cuando se va a retornar un valor. Esta implementado como un LIFO (Last In, First Out), por lo que las ultimas funciones llamadas son las primeras en retornar.