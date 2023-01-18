# Objects

Son lo mismo que los diccionarios en Python.

## Formas de declararlos

Con los brackets curvos

```javascript
let diccionario = {'name': 'Javier',
                   'age': 25}
```

Con el literal Object(), pero es mejor utilizar los brackets curvos.

## Acceder a las llaves

Con la notacion punto:

```javascript
diccionario.name // Javier
diccionario.age // 25
```

Con la notacion de bracket cerrado (para propiedades que tienen espacios)

```javascript
diccionario['name'] // Javier
diccionario['age'] // 25
```

Muy acceder a las cosas de pandas

## Borrar una llave: valor

```javascript
delete key[value];
```

## Ver si existe una llave en el diccionario

Se hace con el operador in

```javascript
'gusto' in diccionario; // Retorna falso
```

## Iterar en un objeto

Se pueden iterar todas las llaves con el operador for...in, muy python

```javascript
for (let key in diccionario) {

}
```

# Tasks

```javascript
let user = {};

user['name'] = 'John';
user['surname'] = 'Smith';
user['name'] = 'Pete';
delete user['name'];

function isEmpty(obj) {
    let size = Object.keys(obj).length
    if (size === 0) {
        return True;
    } else {
        return False;
    }
}

let sum = 0;

for (let prop in salaries) {
    sum += salaries[prop];
}

function multiplyNumeric(obj) {
    for (let prop in obj) {
        let valueOfKey = Number(obj[prop]);
        if (typeof valueOfKey === 'number') {
            obj[prop] = valueOfKey * 2;
        }
    }
}
```

# Knowledge Check

What is the difference between objects and arrays?
Los objetos son un tipo de datos que puede albergar diversos tipos de datos en un unico elemento

How do you access object properties?
Con la notacion de punto (object.property) o de corchetes (object[property])

What is Array.prototype.map() useful for?
Para aplicar una funcion a todos los elementos de una lista

What is Array.prototype.reduce() useful for?
Para obtener un unico valor desde una lista. Este se obtiene luego de haber aplicado una funcion
a los elementos del array.