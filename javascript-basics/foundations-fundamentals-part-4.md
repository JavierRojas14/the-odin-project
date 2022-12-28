# Arrays

Sirven para almacenar muchos datos en un mismo lugar. Por ejemeplo:

```
let car1 = 'Lel';
let car2 = 'Sudo';
let car3 = 'Pop';
```

Se puede hacer lo siguiente, y guardar mucha información

```
const cars = ['Lel', 'Sudo', 'Pop'];
```

Los arrays en JS son declarados con const. También pueden ser declarados con:

const cars = new Array('Lel', 'Sudo', 'Pop');

Pero es mucho mejor el literal con corchetes.

## Acceder a los elementos de un array

Se hace de igual forma que en Python, con sus indices

```
cars[0] // => 'Lel';
```

En JS no existe la numeración invertida (-1, -2, etc)


## Cambiar un elemento del array:

```
const cars = ['Lel', 'Sudo', 'Pop'];
cars[0] = 'Soy';
```

Recordar que const hace que una variable sea imposible declararla de nuevo, pero si es mutable.

## Acceder al array completo

Se hace utilizando el valor de la constante. En este caso: cars

Los arrays pueden guardar cualquier cosa (numeros, bigInt, strings, bool, undefined, null, symbol, objects, funciones, etc)

## Propiedades y metodos

Los arrays tienen las siguientes propiedades y metodos:

cars.length // Retorna el largo del array
cars.sort() // Ordena el array

## Hacer loop a un array

Se puede hacer un for desde el primer item del array (indice = 0), hasta su ultimo item (array.length - 1)

```
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

También se puede usar la función array.forEach(functionToApply)

## Agregar un valor a un array 

Para hacer un array.append(elemento) como en Python se utiliza **array.push(elemento)**.
También se puede hacer ```array[array.length] = elemento```


Los arrays son numbered indexados (o sea que sus indices son numeros). Si uno intenta definir un array con named indexes (indices con nombres, como los diccionarios!), este automáticamente va a ser un object.

Un array en JS es un tipo especial de object. La diferencia es que los array tienen indices numéricos en vez de strings. Pero son objects igual


# Métodos de los arrays

## toString()

Convierte un array en un string separado por comas! Es como ','.join(array) en Python.

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // "Banana,Orange,Apple,Mango"
```

## join()

Es como toString(), pero se puede especificar el separador!

```
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(' * '); // "Banana * Orange * Apple * Mango"
```

## pop()

Igual que en Python, saca el último elemento del array y lo retorna

## push()

Igual que append() de Python, agrega un item en la último posición del array

## shift()

Remueve el primer item de un array, es un pop() del primer item

## unshift()

Agrega en la primera posición del array, es un push() del primer item

## Cambiar items

Se hace especificando el indice del elemento que se quiere cambiar, y el nuevo elemento

```
array[3] = "Pepito";
```

## Juntar 2 o más arrays

Con concat().

const myGirls = ['Marta', 'Pepa'];
const myBoys = ['Ctulhu', 'cocha'];

console.log(myBoys.concat(myGirls));

## Obtener una parte de un array

En JS no existe la notación array[1:3], por lo tanto se utiliza el método .slice(start, end). Los indices si funcionan como los indices de Python (inclusivo en start, exclusivo en end)


