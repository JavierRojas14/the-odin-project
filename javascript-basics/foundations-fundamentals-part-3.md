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