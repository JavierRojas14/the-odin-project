# DOM (Domain Object Model)

El DOM es una representación de árbol de los elementos de una página HTML. Cada elemento HTML es un "nodo" del árbol, y tienen diversas relaciones entre distintos nodos. 

## Tipos de relaciones en el DOM

- Padre-Hijo-Hermano: Sería del tipo

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

En este caso el elemento con id = "parent" es padre de sus dos elementos hijos "child1" y "child2". Además, entre ambos elementos hijos, ellos son hermanos.

# Seleccionar nodos

Se pueden seleccionar nodos con notación de CSS, o con relaciones nodales (padre-hijo-hermanos etc...s)

## Notación CSS

Por ejemplo, para seleccionar el nodo con id = "display" se podrían ocupar las siguientes expresiones:

- div.display
- .display
- #container > .display
- div#container > div.display

## Notación relacional

Para el mismo ejemplo anterior, se pueden utilizar las siguientes expresiones:

```javascript

// Para seleccionar por relación padre-hijo
const container = document.querySelector('#container');

console.dir(container.firstElementChild);

// Para seleccionar por relación de hermanos
const controls = document.querySelector('.controls');

console.dir(controls.previousElementSibling); //Selecciona al hermano previo
```

# Métodos del DOM

Cuando se carga una página el HTML pasa a ser el DOM. O sea, que los elementos HTML pasan a ser **"nodos"**. Los nodos tienen una alta cantidad de propiedades y métodos, por lo que se pueden manejar!.

## Query Selectors

Existen los query selectors:

- element.querySelector(selector): Retorna una referencia al primer nodo que haga match

- element.querySelectorAll(selectors): Retorna una lista de nodos que hagan match a los selectors

## Creación de elementos

- document.createElement(tagName, [options]). No pescar options por ahora. Por ejemplo:

```javascript
const div = document.createElement('div')
```

Este método solo crea el elemento, pero no lo pone en el DOM. De esa forma se puede manipular, editar antes de ponerlo en el DOM

## Agregar elementos al DOM

- parentNode.appendChild(childNode). Agrega el nuevo nodo al final del parentNode

- parentNode.insertBefore(newNode, referenceNode). Agrega el nuevo nodo dentro de parentNode, y antes de referenceNode. 

## Quitar elementos del DOM

- parentNode.removeChild(child). Remueve el nodo child del parentNode, y lo retorna. 

## Alterar elementos

Si se tiene la referencia a un elemento del DOM, este se puede alterar de diversas formas.

```javascript
const div = document.createElement('div');

div.style.color = 'blue'; // Pone la letra azul
div.style.cssText = 'color: blue; background: white;';
div.setAttribute('style', 'color: blue; background: white;')
```

## Editar atributos

```javascript
div.setAttribute('id', 'theDiv');

div.getAttribute('id');

div.removeAttribute('id');
```

## Editar clases

Se hace con element.classList

```javascript
div.classList.add('new'); // Agrega la clase new al elemento div

div.classList.remove('new'); // Remove la clase new al elemento div

div.classList.toggle('active') // Agrega o remueve (dependiendo el caso) la clase 'active'.
```

## Agregar contenido de texto

```javascript
div.textContent = 'Hello World!';
```

## Agregar contenido al HTML

```javascript
div.innerHTML = '<span>Hello World!</span>';
```

Para agregar texto es mucho mejor textContent


# Diferencia entre el DOM y el HTML

Notar que si se agrega un elemento al DOM a través de JS, el HTML quedará intacto. Ahora, si nosotros ponemos el script JS al inicio del HTML, estos cambios al DOM no se verán, ya que se cargará el HTML luego del JS, y el HTML carece del nuevo elemento. Debido a esto, el script usualmente se pone al final de todo el HTML


# Eventos

A través de los eventos, se puede cambiar una página de forma dinámica frente a acciones que ocurran (clicks, ingreso de información, etc). Además, se pueden asociar funciones a estos eventos.

Hay 3 formas de que esto ocurra, el método de event listeners es el más recomendado:

## Método 1 - Agregar funciones al HTML

Se agrega un atributo referente al evento que debe ocurrir para que se ejecute la función del argumento:

```javascript
<button onclick="alert('Hello World')">Click Me</button>
```

Esta forma es poco recomendada, ya que se mezcla el HTML con el JS (es inline al final)


## Método 2 - Agregar la propiedad "_on_event" al elemento en el DOM desde JS

```html
<button id="btn">Click Me</button>
```

```javascript
const button = document.querySelector('#btn');
button.onclick() = () => alert('Hello World');
```

Este método es mejor, ya que se separa el HTML del JS. Sin embargo, solamente se puede asociar 1 propiedad "onclick" a ese elemento del DOM.

## Método 3 - Agregar event listeners a los nodos en JS

```html
<button id="btn">Click Me Too</button>
```

```javascript
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert("Hello World");
})
```

De esta forma se puede separar el HTML del JS, y además se pueden asociar diversos eventos a un mismo objeto.

# Acceder a la referencia del evento

Si a la función que le damos al event listener le agregamos que pida un argumento, entonces se pasará el objeto evento a la función!. Esto es muy útil, ya que se pueden acceder a muchas propiedades del evento en si:

```javascript
btn.addEventListener('click', function (e) {
  console.log(e); // Se imprime el objeto evento
});
```

Por ejemplo, se puede obtener una referencia del elemento que se clickeo y modificarlo

```javascript
btn.addEventListener('click', function (e) {
  console.log(e.target);
  e.target.style.background = 'blue';
})
```

# Agregar listeners a grupos de nodos

Si se quiere agregar el mismoi listener a un grupo de elementos, entonces se deben seleccionar con .querySelectorAll, y luego iterar por cada uno de los nodos en la lista obtenida. En cada iteración agregar el eventListener a cada nodo.

# Tipos de eventos

- click
- dblclick
- keydown
- keyup